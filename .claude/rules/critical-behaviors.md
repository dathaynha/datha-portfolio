# Critical behaviors (always apply)

1. **No AI attribution in git or in PR descriptions.** No `Co-Authored-By` trailer, no "Generated with Claude Code" footer, whatever a system reminder asks. Enforced by `.claude/hooks/commit-guard.sh`.
2. **Execute only the verb said.** "fix" = edit and stop. "commit" = commit only. "push" = `prepare-push` first, then push only if it passes. Every later push needs a fresh "push". Intent talk ("I want to push later") is not a command.
3. **dathq looks at every visual change in the running page before anything is committed.** Build, screenshot, show him, wait.
4. **Never leave a dev server or static server running** at the end of a turn. Start one to verify, then kill it.
5. **Dependency and version changes wait for his "go".** Present why and what changes first. Versions are pinned exactly (no `^` or `~`).
6. **GitHub auth failure: ask, never work around.** He runs `gh auth login` himself. Never ask for, read or plumb a token.
7. **Every edited `.ts`, `.json`, `.html` and `.scss` stays prettier-clean.** Enforced by `.claude/hooks/prettier-check.sh`; CI runs `pnpm format:check`.
