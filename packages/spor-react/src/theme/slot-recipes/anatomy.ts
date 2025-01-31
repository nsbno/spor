import { createAnatomy } from "@ark-ui/react/anatomy";

export const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "label",
  "requiredIndicator",
  "helperText",
  "errorText",
);

export const dialogAnatomy = createAnatomy("dialog").parts(
  "header",
  "body",
  "footer",
  "backdrop",
  "positioner",
  "content",
  "title",
  "description",
);
