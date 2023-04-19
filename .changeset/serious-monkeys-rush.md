---
"@vygruppen/spor-icon": major
"@vygruppen/spor-icon-react": major
"@vygruppen/spor-icon-react-native": major
---

BREAKING: Remove all colored icons

Icons should not come with a default color other than black (well, dark grey, to be specific). However, a few of our icons have had a different color. These are now removed, and the color-neutral version of those icons have been renamed to reflect this change.

To migrate, please check if you're using any GreenJourney icons or Smartprice icons. If you are, please change your import to the freshly renamed icons and set the color yourself.

The deleted icons are:

- SmartpriceColorFill18Icon
- SmartpriceColorFill24Icon
- SmartpriceColorFill30Icon
- SmartpriceColorOutline18Icon
- SmartpriceColorOutline24Icon
- SmartpriceColorOutline30Icon
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
- GreenJourneyBlack18Icon -> GreenJourneyOutline18Icon
- GreenJourneyBlack24Icon -> GreenJourneyOutline24Icon
- GreenJourneyBlack30Icon -> GreenJourneyOutline30Icon

If you want the Green journey icon to stay green, use the color token "greenHaze".
If you want the Smartprice icon to stay blue, use the color token "ocean"
