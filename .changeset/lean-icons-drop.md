---
"@vygruppen/spor-icon-react-native": patch
"@vygruppen/spor-icon-react": patch
---

Remove peer dependencies the icons don't use, and widen the `react-native-svg` peer range.

`@vygruppen/spor-icon-react-native` no longer lists `react-native` or `@shopify/restyle` as peers. The icons only import `react`, `react-native-svg` and your app's `app/spor` module. `react-native-svg` still requires `react-native` itself.

The `react-native-svg` peer range now covers versions 12.3 through 15, so apps on newer versions no longer get a peer warning.

`@vygruppen/spor-icon-react` no longer lists `react-dom` as a peer. It only imports `react` and `@chakra-ui/react`.
