import { CONTENT } from './content';
import { LANGS } from './content/model';
import { pagePath, parseUrl } from './core/lang';
import { ROLES } from './data/cv';
import { formatMonth } from './data/period';
import { RESUME } from './content/resume';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lookup } from './core/translate.pipe';

describe('period', () => {
  it('formats a year-month in the given language', () => {
    expect(formatMonth('2024-04', CONTENT.en.ui.months)).toBe('Apr 2024');
    expect(formatMonth('2025-03', CONTENT.de.ui.months)).toBe('März 2025');
  });
});

describe('language URLs', () => {
  it('keeps English at the root and prefixes the others', () => {
    expect(pagePath('en', 'cv')).toBe('/');
    expect(pagePath('en', 'platform')).toBe('/platform');
    expect(pagePath('de', 'cv')).toBe('/de');
    expect(pagePath('de', 'platform')).toBe('/de/platform');
  });

  it('round-trips every page in every language', () => {
    for (const lang of LANGS) {
      for (const page of ['cv', 'platform'] as const) {
        expect(parseUrl(pagePath(lang, page))).toEqual({ lang, page });
      }
    }
  });

  it('serves the résumé in English only, whatever language links to it', () => {
    expect(pagePath('en', 'resume')).toBe('/resume');
    expect(pagePath('de', 'resume')).toBe('/resume');
    expect(parseUrl('/resume')).toEqual({ lang: 'en', page: 'resume' });
  });

  it('ignores query and fragment, and treats unknown prefixes as English', () => {
    expect(parseUrl('/de/platform?x=1#top')).toEqual({ lang: 'de', page: 'platform' });
    expect(parseUrl('/fr')).toEqual({ lang: 'en', page: 'cv' });
    expect(parseUrl('/vi')).toEqual({ lang: 'en', page: 'cv' });
  });
});

// Every `WELCOME.*` key in the platform page's templates and constants. A key the
// content lacks would render as the key itself, with no error.
const PLATFORM_DIR = join(process.cwd(), 'src/app/pages/platform');
const WELCOME_KEYS = [
  ...new Set(
    (readdirSync(PLATFORM_DIR, { recursive: true }) as string[])
      .filter((file) => /\.(html|ts)$/.test(file))
      .flatMap(
        (file) =>
          readFileSync(join(PLATFORM_DIR, file), 'utf8').match(/WELCOME(\.[A-Z0-9_]+)+/g) ?? [],
      ),
  ),
];

describe('welcome keys', () => {
  it('finds the keys the scenes use', () => {
    expect(WELCOME_KEYS.length).toBeGreaterThan(40);
  });
});

// Translations are aligned with the neutral facts by index; a missing line would
// silently render `undefined`.
describe.each(LANGS)('%s content', (lang) => {
  const content = CONTENT[lang];

  it('has a description for every project', () => {
    for (const role of ROLES) {
      expect(content.cv.roles[role.id].projects).toHaveLength(role.projects.length);
    }
  });

  it('resolves every WELCOME key the platform page and its scenes use', () => {
    for (const key of WELCOME_KEYS) {
      expect(lookup(content as unknown as Record<string, unknown>, key), key).not.toBe(key);
    }
  });

  it('has twelve month names', () => {
    expect(content.ui.months).toHaveLength(12);
  });

  it('has the same number of lines as English, so nothing was dropped in translation', () => {
    const en = CONTENT.en.cv;
    expect(content.cv.summary).toHaveLength(en.summary.length);
    expect(content.cv.roleSummary).toHaveLength(en.roleSummary.length);
    expect(content.cv.skills.map((g) => g.items.length)).toEqual(
      en.skills.map((g) => g.items.length),
    );
    for (const role of ROLES) {
      expect(content.cv.roles[role.id].responsibilities).toHaveLength(
        en.roles[role.id].responsibilities.length,
      );
    }
  });
});

// A US résumé earns its place by being short; these keep it that way.
describe('US résumé', () => {
  it('has three to five bullets per role, the internship excepted', () => {
    for (const role of ROLES.filter((r) => r.id !== 'internship')) {
      const count = RESUME.roles[role.id].bullets.length;
      expect(count, role.id).toBeGreaterThanOrEqual(3);
      expect(count, role.id).toBeLessThanOrEqual(5);
    }
  });

  it('keeps every bullet to about two printed lines', () => {
    for (const role of ROLES) {
      for (const bullet of RESUME.roles[role.id].bullets) {
        expect(bullet.length, bullet).toBeLessThanOrEqual(190);
      }
    }
  });

  it('says Angular v12–21, like the CV', () => {
    expect(RESUME.summary).toContain('Angular (v12–21)');
    expect(RESUME.summary).not.toMatch(/Angular 22/);
  });
});
