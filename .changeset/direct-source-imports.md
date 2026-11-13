---
"@vygruppen/spor-react": patch
"@vygruppen/spor-loader": patch
---

Internal modules import each other directly instead of through the package index, and `package.json` exports gain a `@vygruppen/source` condition for the Spor monorepo's dev server. Nothing changes for consumers.
