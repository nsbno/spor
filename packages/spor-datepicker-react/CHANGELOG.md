# @vygruppen/spor-datepicker-react

## 1.1.3

### Patch Changes

- fbe0808b: Fix a few accessibility issues
- Updated dependencies [fbe0808b]
- Updated dependencies [fbe0808b]
  - @vygruppen/spor-typography-react@1.1.1
  - @vygruppen/spor-button-react@1.1.1
  - @vygruppen/spor-input-react@1.3.1
  - @vygruppen/spor-icon-react@2.0.0

## 1.1.2

### Patch Changes

- 7d936ca3: Fix a bug where the datepicker would crash

## 1.1.1

### Patch Changes

- b17ec3fb: Fix a bug where wiping the value would crash the time picker component

## 1.1.0

### Minor Changes

- 5e796e79: Add new component TimePicker and class Time

### Patch Changes

- Updated dependencies [7849279e]
- Updated dependencies [199ad3da]
  - @vygruppen/spor-button-react@1.0.4
  - @vygruppen/spor-icon-react@1.3.0

## 1.0.2

### Patch Changes

- 0a7e3b44: Add support for nynorsk texts
- Updated dependencies [0a7e3b44]
  - @vygruppen/spor-i18n-react@1.1.0
  - @vygruppen/spor-button-react@1.0.3
  - @vygruppen/spor-input-react@1.1.3

## 1.0.1

### Patch Changes

- 7eb52570: Datepicker: Add form control with validation state and error messages
- 3af3a3ee: Rmove popover on disabled datepicker
- Updated dependencies [54721c92]
- Updated dependencies [30f859be]
  - @vygruppen/spor-button-react@1.0.2
  - @vygruppen/spor-input-react@1.1.1
  - @vygruppen/spor-typography-react@1.0.1

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

### Patch Changes

- Updated dependencies [7e8052a8]
- Updated dependencies [e6158c62]
  - @vygruppen/spor-typography-react@1.0.0
  - @vygruppen/spor-button-react@1.0.0
  - @vygruppen/spor-card-react@1.0.0
  - @vygruppen/spor-i18n-react@1.0.0
  - @vygruppen/spor-icon-react@1.0.0
  - @vygruppen/spor-input-react@1.0.0

## 0.1.9

### Patch Changes

- Updated dependencies [09448ca8]
  - @vygruppen/spor-button-react@0.2.11

## 0.1.8

### Patch Changes

- @vygruppen/spor-typography-react@0.4.9

## 0.1.7

### Patch Changes

- @vygruppen/spor-typography-react@0.4.8

## 0.1.6

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

- Updated dependencies [d2c64617]
  - @vygruppen/spor-icon-react@0.6.4
  - @vygruppen/spor-typography-react@0.4.7
  - @vygruppen/spor-input-react@0.5.5
  - @vygruppen/spor-card-react@0.3.2
  - @vygruppen/spor-button-react@0.2.10

## 0.1.5

### Patch Changes

- Updated dependencies [13e5bd03]
  - @vygruppen/spor-icon-react@0.6.3
  - @vygruppen/spor-input-react@0.5.4

## 0.1.4

### Patch Changes

- 77bf8c23: Fix bug where datepicker didn't work with native form tags

## 0.1.3

### Patch Changes

- @vygruppen/spor-button-react@0.2.9

## 0.1.2

### Patch Changes

- @vygruppen/spor-typography-react@0.4.6

## 0.1.1

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before
- Updated dependencies [4337f0f4]
  - @vygruppen/spor-button-react@0.2.8
  - @vygruppen/spor-card-react@0.3.1
  - @vygruppen/spor-i18n-react@0.0.6
  - @vygruppen/spor-icon-react@0.6.2
  - @vygruppen/spor-input-react@0.5.3
  - @vygruppen/spor-typography-react@0.4.5

## 0.1.0

### Minor Changes

- 0f7bdb7: New package - spor-datepicker-react
