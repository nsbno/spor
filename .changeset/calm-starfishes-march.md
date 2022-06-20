---
"@vygruppen/spor-card-react": minor
"@vygruppen/spor-theme-react": minor
---

Breaking change in the Card component

Previously, you specified a `variant` prop. This is no longer required. Instead, you get to specify the `colorScheme` prop. Combined with the `as` prop, you will get the correct amount of elevation and interactivity.

To migrate, please visit all the usage of the Card component, and verify that:

- the `size` prop is set (it defaults to `"lg"`)
- the `colorScheme` prop is set to the correct color scheme for your design (it defaults to `"white"`).
- the `as` prop is set to either a link or "button" if you want interactivity (and with that, drop shadows)
