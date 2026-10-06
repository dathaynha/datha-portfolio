---
name: prepare-push
description: >-
  Checks to run before pushing the portfolio. Use when dathq says push, prepare
  push, or review before push. Push only after all of them pass.
---

# Prepare push

"push" always means: run this first, push only if it passes. One "push" covers one push.

1. `git status` and `git diff --stat`. Each commit holds one concern. Nothing in the diff that he did not ask for: no debug leftovers, no `TEMP` markers, no screenshots or `.claude/tmp/`.
2. `pnpm format:check`
3. `pnpm exec tsc -p tsconfig.app.json --noEmit` (the tests transpile but do not typecheck)
4. `pnpm test`: read the summary line, not only the exit code.
5. `pnpm build:pages`: it must prerender 4 routes, with no budget warnings.
6. If anything visual changed since he last looked, run `verify-portfolio`.
7. Content check against `.claude/rules/content.md`: no phone number, the CV page says v12–21 in both languages, no private links, and every translated line has been reviewed by dathq.
8. `bash .claude/hooks/tests/run.sh` if a hook changed.
9. Commit messages are Conventional Commits with **no AI attribution**.
10. Report PASS/FAIL per step. On PASS, push. On FAIL, stop and report.

After the push, GitHub Actions deploys. Report the run URL (`gh run list --limit 1`) and stop. Do not poll it; dathq watches and reports back.
