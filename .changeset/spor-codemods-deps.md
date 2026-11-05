---
"@vygruppen/spor-codemods": patch
---

Stop installing `@vygruppen/spor-react` with the codemods. It is only used by the test fixtures. Remove the `jscodeshift` peer dependency, since the package already depends on `jscodeshift` directly.
