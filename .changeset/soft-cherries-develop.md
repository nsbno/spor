---
"@vygruppen/spor-design-tokens": major
"@vygruppen/spor-datepicker-react": patch
"@vygruppen/spor-icon-react": patch
"@vygruppen/spor-layout-react": patch
"@vygruppen/spor-loader-react": patch
"@vygruppen/spor-modal-react": patch
"@vygruppen/spor-popover-react": patch
"@vygruppen/spor-provider-react": patch
"@vygruppen/spor-table-react": patch
"@vygruppen/spor-theme-react": patch
---

This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

If you're a TypeScript user, the required changes will be highlighted by the type checker.
