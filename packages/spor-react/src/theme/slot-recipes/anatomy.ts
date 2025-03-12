import { createAnatomy } from "@ark-ui/react/anatomy";

export const accordionAnatomy = createAnatomy("accordion").parts(
  "root",
  "itemTrigger",
  "item",
  "itemBody",
  "itemContent",
  "itemIndicator",
);

export const alertAnatomy = createAnatomy("alert").parts(
  "root",
  "indicator",
  "title",
  "closeButton",
  "content",
);

export const alertExpandableAnatomy = createAnatomy("alert-expandable").parts(
  "root",
  "itemTrigger",
  "itemContent",
  "indicator",
  "title",
  "itemIndicator",
);

export const alertServiceAnatomy = createAnatomy("service-alert").parts(
  "root",
  "itemTrigger",
  "itemTriggerTitle",
  "notificationText",
  "itemContent",
  "itemBody",
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

export const dialogAnatomy = createAnatomy("dialog").parts(
  "header",
  "body",
  "footer",
  "backdrop",
  "positioner",
  "content",
  "title",
  "description",
  "closeTrigger",
);

export const paginationAnatomy = createAnatomy("pagination").parts(
  "list",
  "item",
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

export const radioAnatomy = createAnatomy("radio").parts(
  "root",
  "item",
  "itemControl",
  "itemText",
  "label",
);

export const listBoxAnatomy = createAnatomy("listbox").parts(
  "root",
  "item",
  "label",
  "description",
);

export const NativeSelectAnatomy = createAnatomy("native-select").parts(
  "root",
  "field",
  "icon",
);

export const tabsAnatomy = createAnatomy("tabs").parts(
  "root",
  "list",
  "trigger",
  "content",
  "indicator",
);

export const switchAnatomy = createAnatomy("switch").parts(
  "root",
  "thumb",
  "control",
  "label",
);

export const selectAnatomy = createAnatomy("select").parts(
  "root",
  "trigger",
  "indicatorGroup",
  "indicator",
  "selectContent",
  "item",
  "control",
  "itemText",
  "itemDescription",
  "itemGroup",
  "itemGroupLabel",
  "label",
  "valueText",
);
export const cardSelectAnatomy = createAnatomy("card-select").parts(
  "trigger",
  "card",
);
export const choiceChipAnatomy = createAnatomy("choice-chip").parts("root");

export const toastAnatomy = createAnatomy("toast").parts(
  "root",
  "title",
  "description",
  "indicator",
  "closeTrigger",
  "actionTrigger",
);
