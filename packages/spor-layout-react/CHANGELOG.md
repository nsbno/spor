# @vygruppen/spor-layout-react

## 1.1.0

### Minor Changes

- ee2ede08: Nå kan man spesifisere retningen på en Stack med flexDirection istedenfor direction.

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

## 0.3.3

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

## 0.3.2

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before

## 0.3.1

### Patch Changes

- 37f7c2e: Fix some issues with dependencies

## 0.3.0

### Minor Changes

- b81bc05: Export all props types
- 90ca75c: Add a Divider component

### Patch Changes

- ee14582: Add new package spor-table-react

## 0.2.0

### Minor Changes

- 016681e: Export the Container component

## 0.1.0

### Minor Changes

- e34a588: Export HStack, VStack, Spacer and GridItem components

## 0.0.2

### Patch Changes

- 2eac310: Add layout package
