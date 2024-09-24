# @vygruppen/spor-icon-react

## 3.10.0

### Minor Changes

- 94cb2ee: Fixes version clash with icons

## 3.9.0

### Minor Changes

- 5d80df3: Updated packages

## 3.8.0

### Minor Changes

- 8b386fd: Add icons for media controller

## 3.7.0

### Minor Changes

- 5503c91: Added new fancy outline icons for Dropdown

## 3.6.0

### Minor Changes

- 1266efd: Adds folder icon to the communication category

## 3.5.0

### Minor Changes

- 2564f46: Add new play icons

## 3.4.0

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

### Patch Changes

- d5ad66c1: Format all code and content with Prettier

## 3.3.0

### Minor Changes

- 88d6fc75: Add new icons:

  - No wifi
  - Reclining seat
  - Sleep 6 beds

  Modify icons:

  - Wifi
  - Baby changing

## 3.2.3

### Patch Changes

- 1d30e122: Icons: Re-add viewBox prop to all icons, making them scalable
  ExpandableAlert: Ensure the text size is equal across title and content

## 3.2.2

### Patch Changes

- cfa3ebb1: ExpandableAlert: Fix double padding bug
  Other:

  - Set the document-level line height to a valid value
  - Fix a bug with icon generation

## 3.2.1

### Patch Changes

- 6ca2f865: Update internal dependencies"

## 3.2.0

### Minor Changes

- 9f84f18f: Add mountain and forest icons.

## 3.1.0

### Minor Changes

- fb1b899e: add new town icon

## 3.0.0

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

## 2.0.3

### Patch Changes

- 7daa5891: Update URL for documentation website

## 2.0.2

### Patch Changes

- 38b0e7c9: Slight redesign of the sound off outline icon

## 2.0.1

### Patch Changes

- 86a84f32: Reimplement the departure icon in a simpler way

## 2.0.0

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

## 1.3.0

### Minor Changes

- 199ad3da: Legg til ikonene "baby changing", "coffee cart", "play room"
  Endre ikoene "dog allowed", "dog not allowed", "toalett"

## 1.2.0

### Minor Changes

- 9a26a7c5: Remove default colors from success and error icons

## 1.1.0

### Minor Changes

- 1afc13f3: New notification icons

### Patch Changes

- 15af4ea9: Update the design of check mark icons

## 1.0.2

### Patch Changes

- 410227bf: Add role="img" to all icons

## 1.0.1

### Patch Changes

- f6305a33: Small fixes

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

### Patch Changes

- Updated dependencies [e6158c62]
  - @vygruppen/spor-layout-react@1.0.0

## 0.6.4

### Patch Changes

- d2c64617: This change removes some subgroupings of color tokens, removing the need for writing alias.colorName or palette.scaleName in front of everything.

  This is a major breaking change, but it's easy enough to migrate. Do a search replace for "alias.", "palette.", ".alias" and ".palette", and replace them with an empty string. If you've used other subgroupings as well, you might have to do a search replace for "background", "error", "outline", "main" etc as well.

  If you're a TypeScript user, the required changes will be highlighted by the type checker.

- Updated dependencies [d2c64617]
  - @vygruppen/spor-layout-react@0.3.3

## 0.6.3

### Patch Changes

- 13e5bd03: Update warning, error and info icons

## 0.6.2

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before
- Updated dependencies [4337f0f4]
  - @vygruppen/spor-layout-react@0.3.2

## 0.6.1

### Patch Changes

- d2b9f7e: Fix an issue where all svg images were made to display: block

## 0.6.0

### Minor Changes

- 4c4efad: Add new Vy icon

### Patch Changes

- 305c3ba: Add a displayName to all icons in development

## 0.5.0

### Minor Changes

- 629c381: Add new icons for express bus, figma, github , arrow up and arrow down

## 0.4.0

### Minor Changes

- de67c09: Add new icons to icon library

## 0.3.0

### Minor Changes

- 68b7928: Add icons for language and minibus

## 0.2.0

### Minor Changes

- ed97c76: Add headphones icons

## 0.1.1

### Patch Changes

- 37f7c2e: Fix some issues with dependencies
- Updated dependencies [37f7c2e]
  - @vygruppen/spor-layout-react@0.3.1

## 0.1.0

### Minor Changes

- c22d76c: Add phone icon

### Patch Changes

- 8a80f1d: This bugfix comes down from heaven and makes dependencies work like they should!

## 0.0.5

### Patch Changes

- 011cdd8: Make icons their stated size, instead of the current font size.
- 3a9746a: Fix an issue where viewBox was deleted

## 0.0.4

### Patch Changes

- b78c8b7: Update the home and search icons
- Updated dependencies [b81bc05]
- Updated dependencies [90ca75c]
- Updated dependencies [ee14582]
  - @vygruppen/spor-layout-react@0.3.0

## 0.0.3

### Patch Changes

- 6bed16f: Fix broken types for icons
- 22cf05b: Remember to include the built files to NPM
- Updated dependencies [016681e]
  - @vygruppen/spor-layout-react@0.2.0

## 0.0.2

### Patch Changes

- be877b9: Add packages for the icons library, and the react implementation of it
- 45c285a: Rename spor-icons and spor-icons-react to their singular form.
- Updated dependencies [e34a588]
  - @vygruppen/spor-layout-react@0.1.0
