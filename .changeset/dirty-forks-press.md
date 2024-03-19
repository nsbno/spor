---
"@vygruppen/spor-react": major
---

### Major Changes

We saw that sizing props did not match the designsystem in Figma and therefore needed to be updated.

Sizes that used to be "sm, md, lg, xl" are now "xs, sm, md, lg".

To migrate, change size "sm" to "xs", "md" to "sm", "lg" to "md", and "xl" to "lg".

Affected components are:
* ChoiceChip
* Tabs


