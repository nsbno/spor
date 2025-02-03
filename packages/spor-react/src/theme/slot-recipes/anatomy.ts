import { createAnatomy } from "@ark-ui/react/anatomy";

export const accordionAnatomy = createAnatomy("accordion").parts(
  "root",
  "itemTrigger",
  "item",
  "itemBody",
  "itemContent",
  "itemIndicator",
);

export const listAnatomy = createAnatomy("list").parts(
  "root",
  "item",
  "icon",
  "indicator",
);

export const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "label",
  "requiredIndicator",
  "helperText",
  "errorText",
);
