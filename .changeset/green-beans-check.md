---
"@vygruppen/spor-design-tokens": major
"@vygruppen/spor-react": major
---

## Migrate to Chakra 3

Spor is getting a major update with Chakra 3.

### Update props
* `isDisabled` is now `disabled`
* `isLoading` is now `loading`
* `sx` and `__css` is gone, use `css` or `style`

### Externals from Chakra:
Removed (as they have been removed from Chakra): `DarkMode, LightMode, defineStyleConfig, useColorModePreference, useMergeRefs, usePreferReducedMotion, CSSWithMultiValues, ComponentStyleConfig, UseClipboardOptions, UseOutsideClickProps, useSize`

Added: `defineRecipe, defineStyle, For, FormatNumber, FormatByte, LocaleProvider, Show, VisuallyHidden, useMap, useOnClickOutside, useIsClient`