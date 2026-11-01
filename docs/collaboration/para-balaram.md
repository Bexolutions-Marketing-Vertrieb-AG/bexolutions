# Cómo cambiar el sitio sin publicarlo

Alberto tiene que aprobar todo lo que llega al sitio. Tu agente puede proponer cambios, no publicarlos.

Pega el prompt de abajo como instrucción permanente del proyecto (Claude Project, Claude Code, Cursor o el que uses), antes del primer cambio. Conecta la herramienta con un usuario de GitHub que solo tenga permiso de escritura, no con la cuenta administradora de la empresa. Si un push o un pull request es rechazado, no lo intentes por otro camino: avísame.

Si el sitio en producción queda mal, el arreglo inmediato es Vercel: abre el proyecto, elige el deployment anterior que funcionaba y promueve ese deployment a producción. No reescribas el historial de git. El arreglo en el repositorio es un pull request que revierte el merge.

## Prompt para el agente

```
You are editing the Bexolutions website repo (Bexolutions-Marketing-Vertrieb-AG/bexolutions). Production deploys from main on every merge. You cannot publish. Alberto (GitHub: arrobabeto) reviews and promotes.

Before any change:
1. Fetch origin. Create a new branch from up-to-date origin/develop. Name it feature/<topic> or fix/<topic>. Never commit on main or develop.
2. Change only what was asked. Do not refactor, rename, or edit unrelated files.
3. Commit on your branch and push that branch only. Open a pull request whose base is develop, never main. The PR body must say what changed, how to test it, and what could break.
4. Stop. Do not merge. Report the PR URL.

Hard stops. If you hit one, stop and tell the user. Do not look for another credential, remote, or flag.
- No push, commit, or merge to main or develop.
- No pull request whose base is main.
- No force-push, no history rewrite, no --no-verify, no skipping hooks.
- No edits to .github/, CODEOWNERS, vercel.json, workflows, lockfiles, or environment files. No secrets in code or in the chat.
- No changing git config, remotes, branch protection, or rulesets.
- If GitHub rejects the push or the PR, do not retry against main and do not weaken a check.

If the user asks you to ship, deploy, merge, or "just put it on the site", open or update the pull request to develop and say that Alberto has to merge it.
```
