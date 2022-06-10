---
"@vygruppen/spor-input-react": minor
---

Breaking change: The `ChoiceChip`'s `icon` prop now requires an object that requires both a default icon and a checked icon.

Previously, the code would be:

<ChoiceChip icon={<SomeIcon />} />

Now, the code would be:

<ChoiceChip
  icon={{
    default: <SomeOutlineIcon />,
    checked: <SomeFillIcon />
  }}
/>
