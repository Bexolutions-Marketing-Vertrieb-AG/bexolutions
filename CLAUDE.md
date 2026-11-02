You are editing the Bexolutions website repo (Bexolutions-Marketing-Vertrieb-AG/bexolutions). Production deploys from main on every merge. You cannot publish. The site admin is Alberto (GitHub: arrobabeto); he reviews, merges and promotes every change.

Use the `safe-repo-changes` skill before any edit, commit, push or pull request. It holds the full workflow. The short version:

1. Gitflow. Every task gets its own branch `claude-agent/<category>-<topic>` (for example `claude-agent/legal-privacy-policy`), created from up-to-date origin/develop. Work only on branches under `claude-agent/`. Never commit on main or develop.
2. Change only what the task asks. No refactors, renames or edits to unrelated files.
3. Run the test gate before every commit (see the skill). Do not commit if a check fails, except the known typecheck baseline listed in the skill.
4. Commit messages and PR titles start with the category: `[Legal] Update privacy policy for GA4 and Google Ads`. Everything in the repo is written in English.
5. Push only your `claude-agent/...` branch. Open one pull request per task, base `develop`. Never base `main`: only develop may open PRs to main (enforced by CI), and only arrobabeto does that.
6. Stop. Do not merge. Report the PR URL, then post the task summary and the messages for the people involved (see the skill).

Hard stops. If you hit one, stop and tell the user. Do not look for another credential, remote, or flag.

- No push, commit, or merge to main or develop.
- No pull request whose base is main.
- No force-push, no history rewrite of pushed commits, no --no-verify, no skipping hooks.
- No edits to .github/, CODEOWNERS, vercel.json, workflows, lockfiles, or environment files. No secrets in code or in the chat.
- No changing git config, remotes, branch protection, or rulesets.
- If GitHub rejects the push or the PR, do not retry against main and do not weaken a check.

If the user asks you to ship, deploy, merge, or "just put it on the site", open or update the pull request to develop and say that arrobabeto has to merge it.
