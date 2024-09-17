# @vygruppen/spor-icon

## 3.0.0

### Major Changes

- cc63508: Rename stars icons from "icons" to "stars"

  This is a breaking change, as it requires direct consumers to change their imports for some icons. Vhen updating to this major version, make sure to import "stars-(outline|fill)-[size].svg" instead of "iconss-(outline|fill)-[size].svg" wherever necessary.

## 2.9.1

### Patch Changes

- 7452b45: Updated realtime icons to have better contrast

## 2.9.0

### Minor Changes

- 5d80df3: Updated packages

## 2.8.0

### Minor Changes

- 8b386fd: Add icons for media controller

## 2.7.0

### Minor Changes

- 5503c91: Added new fancy outline icons for Dropdown

## 2.6.0

### Minor Changes

- 1266efd: Adds folder icon to the communication category

## 2.5.0

### Minor Changes

- 3b64319: added play icon

## 2.4.0

### Minor Changes

- 4ac80a10: Added the robot icon in all sizes, outline and fill.
- 9cf88825: Added new icons. Icons added:

  add-fill-12x12.svg
  add-fill-18x18.svg
  add-fill-24x24.svg
  add-fill-30x30.svg
  add-outline-12x12.svg
  add-outline-18x18.svg
  add-outline-24x24.svg
  add-outline-30x30.svg
  subtract-fill-12x12.svg
  subtract-fill-18x18.svg
  subtract-fill-24x24.svg
  subtract-fill-30x30.svg
  subtract-outline-12x12.svg
  subtract-outline-18x18.svg
  subtract-outline-24x24.svg
  subtract-outline-30x30.svg
  service-standard-fill-18x18.svg
  service-standard-fill-24x24.svg
  service-standard-fill-30x30.svg
  service-standard-outline-18x18.svg
  service-standard-outline-24x24.svg
  service-standard-outline-30x30.svg
  tracks-fill-18x18.svg
  tracks-fill-24x24.svg
  tracks-fill-30x30.svg
  tracks-outline-18x18.svg
  tracks-outline-24x24.svg
  tracks-outline-30x30.svg
  tourney-fill-18x18.svg
  tourney-fill-24x24.svg
  tourney-fill-30x30.svg
  tourney-outline-18x18.svg
  tourney-outline-24x24.svg
  tourney-outline-30x30.svg
  trip-fill-18x18.svg
  trip-fill-24x24.svg
  trip-fill-30x30.svg
  trip-outline-18x18.svg
  trip-outline-24x24.svg
  trip-outline-30x30.svg

- cec9b038: React Native icons now works as expected

## 2.3.0

### Minor Changes

- 88d6fc75: Add new icons:

  - No wifi
  - Reclining seat
  - Sleep 6 beds

  Modify icons:

  - Wifi
  - Baby changing

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

## 0.9.0

### Minor Changes

- 199ad3da: Legg til ikonene "baby changing", "coffee cart", "play room"
  Endre ikoene "dog allowed", "dog not allowed", "toalett"

## 0.8.0

### Minor Changes

- 9a26a7c5: Remove default colors from success and error icons

## 0.7.0

### Minor Changes

- 1afc13f3: New notification icons

### Patch Changes

- 15af4ea9: Update the design of check mark icons

## 0.6.4

### Patch Changes

- f6305a33: Small fixes

## 0.6.3

### Patch Changes

- 867b12b9: Fix bug in svg-prop stroke-width

## 0.6.2

### Patch Changes

- 13e5bd03: Update warning, error and info icons

## 0.6.1

### Patch Changes

- 8f6053e0: Css fikses og updater nye ikoner

## 0.6.0

### Minor Changes

- 4c4efad: Add new Vy icon

## 0.5.0

### Minor Changes

- 629c381: Add new icons for express bus, figma, github , arrow up and arrow down

## 0.4.0

### Minor Changes

- de67c09: Add new icons to icon library

## 0.3.0

### Minor Changes

- 68b7928: Add icons for language and minibus

## 0.2.1

### Patch Changes

- 6f8e5d6: Fix bug where icons were not included

## 0.2.0

### Minor Changes

- ed97c76: Add headphones icons

## 0.1.1

### Patch Changes

- 37f7c2e: Fix some issues with dependencies

## 0.1.0

### Minor Changes

- c22d76c: Add phone icon

## 0.0.3

### Patch Changes

- b78c8b7: Update the home and search icons

## 0.0.2

### Patch Changes

- be877b9: Add packages for the icons library, and the react implementation of it
- 45c285a: Rename spor-icons and spor-icons-react to their singular form.
