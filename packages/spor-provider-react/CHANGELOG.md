# @vygruppen/spor-provider-react

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

### Patch Changes

- Updated dependencies [e6158c62]
  - @vygruppen/spor-i18n-react@1.0.0
  - @vygruppen/spor-theme-react@1.0.0

## 0.0.9

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

- Updated dependencies [d2c64617]
  - @vygruppen/spor-theme-react@0.6.5

## 0.0.8

### Patch Changes

- Updated dependencies [80e771e5]
- Updated dependencies [ae157f1b]
  - @vygruppen/spor-theme-react@0.6.0

## 0.0.7

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before
- Updated dependencies [4337f0f4]
  - @vygruppen/spor-i18n-react@0.0.6
  - @vygruppen/spor-theme-react@0.5.6

## 0.0.6

### Patch Changes

- d2b9f7e: Fix an issue where all svg images were made to display: block

## 0.0.5

### Patch Changes

- Updated dependencies [0541729]
  - @vygruppen/spor-theme-react@0.5.0

## 0.0.4

### Patch Changes

- 2f59ba3: Set the default text color to darkGrey
  - @vygruppen/spor-theme-react@0.4.14

## 0.0.3

### Patch Changes

- Updated dependencies [ac60336]
- Updated dependencies [469768f]
  - @vygruppen/spor-i18n-react@0.0.5
  - @vygruppen/spor-theme-react@0.4.7

## 0.0.2

### Patch Changes

- 6df4714: Refactor SporProvider into its own package, so it can be used without the spor-react package
