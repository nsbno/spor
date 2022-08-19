# Changelog

## 2.4.4

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before

## 2.4.3

### Patch Changes

- cdf4c2d: Update cards with Active and Selected state as well as enhancing card shadows on android.

## 2.4.2

### Patch Changes

- f52e583: Improve elm design token code generation

## 2.4.1

### Patch Changes

- 9ba66ca: Add shadow color ("color") to the set of shadow tokens
- b47d697: Tweak the shadow tokens for mobile

## 2.4.0

### Minor Changes

- d09d725: Add new color lines for linjetags

## 2.3.7

### Patch Changes

- f49b13d: Fix an issue where the React Native types weren't typed correctly
- 382173f: Remove unneccesary prod dependencies, creating lots of extra items to consumer's package lock files

## 2.3.6

### Patch Changes

- c428f71: Add support for React Native tokens

## 2.3.5

### Patch Changes

- 7394e9a: Move the design tokens repo into the spor mono-repo

### [2.3.4](https://www.github.com/nsbno/spor-design-tokens/compare/v2.3.3...v2.3.4) (2022-02-10)

### Bug Fixes

- **colors:** move the mint color one step up ([1e0c55a](https://www.github.com/nsbno/spor-design-tokens/commit/1e0c55ab66d0fdf50096d9ecafdb971b2d502a68))

### [2.3.3](https://www.github.com/nsbno/spor-design-tokens/compare/v2.3.2...v2.3.3) (2022-02-10)

### Bug Fixes

- **colors:** fix an invalid JSON snafoo ([0b8e864](https://www.github.com/nsbno/spor-design-tokens/commit/0b8e864351c67d5da61ba6812127c334f044ec1c))

### [2.3.2](https://www.github.com/nsbno/spor-design-tokens/compare/v2.3.1...v2.3.2) (2022-02-10)

### Bug Fixes

- **colors:** change the name of the background colors ([a989218](https://www.github.com/nsbno/spor-design-tokens/commit/a9892187b83c5483781556fa59c0cf427c4cfaf6))
- **colors:** change the sorting order of main colors ([bf402fd](https://www.github.com/nsbno/spor-design-tokens/commit/bf402fdc18d8a078a09b5481231326c417a988ac))

### [2.3.1](https://www.github.com/nsbno/spor-design-tokens/compare/v2.3.0...v2.3.1) (2022-02-10)

### Bug Fixes

- **colors:** fix bug in background color naming scheme ([dcd60fc](https://www.github.com/nsbno/spor-design-tokens/commit/dcd60fc3e498e7c8637c36af4fb7efefcf639c40))

## [2.3.0](https://www.github.com/nsbno/spor-design-tokens/compare/v2.2.1...v2.3.0) (2022-02-03)

### Features

- **colors:** add white and black transparent colors ([0fcaadd](https://www.github.com/nsbno/spor-design-tokens/commit/0fcaadddcf8ebe1c495a4b356962636b1cf8e636))

### [2.2.1](https://www.github.com/nsbno/spor-design-tokens/compare/v2.2.0...v2.2.1) (2022-01-24)

### Bug Fixes

- **size:** make line heights work as expected in JavaScript ([755b634](https://www.github.com/nsbno/spor-design-tokens/commit/755b634b05b065eeaea9e5c99639b16b4ab36514))

## [2.2.0](https://www.github.com/nsbno/spor-design-tokens/compare/v2.1.1...v2.2.0) (2022-01-11)

### Features

- **spacing:** add new spacing tokens ([0ff63d8](https://www.github.com/nsbno/spor-design-tokens/commit/0ff63d82fb40b6353a5ffe21bd8ebd0c12cc8556))

### [2.1.1](https://www.github.com/nsbno/spor-design-tokens/compare/v2.1.0...v2.1.1) (2021-12-16)

### Bug Fixes

- **color:** fix typo in an alias ([dd5e9b2](https://www.github.com/nsbno/spor-design-tokens/commit/dd5e9b299dc178b39ecc0822ce0e2298b19b1344))
- **color:** fix typo in text color token ([4af8ba3](https://www.github.com/nsbno/spor-design-tokens/commit/4af8ba3b9b6f45b5bb301b214e58cea1b56a4de2))
- **z-indices:** improve the z-index tokens ([012ffe9](https://www.github.com/nsbno/spor-design-tokens/commit/012ffe950b7b4e47aa6b0c5f69828c02a0eee4c4))

## [2.1.0](https://www.github.com/nsbno/spor-design-tokens/compare/v2.0.0...v2.1.0) (2021-12-14)

### Features

- add LESS variable tokens ([197f37f](https://www.github.com/nsbno/spor-design-tokens/commit/197f37f1f9e8cc3c38302eec41eebdb86d05f311))

## [2.0.0](https://www.github.com/nsbno/ds-tokens/compare/v1.5.1...v2.0.0) (2021-12-10)

### ⚠ BREAKING CHANGES

- Change your dependency name from @nsbno/ds-tokens to @vygruppen/spor-design-tokens
- We are moving to npm because github packages is hard
- **revamp the spacing scale:** This change removes the old spacing scale, and replaces it with a t-shirt size based one, as well as an aliased pixel based scale.
- **color:** This change introduces a more complete color palette than we had. The new color palette has a complete scale between 600 (dark) and 50 (light), which makes it easy to find different state colors.

### Features

- **color:** add color aliases ([e4ce434](https://www.github.com/nsbno/ds-tokens/commit/e4ce4346f82fdc42016261e4bda9278f00751e7a))
- **color:** introdue new color schemes and naming scheme for colors ([a47d6b5](https://www.github.com/nsbno/ds-tokens/commit/a47d6b5df30048f42a406cd9631636cb7ef210be))
- first pass of an Elm formatter ([28f449f](https://www.github.com/nsbno/ds-tokens/commit/28f449f7b2d372230268a532016b75df91f748fc))
- **revamp the spacing scale:** add new and improved spacing scale ([4b79a71](https://www.github.com/nsbno/ds-tokens/commit/4b79a71b47cb2354536098cde42def1430cdfbdd))
- **size:** add new token for strokes ([d4bca6d](https://www.github.com/nsbno/ds-tokens/commit/d4bca6da9987d085faa7b1a52960ebc9c5acd6ed))
- **time:** add transition tokens ([4acd275](https://www.github.com/nsbno/ds-tokens/commit/4acd275f63d3820e172d0582c11f4973a0ada85d))

### Bug Fixes

- **color:** reference the correct color namespace ([5f46811](https://www.github.com/nsbno/ds-tokens/commit/5f46811f7ca0d9a602f264d8e02d2cc2c659619a))
- fix indentation in Elm formatter. Output now accepted by Elm compiler ([52af501](https://www.github.com/nsbno/ds-tokens/commit/52af501c83c90b761d40107eca9e6c4bf7399c1b))
- **readme:** import the correct package in CSS examples ([9951069](https://www.github.com/nsbno/ds-tokens/commit/9951069b0f4ac314ae751803b635f4814e916eb7))

### Continuous Integration

- prepare to release packages to npm instead of github ([dad8e58](https://www.github.com/nsbno/ds-tokens/commit/dad8e58d8c27b5ec94672bfb79dbb4f3b7088d62))

### Code Refactoring

- change name to @vygruppen/spor-design-tokens ([41cb413](https://www.github.com/nsbno/ds-tokens/commit/41cb4138cbaf2b335adfd6e7ecb8aff06b3a090f))

### [1.5.1](https://www.github.com/nsbno/ds-tokens/compare/v1.5.0...v1.5.1) (2021-11-08)

### Bug Fixes

- **color:** fix wrong color code ([0ccd519](https://www.github.com/nsbno/ds-tokens/commit/0ccd5196a198def493db43268a85ee6828fc71ad))

## [1.5.0](https://www.github.com/nsbno/ds-tokens/compare/v1.4.2...v1.5.0) (2021-10-29)

### Features

- **color:** add background color tokens ([16d8c20](https://www.github.com/nsbno/ds-tokens/commit/16d8c207d997c8678f0861761130b10d8f4f0ec1))
- **color:** add dark green hover color ([75500ca](https://www.github.com/nsbno/ds-tokens/commit/75500ca787a604a796409587fbc43297bf27921d))

### [1.4.2](https://www.github.com/nsbno/ds-tokens/compare/v1.4.1...v1.4.2) (2021-10-27)

### Bug Fixes

- include built files in the release ([0f0ccd7](https://www.github.com/nsbno/ds-tokens/commit/0f0ccd7dd984a28e5df8f554f88e788f5ab91d84))

### [1.4.1](https://www.github.com/nsbno/ds-tokens/compare/v1.4.0...v1.4.1) (2021-10-27)

### Bug Fixes

- add a tiny change ([d8c03ea](https://www.github.com/nsbno/ds-tokens/commit/d8c03eaaccb8680f3d4701ec80ab20ab7622f2f6))
- **font-style:** fix typo ([f8c0a5b](https://www.github.com/nsbno/ds-tokens/commit/f8c0a5b2dcb12765325259fa183429a9df53c652))
