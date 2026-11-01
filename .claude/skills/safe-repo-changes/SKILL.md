---
name: safe-repo-changes
description: Use before any edit, commit, push, or pull request in the Bexolutions website repo. Gitflow on claude-agent/<category>-<topic> branches, a test gate before every commit, categorised commits and PRs against develop only, and a summary with team messages after every task.
---

You are editing the Bexolutions website repo (Bexolutions-Marketing-Vertrieb-AG/bexolutions). Production deploys from main on every merge. You cannot publish. The site admin is Alberto (GitHub: arrobabeto); he reviews, merges and promotes every change.

## People

| Who                  | Role                           | Gets a message when                                                                      |
| -------------------- | ------------------------------ | ---------------------------------------------------------------------------------------- |
| arrobabeto (Alberto) | Site admin, reviews and merges | Every task                                                                               |
| Marisol              | Project manager                | The task affects deadlines, priorities, clients or needs someone outside the repo to act |
| Fernanda             | UI/UX                          | The task changes anything visible: Design, Structure, Copy on pages, new components      |

## Categories

Every commit, PR title and branch carries one category. Use the main ones; add a new one only when none fits.

| Category      | Branch prefix | Use for                                                                       |
| ------------- | ------------- | ----------------------------------------------------------------------------- |
| SEO Copys     | `seo-copy`    | Titles, meta descriptions, headings and body text written for search          |
| SEO Technical | `seo-tech`    | Schema, sitemap, robots, llms.txt, canonicals, redirects, performance for SEO |
| Copy          | `copy`        | Wording changes without an SEO goal                                           |
| Structure     | `structure`   | New pages, navigation, internal links, page sections                          |
| Legal         | `legal`       | Impressum, Datenschutz, cookie texts                                          |
| Design        | `design`      | Visual changes, layout, components, styles                                    |
| Tracking      | `tracking`    | Analytics, GTM, conversion events                                             |
| Fix           | `fix`         | Bugs                                                                          |
| Tests         | `tests`       | Test-only changes                                                             |
| Process       | `process`     | Repo instructions, agent workflow, docs                                       |

## Workflow (Gitflow)

1. **Branch.** Fetch origin. Create `claude-agent/<branch-prefix>-<topic>` from up-to-date origin/develop, for example `claude-agent/legal-privacy-policy`. One branch per task. Never commit on main or develop. Git does not allow a branch named plain `claude-agent` next to `claude-agent/...` branches, so do not create one.
2. **Scope.** Change only what the task asks. No refactors, renames or edits to unrelated files.
3. **Tests.** Every change that affects what a visitor sees or what the site serves gets an e2e test in `tests/e2e/` that checks the user case (the page shows the right content, links work, removed content is gone).
4. **Test gate before every commit.** Run all of these from the repo root; commit only if all pass:
   - `npx prettier --check <changed files>`
   - `npm run eslint`
   - `npm run typecheck` (known baseline: 2 errors in `app.vue`, `config.value is of type unknown`, lines 146 and 148, already on develop. Any other error fails the gate. Note the baseline in the PR until it is fixed.)
   - `npm run build`
   - `npm run test:e2e` (all tests, existing and new; known baseline: `homepage.smoke.spec.ts` › "renders the Bexolutions home at / and toggles the FAQ" fails on develop with a strict-mode violation because the page renders mobile and desktop markup. Any other failure fails the gate. Note the baseline in the PR until it is fixed.)
     If dependencies are missing, install them with `npm install --no-package-lock` so the lockfile stays untouched.
5. **Commit.** Subject: `[Category] Imperative summary`, English, under 72 characters. Body: what changed and why, the task ID if there is one (for example TRK-1), and the test gate result.
6. **Push** only your `claude-agent/...` branch.
7. **Pull request** to `develop`, never `main` (only develop may open PRs to main; CI enforces it and only arrobabeto does that). Title = commit subject. Body, in English:
   - **Category**
   - **What changes**, in plain language
   - **Why** (task ID)
   - **How to test** (pages and steps)
   - **Test gate** results
   - **What could break**
   - **Screenshots** before and after for Copy, Design and Structure
   - Reviewer: arrobabeto
8. **Stop.** Do not merge. Report the PR URL.
9. **Report in the conversation**, in English:
   - a summary of the task in non-technical language: what changed on the site, why, what was tested, what is still open
   - a message for arrobabeto (always): PR link, what to review, risks, what to do after merge
   - a message for Marisol and/or Fernanda when the table above says so

## Hard stops

If you hit one, stop and tell the user. Do not look for another credential, remote, or flag.

- No push, commit, or merge to main or develop.
- No pull request whose base is main.
- No force-push, no history rewrite of pushed commits, no --no-verify, no skipping hooks.
- No edits to .github/, CODEOWNERS, vercel.json, workflows, lockfiles, or environment files. No secrets in code or in the chat.
- No changing git config, remotes, branch protection, or rulesets.
- If GitHub rejects the push or the PR, do not retry against main and do not weaken a check.

If the user asks you to ship, deploy, merge, or "just put it on the site", open or update the pull request to develop and say that arrobabeto has to merge it.
