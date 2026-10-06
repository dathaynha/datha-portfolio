# datha-portfolio

The CV and portfolio site of **Ha Quoc Dat**, Full Stack Developer.

**Live:** https://dathaynha.github.io/datha-portfolio/

| Page | What it is |
| --- | --- |
| [`/`](https://dathaynha.github.io/datha-portfolio/) | Full CV, printable to A4 (Save as PDF) |
| [`/resume`](https://dathaynha.github.io/datha-portfolio/resume) | Concise US-style résumé, printable to US Letter |
| [`/platform`](https://dathaynha.github.io/datha-portfolio/platform) | Overview of [datha platform](https://github.com/dathaynha/datha-platform), my microservices and micro-frontends side project |
| [`/de`](https://dathaynha.github.io/datha-portfolio/de) | The CV and platform overview in German |

## How it is built

- **Angular 22**, zoneless, standalone components and signals.
- **Prerendered to static HTML** (`outputMode: "static"`), one page per route and language, hydrated in the browser. The platform scenes use incremental hydration: each one hydrates and animates as it scrolls into view, with [Motion](https://motion.dev).
- **Languages in the URL**: English at `/`, German at `/de`. A typed content model keeps every visible word in `src/app/content/`, separate from language-neutral facts in `src/app/data/`.
- **The datha platform design system**: colour tokens and Liquid Glass styles ported from the platform's own UI library, light and dark mode set before first paint.
- **Print is a first-class output**: the CV and the résumé each have their own print layout.
- **Deployed by GitHub Actions** to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

## Run it

Requires Node 24 and pnpm 10.

```bash
pnpm install
pnpm start          # http://localhost:4300
pnpm test           # unit specs (Vitest)
pnpm build:pages    # production build for GitHub Pages
pnpm verify         # screenshots at three widths, light and dark, plus the PDFs
```
