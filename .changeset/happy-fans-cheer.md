---
"@vygruppen/spor-design-tokens": major
---

Flatten the color structure in the design tokens.

To migrate to this version, change your values like this:

```diff
- tokens.color.palette.grey.500
+ tokens.color.grey.500
- tokens.color.alias.dimGrey
+ tokens.color.dimGrey
```
