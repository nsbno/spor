---
"@vygruppen/spor-react": major
---

## Migrate to Chakra 3

Spor is getting a major update with Chakra 3.

## Updated variants

- `base` is now `core`

### Update props

- `isDisabled` is now `disabled`
- `isLoading` is now `loading`
- `sx` and `__css` is gone, use `css` or `style` instead
- `colorScheme` is now `colorPalette`
- `onClose` is now `close`
- `isOpen` is now `open`

### Updated components

- `Dialog` replaces `Modal` - And all sizes and placements are now available from the same component
- `Accordion`, `Pagination`, `Tabs`, `RadioCard` and `RadioCardGroup` now have a different syntax. Please consult the documentation for name changes.
- `Table` components has many changes. Instead of the generic HTML names (Td, Tr etc.), it will now work with full names. Please see docs. Variant `simple` is now `line`.
- `Toast` prop `isClosable` is now `closable`. `useToast` is now `createToaster`.
- `FormControl`, `FormLabel` and `FormErrorMessage` are removed and replaced by `Field`. `Field` supports the necessary props to support this.
- `Separator` replaces `Divider`.
- `UnorderedList` and ?  is deprecated. Use "as" prop instead.

### Externals from Chakra:

Removed (as they have been removed from Chakra): `DarkMode, LightMode, defineStyleConfig, useColorModePreference, useMergeRefs, usePreferReducedMotion, CSSWithMultiValues, ComponentStyleConfig, UseClipboardOptions, UseOutsideClickProps, useSize`

Added: `defineRecipe, defineStyle, For, FormatNumber, FormatByte, LocaleProvider, Show, VisuallyHidden, useMap, useOnClickOutside, useIsClient`
