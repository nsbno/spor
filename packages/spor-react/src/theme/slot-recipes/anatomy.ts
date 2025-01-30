import { createAnatomy } from "@ark-ui/react/anatomy";

export const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "label",
  "requiredIndicator",
  "helperText",
  "errorText",
);

export const checkboxAnatomy = createAnatomy("checkbox").parts(
  "root",
  "control",
  "label",
  "description",
  "addon",
  "indicator",
  "content",
);
