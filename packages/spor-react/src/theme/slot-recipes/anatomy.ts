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

export const tableAnatomy = createAnatomy("table").parts(
  "root",
  "body",
  "row",
  "cell",
  "columnHeader",
  "caption",
  "footer",
  "header",
);

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

export const radioCardAnatomy = createAnatomy("radio-card").parts(
  "root",
  "item",
  "label",
  "itemText",
  "itemDescription",
  "itemContent",
);

export const radioAnatomy = createAnatomy("radio").parts(
  "root",
  "item",
  "itemControl",
  "itemText",
  "label",
);
