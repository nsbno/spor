# @vygruppen/spor-card-react

## 0.3.0

### Minor Changes

- 0541729: Breaking change in the Card component

  Previously, you specified a `variant` prop. This is no longer required. Instead, you get to specify the `colorScheme` prop. Combined with the `as` prop, you will get the correct amount of elevation and interactivity.

  To migrate, please visit all the usage of the Card component, and verify that:

  - the `size` prop is set (it defaults to `"lg"`)
  - the `colorScheme` prop is set to the correct color scheme for your design (it defaults to `"white"`).
  - the `as` prop is set to either a link or "button" if you want interactivity (and with that, drop shadows)

## 0.2.0

### Minor Changes

- 66336f0: Add new `size` prop to Card components. The sizes available are `sm` and `lg` (with `lg` being the default).

### Patch Changes

- 45b11e8: Fix some design inconsistencies with certain states of active cards.

## 0.1.5

### Patch Changes

- a64bcad: Add a background color for elevated cards

## 0.1.4

### Patch Changes

- 95e34b1: Make the focus styles of cards wider

## 0.1.3

### Patch Changes

- 6c8ad0e: Use box shadows for borders

## 0.1.2

### Patch Changes

- 37f7c2e: Fix some issues with dependencies
- Updated dependencies [37f7c2e]
  - @vygruppen/spor-layout-react@0.3.1

## 0.1.1

### Patch Changes

- 8a80f1d: This bugfix comes down from heaven and makes dependencies work like they should!

## 0.1.0

### Minor Changes

- b81bc05: Export all props types

### Patch Changes

- Updated dependencies [b81bc05]
- Updated dependencies [90ca75c]
- Updated dependencies [ee14582]
  - @vygruppen/spor-layout-react@0.3.0

## 0.0.2

### Patch Changes

- 6511380: Add new spor-card-react package
- b5613c9: Added support for hover, focus, active and disabled states for cards when they are buttons or links
