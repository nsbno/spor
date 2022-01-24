# Typography (React)

The typography package consists of all the components you need to add text to your app.

## Installation

```bash
$ npm install @vygruppen/spor-typography-react
```

## Usage

```tsx
import { Text, Paragraph, Heading } from "@vygruppen/spor-typography-react";
```

### `Text` aka `Paragraph`

A simple paragraph of text.

This component has an alias - `Text` and `Paragraph` is the exact same component. `Text` reads nicer, but `Text` is also a `window` global, which will make it troublesome to import automatically.

You can specify all the styles you want as props, including `fontSize` and `color`.

```tsx
<Text>Choo choo, goes the train</Text>
<Paragraph fontSize="sm">In Norwegian, trains go "tøff tøff tøff"</Paragraph>
```

### `Heading`

A heading, that defaults to a H2 with `fontSize="xl"`.

You can override the heading level with the `as` prop:

```tsx
<Heading as="h1" fontSize="2xl">
  Huge news!
</Heading>
```

## Development

Please refer to the root readme for development notes.
