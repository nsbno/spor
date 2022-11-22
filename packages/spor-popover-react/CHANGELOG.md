# @vygruppen/spor-popover-react

## 1.0.1

### Patch Changes

- 0a7e3b44: Add support for nynorsk texts
- Updated dependencies [0a7e3b44]
  - @vygruppen/spor-i18n-react@1.1.0
  - @vygruppen/spor-button-react@1.0.3

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

### Patch Changes

- Updated dependencies [e6158c62]
  - @vygruppen/spor-button-react@1.0.0
  - @vygruppen/spor-i18n-react@1.0.0
  - @vygruppen/spor-icon-react@1.0.0
  - @vygruppen/spor-layout-react@1.0.0

## 0.1.19

### Patch Changes

- Updated dependencies [09448ca8]
  - @vygruppen/spor-button-react@0.2.11

## 0.1.18

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

- Updated dependencies [d2c64617]
  - @vygruppen/spor-icon-react@0.6.4
  - @vygruppen/spor-layout-react@0.3.3
  - @vygruppen/spor-button-react@0.2.10

## 0.1.17

### Patch Changes

- Updated dependencies [13e5bd03]
  - @vygruppen/spor-icon-react@0.6.3

## 0.1.16

### Patch Changes

- @vygruppen/spor-button-react@0.2.9

## 0.1.15

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before
- Updated dependencies [4337f0f4]
  - @vygruppen/spor-button-react@0.2.8
  - @vygruppen/spor-i18n-react@0.0.6
  - @vygruppen/spor-icon-react@0.6.2
  - @vygruppen/spor-layout-react@0.3.2

## 0.1.14

### Patch Changes

- Updated dependencies [d2b9f7e]
  - @vygruppen/spor-icon-react@0.6.1

## 0.1.13

### Patch Changes

- @vygruppen/spor-button-react@0.2.7

## 0.1.12

### Patch Changes

- Updated dependencies [d263565]
  - @vygruppen/spor-button-react@0.2.6

## 0.1.11

### Patch Changes

- Updated dependencies [4c4efad]
- Updated dependencies [305c3ba]
  - @vygruppen/spor-icon-react@0.6.0

## 0.1.10

### Patch Changes

- Updated dependencies [7bcedd2]
  - @vygruppen/spor-button-react@0.2.5

## 0.1.9

### Patch Changes

- @vygruppen/spor-button-react@0.2.4

## 0.1.8

### Patch Changes

- Updated dependencies [8ceb63f]
  - @vygruppen/spor-button-react@0.2.3

## 0.1.7

### Patch Changes

- Updated dependencies [629c381]
  - @vygruppen/spor-icon-react@0.5.0

## 0.1.6

### Patch Changes

- Updated dependencies [ac60336]
  - @vygruppen/spor-i18n-react@0.0.5
  - @vygruppen/spor-button-react@0.2.2

## 0.1.5

### Patch Changes

- Updated dependencies [de67c09]
  - @vygruppen/spor-icon-react@0.4.0

## 0.1.4

### Patch Changes

- Updated dependencies [7dc9c0e]
  - @vygruppen/spor-button-react@0.2.1

## 0.1.3

### Patch Changes

- Updated dependencies [68b7928]
  - @vygruppen/spor-icon-react@0.3.0

## 0.1.2

### Patch Changes

- Updated dependencies [936b4ed]
  - @vygruppen/spor-button-react@0.2.0

## 0.1.1

### Patch Changes

- 772cb45: Rename trigger to triggerElement, so we avoid naming conflicts
- ec876eb: Add mobile friendly menu for stepper component

## 0.1.0

### Minor Changes

- 4ec0fcc: Add new popover package
