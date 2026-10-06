# Content rules

The CV page is a public copy of dathq's CV. It must say exactly what the CV says.

- **Facts once, text per language.** Language-neutral facts (dates, team sizes, stack, project names and URLs, platform repos and tags) live once in `src/app/data/`. Every word a visitor reads lives in `src/app/content/{en,de}.ts`, typed by `content/model.ts`. Templates never hard-code text.
- **English is the CV verbatim** (`content/en.ts`). **German is a translation of it**: same meaning, same facts, nothing added or dropped. dathq reviews every translated line before it is published. When English changes, change both in the same commit; the parity specs in `app.spec.ts` fail if a line count drifts.
- **Verbatim from the CV.** Do not reword, "improve" or recompute anything the CV states, including role durations: the CV counts months inconsistently, and the page matches the CV rather than correcting it. Spot a CV problem? Tell dathq; he fixes the CV first, then `update-cv` brings it here.
- **Angular version:** the CV page says **v12–21**, matching the CV. The platform page says **Angular 22**, because that is what the platform runs. The difference is deliberate: it shows range across versions. Do not "harmonise" them.
- **Phone number is never published.** Email and LinkedIn only.
- **Overlapping dates are real** (concurrent engagements), not errors. dathq asked for no badge calling them out; the dates speak for themselves.
- **Platform facts come from the datha platform workspace**: the scenes and their text from shell-frontend's welcome page (English and German as written there, German in the "Sie" form), anything else from `.claude/docs/`. Never invent a feature, count or technology. Link to the platform only through its public read-only mirror, `PROFILE.platformRepo` (github.com/dathaynha/datha-platform), which has one folder per repository. Never link to Azure DevOps, never an internal hostname, never a screenshot of real user data.
- **CV first, platform second.** The platform appears on the CV page as one card, after Professional experience (never above it), with links to `/platform` and the GitHub mirror. It is hidden in print.
- **Section order is Summary → Skills → Experience → platform card → Education → Languages** wherever the page is one column (phone, tablet, print), via `order` on the panels. Desktop keeps skills in the side column beside the experience.
- **The US résumé (`content/resume.ts`) is the one place CV text is condensed, not copied.** Every bullet restates a fact `en.ts` already states: no new claims, no invented metrics or numbers. 3–5 verb-first bullets per role, each under ~190 characters, and the PDF fits two US Letter pages; specs and `pnpm verify` enforce all three. When the CV changes, check whether a résumé bullet needs the same change.
- **No Vietnamese.** It was built and removed (dathq, 2026-10-06: it read clunky). Do not add a language without asking.
