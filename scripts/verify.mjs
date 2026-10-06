// Visual check of the Pages build: serves dist under /datha-portfolio/ in-process,
// screenshots both pages at three widths in light and dark, exports the print PDF,
// and walks the CV -> platform -> CV links. Closes its own server on exit.
// Usage: pnpm build:pages && node scripts/verify.mjs [outDir]
import { chromium } from '@playwright/test';
import { createServer } from 'node:http';
import { mkdir, readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const BASE = '/datha-portfolio/';
const DIST = 'dist/datha-portfolio/browser';
const OUT = process.argv[2] ?? '.claude/tmp/verify';
const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
};

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (!path.startsWith(BASE)) return void res.writeHead(404).end();
  let file = normalize(join(DIST, path.slice(BASE.length)));
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, resolve));
const origin = `http://localhost:${server.address().port}${BASE}`;
await mkdir(OUT, { recursive: true });

const problems = [];
const expect = (ok, message) => ok || problems.push(message);
const browser = await chromium.launch({ headless: false });
try {
  const sizes = [
    ['phone', 390, 844],
    ['desktop', 1280, 900],
    ['wide', 1920, 1080],
  ];
  const routes = ['', 'platform', 'resume', 'de', 'de/platform'];
  for (const [name, width, height] of sizes) {
    for (const scheme of ['light', 'dark']) {
      const page = await browser.newPage({ viewport: { width, height }, colorScheme: scheme });
      page.on(
        'console',
        (m) => m.type() === 'error' && problems.push(`${name}/${scheme}: ${m.text()}`),
      );
      page.on('response', (r) => r.status() >= 400 && problems.push(`${r.status()} ${r.url()}`));
      for (const route of routes) {
        // Every language at desktop light; the full matrix for English.
        const english = !route.startsWith('de');
        if (
          !english &&
          !(name === 'desktop' && scheme === 'light') &&
          !(name === 'phone' && scheme === 'dark')
        )
          continue;
        await page.goto(origin + route);
        await page.waitForLoadState('networkidle');
        const state = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          lang: document.documentElement.lang,
          dark: document.documentElement.classList.contains('dark'),
          title: document.title,
        }));
        const label = `${name}/${scheme}/${route || 'en'}`;
        expect(state.overflow <= 0, `${label}: ${state.overflow}px horizontal overflow`);
        expect(
          state.lang === (route.split('/')[0].match(/^de$/)?.[0] ?? 'en'),
          `${label}: html lang is ${state.lang}`,
        );
        expect(state.dark === (scheme === 'dark'), `${label}: .dark is ${state.dark}`);
        await page.screenshot({
          path: `${OUT}/${name}-${scheme}-${route.replace('/', '-') || 'en'}.png`,
          fullPage: true,
        });
      }
      await page.close();
    }
  }

  // Navigation, the language switch keeping the page, and the theme surviving a reload.
  const nav = await browser.newPage({ colorScheme: 'light' });
  await nav.goto(origin);
  await nav.click('.platform-card .button--primary');
  await nav.waitForURL(`**${BASE}platform`);
  await nav.click('.lang-switch a[hreflang="de"]');
  await nav.waitForURL(`**${BASE}de/platform`);
  const heading = (await nav.locator('h1').textContent())?.trim();
  expect(heading?.startsWith('Mein Spielplatz'), `de/platform: h1 is "${heading}"`);
  await nav.click('.wl-hero a.button--ghost:not([target])');
  await nav.waitForURL(`**${BASE}de`);
  expect(
    await nav.evaluate(() => document.documentElement.lang === 'de'),
    'switch: html lang not de',
  );
  await nav.click('.round-button');
  await nav.reload();
  expect(
    await nav.evaluate(() => document.documentElement.classList.contains('dark')),
    'theme: not kept after reload',
  );
  await nav.close();
} finally {
  await browser.close();
}

// PDF export only works headless.
const headless = await chromium.launch();
try {
  const page = await headless.newPage({ colorScheme: 'dark' });
  await page.goto(origin);
  await page.emulateMedia({ media: 'print' });
  // As the browser's print dialog does: header and footer on, backgrounds off.
  // The first version printed backgrounds without them and missed a page-break overlap.
  await page.pdf({
    path: `${OUT}/cv.pdf`,
    format: 'A4',
    displayHeaderFooter: true,
    preferCSSPageSize: true,
  });

  // The US résumé prints on Letter (its own @page) and must fit two pages.
  await page.goto(origin + 'resume');
  const resumePdf = await page.pdf({
    path: `${OUT}/resume.pdf`,
    displayHeaderFooter: true,
    preferCSSPageSize: true,
  });
  const resumePages = (resumePdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  expect(resumePages > 0 && resumePages <= 2, `resume.pdf: ${resumePages} pages, want 1–2`);
  console.log(`resume.pdf: ${resumePages} page(s)`);
} finally {
  await headless.close();
  server.close();
}

console.log(`screenshots, cv.pdf and resume.pdf in ${OUT}`);
console.log(
  problems.length
    ? `PROBLEMS:\n${problems.join('\n')}`
    : 'no overflow, console errors or failed requests',
);
process.exitCode = problems.length ? 1 : 0;
