# Working agreement

Carried over from the datha platform workspace, trimmed to what applies to a static site.

## Verify

- **Look at it, do not reason about it.** Any visual change: run the `verify-portfolio` skill, read the screenshots and measure (`getBoundingClientRect`, `scrollWidth` vs `innerWidth`, `getComputedStyle`). A green build and green specs cannot see layout.
- **Three widths and both schemes:** phone 390x844, 1280, 1920, in light and dark. Also check the **print PDF**: a tall block with `break-inside: avoid` can push itself to the next page and leave the first one half empty.
- **Print with a grid in the tree breaks across pages.** Chrome does not grow a grid row when a child with `break-inside: avoid` is pushed to the next page, so the following row prints on top of it (2026-10-06: a role's last bullet under its tech chips). Print styles use block flow with margins. Read the PDF at every page boundary, not just page 1.
- **Check the Pages build, not only the local one.** The site is served under `/datha-portfolio/`; a link or asset that assumes `/` works locally and 404s live.
- **A regression test must be proven to fail against the old code.** Neutralise the fix, watch the spec fail with the predicted message, restore. A green new test proves nothing on its own.
- **Never `git checkout <file>` to undo a probe** when the file also holds work in progress. Remove the probe itself.

## Write

- **Small and clearly correct: do it.** Bigger work: present the cause, the plan and concerns, then wait for "go".
- **Reuse before writing anything new.** One source of truth per value.
- **Comments: one short line, only for a non-obvious constraint.**
- **Run a formatter on the files you changed, never on a whole directory you did not mean to touch.** Read `git status` after.
- **Survey before designing when he says "best practice".** State the trade-off, then recommend.
- **Prefer intrinsic layout** (`flex: 1 0 auto`, `minmax(min(100%, X), 1fr)`, container queries) over one more breakpoint. Test with the longest label, not whatever happens to be there.
- **`text-transform: uppercase` only on prose labels, never on identifiers.**
- **Before a dependency bump, read the new version's dependency list.** A licence or telemetry package is a question to answer first.

## Communicate

- Concise. Lead with the answer. Say what was verified and in which configuration.
- Flag leftovers and side effects honestly.
