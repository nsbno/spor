---
"@vygruppen/spor-react": major
---

### Major Changes

There was a need to change some sizing props to be consistent through the designsystem.

Sizes that used to be "sm, md, lg, xl" are now "xs, sm, md, lg".

To migrate, change size

- "sm" to "xs",
- "md" to "sm",
- "lg" to "md",
- and "xl" to "lg".

Affected components are:

- ChoiceChip
- Tabs
