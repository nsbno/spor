---
"@vygruppen/spor-react": major
---

Tooltip: Change how the API works, so that it's more aligned with Nudges.

To migrate, you need to put the content of the tooltip in the `content` prop. The `triggerElement` prop is now renamed to `children`, so you can wrap whatever should trigger your tooltip in the `Tooltip` component:

```tsx
<Tooltip content="This is my tooltip">
  <IconButton
    icon={<QuestionMark24FillIcon />}
    variant="secondary"
    aria-label="What's this?"
  />
</Tooltip>
```
