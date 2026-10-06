---
name: update-cv
description: >-
  Sync the site's CV content from dathq's CV document. Use when he says update
  the CV, sync the CV, or that his CV changed.
---

# Update CV

`src/app/content/en.ts` must say exactly what the CV says (`.claude/rules/content.md`).

1. Ask dathq for the current CV `.docx` (it lives outside this repo), and read only the file he names.
2. Extract the text: `textutil -convert txt -stdout <file>.docx`. Text boxes come out twice and out of order, so match by content, not by position.
3. Compare section by section against `cv.ts`: profile, summary, role summary, skills, each role (dates, client, roles, overview, projects, responsibilities, stack, duration, team size), education, languages.
4. Present the differences as a list **before** editing. Flag anything that looks like a CV mistake (dates, durations, typos) and let him decide; never correct the CV silently.
5. Apply text edits to `src/app/content/en.ts`, verbatim, and facts (dates as `YYYY-MM`, stack, team size, project names) to `src/app/data/cv.ts`. The phone number stays out.
6. Mirror every text change into `content/de.ts` as a translation, and list those lines separately for dathq to review.
7. Run `pnpm test`.
7a. If a changed fact appears on the US résumé (`content/resume.ts`), condense the change there too, and list it for review with the translations.
8. Run the `verify-portfolio` skill.
