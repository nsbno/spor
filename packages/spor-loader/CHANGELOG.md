# @vygruppen/spor-loader

## 0.5.0

### Minor Changes

- 000e30a: - Replace npm with pnpm as package manager.
  - Update CI pipelines and Docker to use pnpm.
  - Update Docker to install from frozen lockfile to ensure exact dependency versions.
  - Fix dependency cycle between spor-react-icons and spor-package.
  - Update docs to use pnpm.
  - Install correct npm packages in apps/packages in monorepo.
  - Replace npm-feed installs with direct "workspace:\*" installs for better local development.
  - Replace inline commands for tsup with tsup.config.ts files.

## 0.4.0

### Minor Changes

- 1812e4e: Add loaders for pride month

## 0.3.2

### Patch Changes

- 6ca2f865: Update internal dependencies"

## 0.3.1

### Patch Changes

- 7794e5cc: Add new loader to index.ts

## 0.3.0

### Minor Changes

- 6a85ed66: Add new inline loader animation with lighter colors

## 0.2.3

### Patch Changes

- 54721c92: Lagt til forwardref for de fleste komponentene

## 0.2.2

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before

## 0.2.1

### Patch Changes

- 0d849dd: Update spinner animation data

## 0.2.0

### Minor Changes

- 911e40b: Add new color variants of spinners, and new designs for inline loaders

## 0.1.0

### Minor Changes

- 83d0026: Add two new components – LightInlineLoader and ColorInlineLoader instead of the default InlineLoader

## 0.0.3

### Patch Changes

- ebd918f: Add support for both light and dark variants of the full screen loader

## 0.0.2

### Patch Changes

- 4272914: Add a new package spor-loader with shared lottie files
