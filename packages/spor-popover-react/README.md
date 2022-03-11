# Popover (React)

Popovers are used to display information about an element.

## Installation

```bash
$ npm install @vygruppen/spor-popover-react
```

## Usage

```tsx
import { SimplePopover } from "@vygruppen/spor-popover-react";
```

You can add a popover to any element by wrapping that element in a `Popover` component.

```tsx
<SimplePopover triggerElement={<Button>Click me to learn more</Button>}>
  <Text>This is a popover text that will show up</Text>
</SimplePopover>
```

There are other components too, like `WizardPopover`, and lots of other components.

## Development

Please refer to the root readme for development notes.
