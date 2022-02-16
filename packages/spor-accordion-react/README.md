# Accordion (React)

Accordions, or expandables, are used to show and hide information one step at a time.

## Installation

```bash
$ npm install @vygruppen/spor-accordion-react
```

## Usage

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Expandable,
  ExpandableItem,
} from "@vygruppen/spor-accordion-react";
```

You have a few different options when it comes to creating expandable panels.

If you only have a single expandable item, you can use the `Expandable` component:

```tsx
<Expandable variant="list" size="sm" title="A title">
  Hello expanded content
</Expandable>
```

If you have several related expandable items, you need to use an `Accordion` component, together with the `ExpandableItem` component:

```tsx
<Accordion variant="outline" size="md">
  <ExpandableItem title="A longer title!">
    Hello expanded content
  </ExpandableItem>
  <ExpandableItem title="Another title">
    You're back again, I see
  </ExpandableItem>
</Accordion>
```

Sometimes, however, you need more control. In that case, you can put together your own expandable items with its building blocks - `AccordionItem`, `AccordionButton`, `AccordionIcon` and `AccordionPanel`:

```tsx
<Accordion variant="list" size="sm">
  <AccordionItem>
    <h2>
      <AccordionButton>
        Click to read more
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>Here is more info</AccordionPanel>
  </AccordionItem>
</Accordion>
```

There are three different variants available - `list`, `outline` and `card`. These are specified at the `Accordion` or `Expandable` components.

There are also three different sizes available - `sm`, `md` and `lg`.

## Development

Please refer to the root readme for development notes.
