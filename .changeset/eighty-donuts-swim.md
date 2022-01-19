---
"@vygruppen/spor-input-react": patch
"@vygruppen/spor-theme-react": patch
---

Remove overridden theme values

This is a breaking change, if you used undocumented colors or sizes. If you kept to the specified theme colors, there is nothing to do.

Change the implementation of Input and Textarea styles, and remove variant and sizes props.

This is a breaking change if you used any variants or sizes in your code. Those weren't supported, and would look pretty weird, but if you did, you need to remove any variant and size props on your input fields.
