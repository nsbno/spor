# Button (React)

Buttons are action triggers, and the Spor Design System comes with a lot of them!

## Installation

```bash
$ npm install @vygruppen/spor-button-react
```

## Usage

```tsx
import { Button, IconButton, ButtonGroup } from "@vygruppen/spor-button-react";
```

### `<Button />`

Buttons comes with lots of options that you might want to specify. Most of them are lifted directly from [Chakra UI's implementation](https://chakra-ui.com/docs/form/button).

#### `variant`

There are several button variants. You can specify which one you want with the `variant` prop. The available variants are:

- `control`: This button is used for ticket controls only.
- `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
- `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.
- `tertiary`: Used for non-essential actions, as well as in combination with the primary button.
- `additional`: Used for additional choices, like a less important tertiary action.
- `ghost`: Used inside other interactive elements, like date pickers and input fields.

#### `size`

There are also different sizes. You can specify which one you want with the `size` prop. The available sizes are "lg", "md", "sm" and "xs".

### `<IconButton />`

Icon buttons are buttons with only an icon in them.

Since they don't have any text, you need to provide screen reader users with an `aria-label`.

```tsx
<IconButton aria-label="Save" icon={<SaveIcon />} />
```

You can specify the same sizes and variants as regular buttons.

### `<ButtonGroup />`

If you have several buttons next to each other, you might want to use a `ButtonGroup` to ensure you have the same spacing between buttons.

You can also specify what variants and sizes all buttons inside of a given button group should have.

```tsx
<ButtonGroup variant="secondary" size="md">
  <Button>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>
```

## Development

Please refer to the root readme for development notes.
