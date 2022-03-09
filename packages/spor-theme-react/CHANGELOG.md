# @vygruppen/spor-theme-react

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
