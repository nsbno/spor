# @vygruppen/spor-react

## 0.1.0

### Minor Changes

- a8d2de3: Add peer dependencies to `@vygruppen/spor-react`

  In order to optimize for flexibility, the `spor-react` package loses a few direct dependencies, and adds them as peer dependencies.

  This is a **breaking change**. To upgrade, please run:

  ```bash
  $ npm install @chakra-ui/react @emotion/styled @emotion/react framer-motion
  ```

  or:

  ```bash
  $ yarn add @chakra-ui/react @emotion/styled @emotion/react framer-motion
  ```

## 0.0.2

### Patch Changes

- 8e5444a: Fix a bug where the published packages specified the source files, instead of the built dist files
- Updated dependencies [8e5444a]
  - @vygruppen/spor-button-react@0.0.2
  - @vygruppen/spor-i18n-react@0.0.2
  - @vygruppen/spor-input-react@0.0.2
  - @vygruppen/spor-logo-react@0.0.2
  - @vygruppen/spor-theme-react@0.0.2
