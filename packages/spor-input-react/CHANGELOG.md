# @vygruppen/spor-input-react

## 0.5.2

### Patch Changes

- Updated dependencies [d2b9f7e]
  - @vygruppen/spor-icon-react@0.6.1

## 0.5.1

### Patch Changes

- Updated dependencies [4c4efad]
- Updated dependencies [305c3ba]
  - @vygruppen/spor-icon-react@0.6.0

## 0.5.0

### Minor Changes

- 51b1847: Breaking change: The `ChoiceChip`'s `icon` prop now requires an object that requires both a default icon and a checked icon.

  Previously, the code would be:

  <ChoiceChip icon={<SomeIcon />} />

  Now, the code would be:

  <ChoiceChip
  icon={{
      default: <SomeOutlineIcon />,
      checked: <SomeFillIcon />
    }}
  />

## 0.4.5

### Patch Changes

- 9e25325: Fix an issue with how the choice chips are rendered on ios safari"

## 0.4.4

### Patch Changes

- Updated dependencies [629c381]
  - @vygruppen/spor-icon-react@0.5.0

## 0.4.3

### Patch Changes

- Updated dependencies [ac60336]
  - @vygruppen/spor-i18n-react@0.0.5

## 0.4.2

### Patch Changes

- a8376b2: Fix checkbox missing hover state on active state

## 0.4.1

### Patch Changes

- Updated dependencies [de67c09]
  - @vygruppen/spor-icon-react@0.4.0

## 0.4.0

### Minor Changes

- 21bc292: Introduce new search input component

### Patch Changes

- 1615828: Make the clear search button optional

## 0.3.3

### Patch Changes

- 5bde18f: Introduce variants for choice chips
- c61ef00: Fix a bunch of bugs and inconsistencies in the Input and Textarea components

## 0.3.2

### Patch Changes

- aaf0b69: Fix a bug where the label in input fields would get in the way of clicking parts of the input field when not wrapped in a FormControl

## 0.3.1

### Patch Changes

- d351027: Fix buggy input fields

## 0.3.0

### Minor Changes

- 362b163: Add support for leftIcon and rightIcon props

### Patch Changes

- d603d3c: Fix an issue where input labels didn't work with input elements
- b54f699: Fix a bunch of edge cases where inputs and selects would render weirdly

## 0.2.3

### Patch Changes

- 7835a53: Fix bug in Switch component that overrode the size prop

## 0.2.2

### Patch Changes

- 37f7c2e: Fix some issues with dependencies
- Updated dependencies [37f7c2e]
  - @vygruppen/spor-i18n-react@0.0.4

## 0.2.1

### Patch Changes

- 8a80f1d: This bugfix comes down from heaven and makes dependencies work like they should!

## 0.2.0

### Minor Changes

- b81bc05: Export all props types

### Patch Changes

- 8758549: Tweak the design of input fields and select boxes

## 0.1.0

### Minor Changes

- fb429ab: Add super simple select component
- ee71c70: Add ChoiceChip component
- 24b0a72: Add new Radio and RadioGroup components
- 91e50b0: Add a new Checkbox component
- 8d088e0: Add FormLabel and Switch components

### Patch Changes

- 65feebf: Remove overridden theme values

  This is a breaking change, if you used undocumented colors or sizes. If you kept to the specified theme colors, there is nothing to do.

  Change the implementation of Input and Textarea styles, and remove variant and sizes props.

  This is a breaking change if you used any variants or sizes in your code. Those weren't supported, and would look pretty weird, but if you did, you need to remove any variant and size props on your input fields.

## 0.0.3

### Patch Changes

- 099d492: Add repository and home page metadata to all packages
- 146bdda: Make password input fields work with 1Password extension
- Updated dependencies [099d492]
  - @vygruppen/spor-i18n-react@0.0.3

## 0.0.2

### Patch Changes

- 8e5444a: Fix a bug where the published packages specified the source files, instead of the built dist files
- Updated dependencies [8e5444a]
  - @vygruppen/spor-i18n-react@0.0.2
