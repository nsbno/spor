---
"@vygruppen/spor-react": minor
---

Make `@emotion/react` a peer dependency instead of a regular dependency.

Previously `spor-react` could load its own copy of `@emotion/react`, separate from the app's copy. When that happened, `SporProvider` and Chakra used a different Emotion context than the app's `CacheProvider`, so SSR style extraction and custom Emotion caches silently missed spor's styles.

If your app does not already depend on `@emotion/react`, add it:

```sh
npm install @emotion/react
```

npm 7+ and pnpm 8+ install missing peer dependencies automatically.
