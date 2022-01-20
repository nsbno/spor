# @vygruppen/spor-input-react

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
