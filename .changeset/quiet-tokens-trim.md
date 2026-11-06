---
"@vygruppen/spor-design-tokens": major
---

Remove the generated SCSS (`dist/_tokens.scss`) and Less (`dist/tokens.less`) token files. They were never exposed through the package `exports`. If you rely on them, use `@vygruppen/spor-design-tokens/tokens.css` (CSS variables) instead.
