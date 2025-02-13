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

export const paginationAnatomy = createAnatomy("pagination").parts(
  "listItem",
  "link",
  "activeButton",
  "disabled",
  "icon",
  "list",
);
export const linjetagAnatomy = createAnatomy("linjetag").parts(
  "iconContainer",
  "icon",
  "root",
  "title",
  "desc",
);

export const infoTagAnatomy = createAnatomy("info-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description",
  "walk",
);

export const travelTagAnatomy = createAnatomy("travel-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description",
  "deviationIcon",
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
export const stepperAnatomy = createAnatomy("stepper").parts(
  "root",
  "container",
  "innerContainer",
  "title",
  "stepCounter",
  "stepContainer",
  "stepButton",
  "stepNumber",
  "stepTitle",
  "closeButton",
  "backButton",
);

export const radioCardAnatomy = createAnatomy("radio-card").parts(
  "root",
  "item",
  "label",
  "itemText",
  "itemDescription",
  "itemContent",
);
