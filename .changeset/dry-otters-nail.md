---
"@vygruppen/spor-icon-react": major
"@vygruppen/spor-icon": major
"@vygruppen/spor-icon-react-native": major
---

Delete and rename some icons

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
