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

export const drawerAnatomy = createAnatomy("drawer").parts(
  "header",
  "body",
  "backdrop",
  "positioner",
  "content",
  "footer",
  "title",
  "description",
  "closeTrigger",
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
