# Table (React)

This package includes all the components you need to create nice-looking tables.

## Installation

```bash
$ npm install @vygruppen/spor-table-react
```

## Usage

```tsx
import {
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@vygruppen/spor-table-react";
```

These components are used the same way as in Chakra UI. Please refer to [their documentation](https://chakra-ui.com/docs/data-display/table).

The `Table` component has support for two different variants - `simple` and `outline`. The `simple` variant has basic lines between rows, while the `outline` variant has borders for each cell, plus a hover effect per row.

You can also specify a `grey` or `green` `colorScheme` prop. Use `green` if you want to place the table on a light green background.

Finally, there are three different `size` props you can specify - `sm`, `md` and `lg`.

## Development

Please refer to the root readme for development notes.
