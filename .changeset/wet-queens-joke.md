---
"@vygruppen/spor-react": major
---

Breaking change: Accordion

The `size` prop is no longer supported, and replaced by responsive sizes (sm on mobile, md on desktop).

The sizing will happen automatically according to breakpoints.

`allowMultiple` is also removed as default (Accordion will ignore allowToggle when allowMultiple is allowed).