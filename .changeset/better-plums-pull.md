---
"spor-react": patch
---

Render Popover in a React portal when `isNonModal` is true to ensure it does not take up semantic space in the DOM. This prevents the Popover from interfering with flex layouts and attached input styling.
