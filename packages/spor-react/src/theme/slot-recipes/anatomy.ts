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

export const checkboxAnatomy = createAnatomy("checkbox").parts(
  "root",
  "control",
  "label",
  "description",
  "addon",
  "indicator",
  "content",
);

export const breadcrumbAnatomy = createAnatomy("breadcrumb").parts(
"link", 
"currentLink",
"list",
);

export const radioCardAnatomy = createAnatomy("radio-card").parts(
  "root",
  "item",
  "label",
  "itemText",
  "itemDescription",
  "itemContent",
);
