---
name: verify-portfolio
description: >-
  Visually verify the portfolio site. Use after any change to a page, its styles
  or its content, or when asked to check, screenshot or look at the site.
---

# Verify portfolio

A green build cannot see layout. This skill makes the change visible.

1. `pnpm build:pages`. It must end with `Prerendered 4 static routes.` and `Application bundle generation complete.`
2. `node scripts/verify.mjs`. It serves the build under `/datha-portfolio/` in-process, then closes the server itself, so no server is left running. It checks every language's `html lang`, that `.dark` follows the colour scheme, the CV → platform → language switch → back path, and that the theme survives a reload.
3. Read the output. Anything under `PROBLEMS:` is a defect: horizontal overflow, a console error or a failed request.
4. **Look at the screenshots** in `.claude/tmp/verify/`, at minimum `phone-light-en`, `desktop-light-en`, `desktop-dark-platform`, `desktop-light-de`. Read every page of `cv.pdf`, and `resume.pdf` too: the script fails if it runs past two US Letter pages. Check for:
   - text clipped, overlapping or wrapping one word per line;
   - a half-empty PDF page, or a section title stranded at the foot of a page;
   - dark-mode contrast;
   - a long German word overflowing a chip, button or the top bar;
   - the platform card hidden in the PDF.
5. If something looks off, **measure before editing**: `getBoundingClientRect`, `getComputedStyle`, `scrollWidth`.
6. Report what was verified, at which widths and schemes. Then show dathq and wait: he looks before anything is committed.
