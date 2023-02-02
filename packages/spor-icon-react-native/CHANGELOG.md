# @vygruppen/spor-icon-react-native

## 1.0.1

### Patch Changes

- 86a84f32: Reimplement the departure icon in a simpler way

## 1.0.0

### Major Changes

- fbe0808b: Delete and rename some icons

  This breaking change removes a few icons, and renames yet other ones.

  Removed icons:

  - FigmaColor18Icon
  - FigmaColor24Icon
  - FigmaColor30Icon
  - GithubColor18Icon
  - GithubColor24Icon
  - GithubColor30Icon

  If you were using one of these, migrate to using their outline or fill alternatives

  Renamed icons (same goes for all sizes):

  - Position -> PositionDot (i.e. PositionFill24Icon -> PositionDotFill24Icon)
  - MyPosition -> Position (i.e. MyPositionFill24Icon -> PositionFill24Icon)
    (I know, this is confusing, but we have to do it to avoid confusion with the PositionDot icon)
  - DogAllowed -> PetAllowed (i.e. DogAllowedFill24Icon -> PetAllowedFill24Icon)
  - DogNotAllowed -> PetNotAllowed (i.e. DogNotAllowedFill24Icon -> PetNotAllowedFill24Icon)
  - Toalett -> Toilet (i.e. ToalettFill24Icon -> ToiletFill24Icon)

  To migrate, please do a search replace for the renamed icons, and change the removed icons to a different variant

## 0.5.0

### Minor Changes

- 199ad3da: Legg til ikonene "baby changing", "coffee cart", "play room"
  Endre ikoene "dog allowed", "dog not allowed", "toalett"

## 0.4.0

### Minor Changes

- 9a26a7c5: Remove default colors from success and error icons

## 0.3.0

### Minor Changes

- 1afc13f3: New notification icons

### Patch Changes

- 15af4ea9: Update the design of check mark icons

## 0.2.7

### Patch Changes

- f6305a33: Small fixes

## 0.2.6

### Patch Changes

- ceadf7dc: Fix a bug where resizing the icons directly through height or width didn't work as expected

## 0.2.5

### Patch Changes

- 4a572371: Improve the icon implementation

## 0.2.4

### Patch Changes

- cff44b63: Fix react native releases

## 0.2.3

### Patch Changes

- 9b989ba5: Add support for treeshaking icons

## 0.2.2

### Patch Changes

- 9a9449da: Trigger update of icon dependency

## 0.2.1

### Patch Changes

- feb421b4: Fix build bug for react-native

## 0.2.0

### Minor Changes

- bc687eb4: Add support for using color names

## 0.1.5

### Patch Changes

- 13e5bd03: Update warning, error and info icons

## 0.1.4

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before

## 0.1.3

### Patch Changes

- 2521824: Endre fra dependencies til devDependencies for react-native-svg

## 0.1.2

### Patch Changes

- 50b9bb1: Fixes a bug where specifying the color of an icon wouldn't work as expected

## 0.1.1

### Patch Changes

- e361222: Oppdaterer Button-komponent
- e9d084d: Oppdaterer Button-komponent
- 4c2f201: Set the correct types path

## 0.1.0

### Minor Changes

- 4c4efad: Add new Vy icon

### Patch Changes

- 211b815: Add a color prop to all icons

## 0.0.2

### Patch Changes

- 6ed2440: Add a first iteration of icons to React Native
