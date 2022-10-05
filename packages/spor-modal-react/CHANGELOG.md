# @vygruppen/spor-modal-react

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

## 0.1.4

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

## 0.1.3

### Patch Changes

- 8a170ece: Fix a bug where overflowing drawer content would make content disappear instead of making it scrollable

## 0.1.2

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before

## 0.1.1

### Patch Changes

- 4dc266d: Fix some minor bugs in the drawer

## 0.1.0

### Minor Changes

- 874099f: Add a new Drawer component

## 0.0.3

### Patch Changes

- 37f7c2e: Fix some issues with dependencies

## 0.0.2

### Patch Changes

- d379b43: Add new package for modals - spor-modal-react
