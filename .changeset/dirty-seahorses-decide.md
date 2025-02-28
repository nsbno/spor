---
"@vygruppen/spor-icon-react-native": minor
"@vygruppen/spor-design-tokens": minor
"@vygruppen/spor-icon-react": minor
"@vygruppen/spor-loader": minor
"@vygruppen/spor-react": minor
"@vygruppen/spor-icon": minor
---

- Replace npm with pnpm as package manager.
- Update CI pipelines and Docker to use pnpm.
- Update Docker to install from frozen lockfile to ensure exact dependency versions.
- Fix dependency cycle between spor-react-icons and spor-package.
- Update docs to use pnpm.
- Install correct npm packages in apps/packages in monorepo.
- Replace npm-feed installs with direct "workspace:\*" installs for better local development.
- Replace inline commands for tsup with tsup.config.ts files.
