# @vygruppen/spor-table-react

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

## 0.0.7

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

## 0.0.6

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before

## 0.0.5

### Patch Changes

- 469768f: Fix some overflow issues with tables

## 0.0.4

### Patch Changes

- 2524c7c: Add support for overflowing content

## 0.0.3

### Patch Changes

- 37f7c2e: Fix some issues with dependencies

## 0.0.2

### Patch Changes

- ee14582: Add new package spor-table-react
