import { createAnatomy } from "@ark-ui/react/anatomy";

export const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "label",
  "requiredIndicator",
  "helperText",
  "errorText",
);

export const paginationAnatomy = createAnatomy("pagination").parts(
    "listItem",
    "link",
    "activeButton",
    "disabled",
    "icon",
);