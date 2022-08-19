---
"@vygruppen/spor-design-tokens": minor
"@vygruppen/spor-theme-react": minor
"@vygruppen/spor-theme-react-native": minor
---

Change the spacing tokens

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
