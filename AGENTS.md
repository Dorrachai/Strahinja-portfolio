# AGENTS.md

## Architecture decisions

- Use HashRouter and `base: "./"` in vite.config.ts — the site is hosted on GitHub Pages, which has no SPA server config; hash routing + relative assets work under any repo-name path without rebuild changes.
- All editable content (text, projects, audio links, contact links) lives in `src/data/site.ts` and `src/data/projects.ts` so a non-programmer owner can edit it on GitHub; never hardcode his content in page components.
- `.github/workflows/deploy.yml` builds with bun and deploys `dist` to GitHub Pages on every push to main.
