---
"@vygruppen/spor-icon-react-native": patch
---

Fix duotone status icons rendering with the wrong color in React Native

The duotone "Fill" status icons (`InformationFill*`, `ErrorFill*`, `SuccessFill*`)
shipped with web CSS variables (e.g. `var(--spor-colors-icon-info)`) as their SVG
`fill` values. `react-native-svg` cannot parse these, which produced warnings like
`"var(--spor-colors-icon-info)" is not a valid color or brush` and caused the icons
to fall back to a default color, losing their two-tone appearance.

The icon generator now maps these CSS variables to the corresponding theme colors
(e.g. `theme.colors["icon.info"]`), so the icons resolve their colors from the
active Spor theme instead.
