# @vygruppen/sidespor-config

## 3.0.1

### Patch Changes

- Updated dependencies [224c251]
  - @vygruppen/spor-react@14.0.1

## 3.0.0

### Major Changes

- e09458f: Adds the `data-color` property to all Spor components. Set it to a status (`success`, `info`, `warning`, `critical`, `caution`, `neutral`, `notice`, or `service`) to change the default values of the `accent`, `brand`, `core`, `ghost`, and `floating` color tokens on that component and its children. For example, `data-color="info"` makes `surface.accent` resolve to `surface.info`.

  Breaking changes:
  - In `Alert`, replace the `variant` prop with `data-color` (for example, change `variant="info"` to `data-color="info"`).
  - Components that used the `colorPalette` prop, such as `Badge` and `StaticCard`, now use `data-color` instead.
  - Feedback icons (such as info, error, and success ) no longer have a preset color, so their color can follow the `data-color` value.
  - The Toast `error` variant has been renamed to `critical`.

  Migration
  A new script has been added to the spor-codemods package. Please read the Readme for instructions on how to use it.

### Patch Changes

- Updated dependencies [e09458f]
- Updated dependencies [540ec49]
  - @vygruppen/spor-react@14.0.0

## 2.1.0

### Minor Changes

- b7ac4a0: Add ghost semantic to button

## 2.0.0

### Major Changes

- c16fb2b: Add sidespor which has:
  - semantics to Alert, Badge, Button, Dialog and Table
  - variants to Table
