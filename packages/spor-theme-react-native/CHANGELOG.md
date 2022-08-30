# @vygruppen/spor-theme-react-native

## 0.3.1

### Patch Changes

- 36fb9fae: Tweak the vertical padding of react native messageboxes

## 0.3.0

### Minor Changes

- 80e771e5: Change the spacing tokens

  This change removes the "px" spacing tokens, as well as the t-shirt size tokens, in favor of a scale. This conforms better with how The React and React Native implementations are set up.

  To migrate, upgrade and fix all typing errors in your application. This is what you should change from and to:

  - 3xs or px[3] -> 0.5
  - 2xs or px[6] -> 1
  - xs or px[9] -> 1.5
  - sm or px[12] -> 2
  - md or px[18] -> 3
  - lg or px[24] -> 4
  - xl or px[30] -> 5
  - 2xl or px[36] -> 6
  - 3xl or px[42] -> 7
  - 4xl or px[56] -> 8
  - 5xl or px[72] -> 9
  - 6xl or px[90] -> 10
  - 7xl or px[120] -> 11

### Patch Changes

- ae157f1b: Use new tokens internally
- Updated dependencies [80e771e5]
  - @vygruppen/spor-design-tokens@2.5.0

## 0.2.12

### Patch Changes

- 070e6ee2: Mark the react-native theme package as side-effecty

## 0.2.11

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before
- Updated dependencies [4337f0f4]
  - @vygruppen/spor-design-tokens@2.4.4

## 0.2.10

### Patch Changes

- da41f8c: Endre borderRadius for small Card

## 0.2.9

### Patch Changes

- 93725fa: Tweak the color of disabled cards

## 0.2.8

### Patch Changes

- 20e7e2e: Adjust the colors of cards on React and React Native

## 0.2.7

### Patch Changes

- 2a708a4: Legger til BoxProp slik at vi kan sende med style som en prop til Card. Endrer også fargen på kanten til sølv.

## 0.2.6

### Patch Changes

- 7570261: endre farge på onPress border for Card komponenten

## 0.2.5

### Patch Changes

- 9d2fba0: Add color scheme for night-train badge

## 0.2.4

### Patch Changes

- c0b0f01: Lagt til første versjon av alert komponent

## 0.2.3

### Patch Changes

- cdf4c2d: Update cards with Active and Selected state as well as enhancing card shadows on android.
- Updated dependencies [cdf4c2d]
  - @vygruppen/spor-design-tokens@2.4.3

## 0.2.2

### Patch Changes

- 8dbf17e: Updated loader with a textVariant, and varianttheme with a default textcolor

## 0.2.1

### Patch Changes

- bfb0d80: Add new Message Box component for React Native.

## 0.2.0

### Minor Changes

- c54d418: Lagt til en ny pakke for Badges

### Patch Changes

- ea1ad58: Add new Badge component for React Native.

## 0.1.8

### Patch Changes

- 02a0efb: Lagt til en ny pakke for Accordions som er utvidbare elementer.

## 0.1.7

### Patch Changes

- e361222: Oppdaterer Button-komponent
- e9d084d: Oppdaterer Button-komponent

## 0.1.6

### Patch Changes

- Updated dependencies [f52e583]
  - @vygruppen/spor-design-tokens@2.4.2

## 0.1.5

### Patch Changes

- be56aa0: Add new package Card
- Updated dependencies [9ba66ca]
- Updated dependencies [b47d697]
  - @vygruppen/spor-design-tokens@2.4.1

## 0.1.4

### Patch Changes

- Updated dependencies [d09d725]
  - @vygruppen/spor-design-tokens@2.4.0

## 0.1.3

### Patch Changes

- 4bcd21e: Improve the color typings even more for React Native

## 0.1.2

### Patch Changes

- 43d27f6: Add TypeScript support for palette colors as well

## 0.1.1

### Patch Changes

- b822b81: Relax the React Native dependency requirement

## 0.1.0

### Minor Changes

- 5523b50: First beta release of the spor-react-native library
