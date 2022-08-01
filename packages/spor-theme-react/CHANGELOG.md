# @vygruppen/spor-theme-react

## 0.5.2

### Patch Changes

- Updated dependencies [cdf4c2d]
  - @vygruppen/spor-design-tokens@2.4.3

## 0.5.1

### Patch Changes

- Updated dependencies [f52e583]
  - @vygruppen/spor-design-tokens@2.4.2

## 0.5.0

### Minor Changes

- 0541729: Breaking change in the Card component

  Previously, you specified a `variant` prop. This is no longer required. Instead, you get to specify the `colorScheme` prop. Combined with the `as` prop, you will get the correct amount of elevation and interactivity.

  To migrate, please visit all the usage of the Card component, and verify that:

  - the `size` prop is set (it defaults to `"lg"`)
  - the `colorScheme` prop is set to the correct color scheme for your design (it defaults to `"white"`).
  - the `as` prop is set to either a link or "button" if you want interactivity (and with that, drop shadows)

## 0.4.14

### Patch Changes

- Updated dependencies [9ba66ca]
- Updated dependencies [b47d697]
  - @vygruppen/spor-design-tokens@2.4.1

## 0.4.13

### Patch Changes

- Updated dependencies [d09d725]
  - @vygruppen/spor-design-tokens@2.4.0

## 0.4.12

### Patch Changes

- 4dc266d: Fix some minor bugs in the drawer
- aac513e: Fix a bug where input fields doesnt get their border on ios safari

## 0.4.11

### Patch Changes

- 9e25325: Fix an issue with how the choice chips are rendered on ios safari"

## 0.4.10

### Patch Changes

- 8ceb63f: Introduce the new spinners for buttons
- 8d559a6: Make textareas work on iphone safari
- db6ecd3: Fix css styles in dropdown and breakpoint on color tokens
- b1d0e3e: Change the choice chip styling slightly

## 0.4.9

### Patch Changes

- 08904d1: Change checkbox css colors.

## 0.4.8

### Patch Changes

- 36ebbf2: Add new package spor-loader-react

## 0.4.7

### Patch Changes

- 469768f: Fix some overflow issues with tables

## 0.4.6

### Patch Changes

- a8376b2: Fix checkbox missing hover state on active state

## 0.4.5

### Patch Changes

- 48cf74b: Improve font loading by using font-display: swap

## 0.4.4

### Patch Changes

- ff3ca57: Make the active and hover styles work as they should for link components

## 0.4.3

### Patch Changes

- a64bcad: Add a background color for elevated cards

## 0.4.2

### Patch Changes

- 683e7f6: Improve a few inconsistencies for some edge case states in tabs

## 0.4.1

### Patch Changes

- 82eb6b2: Make default tabs variant work as it should

## 0.4.0

### Minor Changes

- 57f4182: Added tabs component

## 0.3.15

### Patch Changes

- 8b711ac: Make links more accessible by improving the hover and active effects
- 95e34b1: Make the focus styles of cards wider

## 0.3.14

### Patch Changes

- 6c8ad0e: Use box shadows for borders

## 0.3.13

### Patch Changes

- 5bde18f: Introduce variants for choice chips
- c61ef00: Fix a bunch of bugs and inconsistencies in the Input and Textarea components

## 0.3.12

### Patch Changes

- Updated dependencies [f49b13d]
- Updated dependencies [382173f]
  - @vygruppen/spor-design-tokens@2.3.7

## 0.3.11

### Patch Changes

- 7dc9c0e: Fix bug where shadows disappeared

## 0.3.10

### Patch Changes

- Updated dependencies [c428f71]
  - @vygruppen/spor-design-tokens@2.3.6

## 0.3.9

### Patch Changes

- 936b4ed: Add Floating Action Button component

## 0.3.8

### Patch Changes

- ec876eb: Add mobile friendly menu for stepper component

## 0.3.7

### Patch Changes

- 4ec0fcc: Add new popover package

## 0.3.6

### Patch Changes

- d40d8e8: Fix a bug with the link component that made it misbehave when broken over several lines

## 0.3.5

### Patch Changes

- 6f8e5d6: Add stepper component

## 0.3.4

### Patch Changes

- c2681e9: Styling corrections to Link component

## 0.3.3

### Patch Changes

- efc463d: Add a link package

## 0.3.2

### Patch Changes

- f33e8b8: Remove very embarassing console.log

## 0.3.1

### Patch Changes

- cb68026: Fix a bug with selects

## 0.3.0

### Minor Changes

- 68ac994: Add two new space tokens

### Patch Changes

- d603d3c: Fix an issue where input labels didn't work with input elements
- b54f699: Fix a bunch of edge cases where inputs and selects would render weirdly
- 39b6fc6: Make list accordions not have a straight border when expanded

## 0.2.3

### Patch Changes

- 548e736: Add new accordion package with lots of new components
- Updated dependencies [7394e9a]
  - @vygruppen/spor-design-tokens@2.3.5

## 0.2.2

### Patch Changes

- 1a01e54: Fix bug where simple tables lost their borders

## 0.2.1

### Patch Changes

- 37f7c2e: Fix some issues with dependencies

## 0.2.0

### Minor Changes

- 72126f0: Add dashed tokens as well

### Patch Changes

- 793a557: Fix bug where border tokens doesn't work as expected

## 0.1.3

### Patch Changes

- f041db8: Change the color of the additional button border

## 0.1.2

### Patch Changes

- bed34b9: Add support for sizes and new colorSchemes for badges

## 0.1.1

### Patch Changes

- b6c6e3c: Fix bug that breaks initial installation

## 0.1.0

### Minor Changes

- b81bc05: Export all props types

### Patch Changes

- 8758549: Tweak the design of input fields and select boxes
- ee14582: Add new package spor-table-react
- 28976df: Add two new typography components - Badge and Code

## 0.0.9

### Patch Changes

- d379b43: Add new package for modals - spor-modal-react

## 0.0.8

### Patch Changes

- 6511380: Add new spor-card-react package
- b5613c9: Added support for hover, focus, active and disabled states for cards when they are buttons or links

## 0.0.7

### Patch Changes

- 35b4962: Make the spor-react theme use the correct spacing values

## 0.0.6

### Patch Changes

- 8aa80c5: Improve rendering bug when some buttons are focused
- 737d071: Make buttons forward refs
  Fix focus bug in Safari
- 217a776: Use box shadows from the spor design tokens

## 0.0.5

### Patch Changes

- 61549d5: Add Text, Paragraph and Heading components.

## 0.0.4

### Patch Changes

- fb429ab: Add super simple select component
- 65feebf: Remove overridden theme values

  This is a breaking change, if you used undocumented colors or sizes. If you kept to the specified theme colors, there is nothing to do.

  Change the implementation of Input and Textarea styles, and remove variant and sizes props.

  This is a breaking change if you used any variants or sizes in your code. Those weren't supported, and would look pretty weird, but if you did, you need to remove any variant and size props on your input fields.

- ee71c70: Add ChoiceChip component
- 24b0a72: Add new Radio and RadioGroup components
- 91e50b0: Add a new Checkbox component
- 8d088e0: Add FormLabel and Switch components

## 0.0.3

### Patch Changes

- 6f145b6: Fix a bug where you manually had to install @chakra-ui/cli. Also, fix an issue with input fields getting the wrong height
- 099d492: Add repository and home page metadata to all packages
- 146bdda: Make password input fields work with 1Password extension

## 0.0.2

### Patch Changes

- 8e5444a: Fix a bug where the published packages specified the source files, instead of the built dist files
