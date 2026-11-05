---
"@vygruppen/spor-react": patch
"@vygruppen/spor-icon-react": patch
---

Fix `createToast({ variant: "critical" })` crashing by requiring `@chakra-ui/react` 3.38 or newer. The `@zag-js/toast` version bundled with Chakra 3.35–3.37 threw on toast types it didn't know, and `critical` is a Spor-only type.
