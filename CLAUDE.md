# datha-portfolio

Ha Quoc Dat's public CV site: Angular 22, zoneless, prerendered to static HTML, deployed to GitHub Pages at `https://<user>.github.io/datha-portfolio/`.

Two pages in two languages; English at the root, German under `/de`, all four prerendered:

- `/`, `/de`: the CV. **Priority.** Printable (Save as PDF).
- `/resume`: the concise US résumé, **English only**, US Letter in print, reached from the Full CV | US-style résumé switch on either CV page. A `/de` reader who opens it gets the English page.
- `/platform`, `/de/platform`: the datha platform side project. **Secondary**, reached from one card below Professional experience on the CV page.

The look is the datha platform's: `--datha-*` tokens and Liquid Glass ported from `@datha/platform-ui` into `src/styles/` (the library's feed is private, so it cannot be installed here). Light and dark are one switch, `.dark` on `<html>`, set before first paint by an inline script in `index.html`.

Rules are always in effect:

@.claude/rules/critical-behaviors.md
@.claude/rules/content.md
@.claude/rules/working-agreement.md

## Commands

| What | Command |
|------|---------|
| Dev server | `pnpm start` (port 4300) |
| Unit tests | `pnpm test` (vitest) |
| Format | `pnpm format` / `pnpm format:check` |
| Build (local, base `/`) | `pnpm build` |
| Build (Pages, base `/datha-portfolio/`) | `pnpm build:pages` |

## Layout

```
src/app/
  content/en.ts       every visible word, English (the CV verbatim)
  content/de.ts       German translation, same shape
  content/model.ts    the Content type, LANGS
  content/welcome.ts  platform page text, keyed WELCOME.* as the scenes expect
  content/resume.ts   US résumé text: condensed from en.ts, English only
  data/cv.ts          language-neutral CV facts: dates, stack, project names
  data/platform.ts    language-neutral platform facts: the repositories
  data/period.ts      month formatting
  core/lang.ts        language from the URL, links per language
  core/theme.ts       light/dark toggle
  core/title-strategy.ts  title and description per language
  pages/cv/
  pages/resume/       the US résumé
  core/format-switch.ts  the Full CV | US-style résumé switch
  pages/platform/     hero, repositories, call to action
  pages/platform/welcome/  the six scenes, ported from shell-frontend
  core/translate.pipe.ts   resolves WELCOME.* keys for the route's language
  core/icon.ts        i[appIcon]: stroke icons in place of PrimeIcons
src/styles/           tokens and glass, ported from @datha/platform-ui
.github/workflows/deploy.yml   test, build:pages, publish to Pages
```

Print always comes out light: the print block in `src/styles.scss` resets `color-scheme` and the page tokens.

## Skills

- `verify-portfolio`: build, screenshot at three widths in light and dark, export the PDF, check the sub-path build. Run after any visual change.
- `update-cv`: sync `data/cv.ts` from the CV `.docx`.
- `prepare-push`: checks before a push.

Scratch output goes to `.claude/tmp/` (git-ignored).

## The platform page is a port

`/platform` is shell-frontend's public `/welcome` page (`shell-frontend/src/modules/welcome-page/`, `constants/welcome.constant.ts`, `models/welcome.model.ts`), copied into `pages/platform/welcome/` with only what had to change: the `translate` pipe resolves against `content/welcome.ts` instead of ngx-translate, PrimeIcons became `i[appIcon]`, `--shell-page-*` tokens became `--page-*`, and the hero and closing call to action point at the CV and email instead of sign-in. Animations use `motion` (pinned to the shell's version), loaded lazily and skipped under reduced motion. When the welcome page changes in the shell, port the change here the same way.
