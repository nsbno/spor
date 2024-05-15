# @vygruppen/spor-icon-react-native

## 2.8.0

### Minor Changes

- 5503c91: Added new fancy outline icons for Dropdown

## 2.7.0

### Minor Changes

- 46ee976: Fixing bug where Metro can't find the index.mjs-file.

## 2.6.0

### Minor Changes

- 1266efd: Adds folder icon to the communication category

## 2.5.0

### Minor Changes

- 2564f46: Add new play icons

## 2.4.0

### Minor Changes

- cec9b038: React Native icons now works as expected

### Patch Changes

- d5ad66c1: Format all code and content with Prettier

## 2.3.0

### Minor Changes

- 88d6fc75: Add new icons:

  - No wifi
  - Reclining seat
  - Sleep 6 beds

  Modify icons:

  - Wifi
  - Baby changing

## 2.2.1

### Patch Changes

- 6ca2f865: Update internal dependencies"

## 2.2.0

### Minor Changes

- 9f84f18f: Add mountain and forest icons.

## 2.1.0

### Minor Changes

- fb1b899e: add new town icon

## 2.0.0

### Major Changes

- f48edb9f: BREAKING: Remove all colored icons

  Icons should not come with a default color other than black (well, dark grey, to be specific). However, a few of our icons have had a different color. These are now removed, and the color-neutral version of those icons have been renamed to reflect this change.

  To migrate, please check if you're using any GreenJourney icons, Campaign icons or Smartprice icons. If you are, please change your import to the freshly renamed icons and set the color yourself.

  The deleted icons are:

  - SmartpriceColorFill18Icon
  - SmartpriceColorFill24Icon
  - SmartpriceColorFill30Icon
  - SmartpriceColorOutline18Icon
  - SmartpriceColorOutline24Icon
  - SmartpriceColorOutline30Icon

  - CampaignColorFill18Icon
  - CampaignColorFill24Icon
  - CampaignColorFill30Icon
  - CampaignColorOutline18Icon
  - CampaignColorOutline24Icon
  - CampaignColorOutline30Icon

  - GreenJourneyColor18Icon
  - GreenJourneyColor24Icon
  - GreenJourneyColor30Icon

  The renamed icons are:

  - SmartpriceBlackFill18Icon -> SmartpriceFill18Icon
  - SmartpriceBlackFill24Icon -> SmartpriceFill24Icon
  - SmartpriceBlackFill30Icon -> SmartpriceFill30Icon
  - SmartpriceBlackOutline18Icon -> SmartpriceOutline18Icon
  - SmartpriceBlackOutline24Icon -> SmartpriceOutline24Icon
  - SmartpriceBlackOutline30Icon - SmartpriceOutline30Icon

  - CampaignBlackFill18Icon -> CampaignFill18Icon
  - CampaignBlackFill24Icon -> CampaignFill24Icon
  - CampaignBlackFill30Icon -> CampaignFill30Icon
  - CampaignBlackOutline18Icon -> CampaignOutline18Icon
  - CampaignBlackOutline24Icon -> CampaignOutline24Icon
  - CampaignBlackOutline30Icon - CampaignOutline30Icon

  - GreenJourneyBlack18Icon -> GreenJourneyOutline18Icon
  - GreenJourneyBlack24Icon -> GreenJourneyOutline24Icon
  - GreenJourneyBlack30Icon -> GreenJourneyOutline30Icon

  If you want the Green journey icon to stay green, use the color token "greenHaze".
  If you want the Campaign icon to stay green, use the color token "pine"
  If you want the Smartprice icon to stay blue, use the color token "ocean"

## 1.0.3

### Patch Changes

- 7daa5891: Update URL for documentation website

## 1.0.2

### Patch Changes

- 38b0e7c9: Slight redesign of the sound off outline icon

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
