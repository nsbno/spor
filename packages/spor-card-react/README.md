# Card (React)

Cards are used to encapsulate some information, or as interactive elements in our UI.

## Installation

```bash
$ npm install @vygruppen/spor-card-react
```

## Usage

```tsx
import { Card } from "@vygruppen/spor-card-react";
```

Cards come in three different variants - `filled`, `outlined` and `elevated`.
If you specify the `filled` variant, you need to specify a `colorScheme` as well. The available color schemes are `blue`, `green` and `grey`.

```tsx
<Card variant="elevated">I'm an elevated card</Card>
<Card variant="outlined">I'm an outlined card</Card>
<Card variant="filled" colorScheme="blue">I'm a filled card</Card>
```

You can also pass any style props you want, like padding or borderRadius.

## Development

Please refer to the root readme for development notes.
