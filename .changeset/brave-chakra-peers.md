---
"@vygruppen/spor-react": major
---

`@chakra-ui/react` is now a peer dependency (`^3.38.0`), so your app and Spor share one copy. Chakra's provider and theme live in React context, so two copies break theming.

npm and pnpm install peers automatically. On Yarn, or if your app uses a Chakra version below 3.38, install or upgrade it yourself:

```sh
npm install @chakra-ui/react@^3.38.0
```
