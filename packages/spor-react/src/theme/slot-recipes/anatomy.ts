import { createAnatomy } from "@ark-ui/react/anatomy";

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
