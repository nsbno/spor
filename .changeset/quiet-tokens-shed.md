---
"@vygruppen/spor-design-tokens": minor
---

Remove Style Dictionary metadata from the transition and shadow tokens.

`time.transition.*` and `depth.shadow.*` in the JS, ESM and React Native exports no longer include `keepDetails`, `filePath`, `isSource`, `original`, `name`, `attributes` or `path`. Their values, and fields like `duration`, `timing`, `elevation` and `offset`, are unchanged. If you read any of the removed fields, use the token JSON in `tokens/` instead.

The type declarations are now generated without `json-to-ts`. They describe the same shape as the runtime export, and the internal `RootObject` interface names are gone.
