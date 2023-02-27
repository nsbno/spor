# @vygruppen/spor-loader-react

## 1.1.1

### Patch Changes

- e7228767: Upgrade React Aria

## 1.1.0

### Minor Changes

- ddcd9a8b: Add new components ProgressBar and ProgressLoader

## 1.0.2

### Patch Changes

- bdffe816: Improve the skeleton colors slightly"

## 1.0.1

### Patch Changes

- 54721c92: Lagt til forwardref for de fleste komponentene
- Updated dependencies [54721c92]
  - @vygruppen/spor-loader@0.2.3

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

## 0.2.4

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

## 0.2.3

### Patch Changes

- 0a128d66: Fix an issue where lottie animations crashed

## 0.2.2

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before
- Updated dependencies [4337f0f4]
  - @vygruppen/spor-loader@0.2.2

## 0.2.1

### Patch Changes

- Updated dependencies [0d849dd]
  - @vygruppen/spor-loader@0.2.1

## 0.2.0

### Minor Changes

- 911e40b: Add new color variants of spinners

### Patch Changes

- Updated dependencies [911e40b]
  - @vygruppen/spor-loader@0.2.0

## 0.1.0

### Minor Changes

- 83d0026: Add two new components – LightInlineLoader and ColorInlineLoader instead of the default InlineLoader

### Patch Changes

- Updated dependencies [83d0026]
  - @vygruppen/spor-loader@0.1.0

## 0.0.3

### Patch Changes

- ebd918f: Add support for both light and dark variants of the full screen loader
- Updated dependencies [ebd918f]
  - @vygruppen/spor-loader@0.0.3

## 0.0.2

### Patch Changes

- 36ebbf2: Add new package spor-loader-react
- Updated dependencies [4272914]
  - @vygruppen/spor-loader@0.0.2
