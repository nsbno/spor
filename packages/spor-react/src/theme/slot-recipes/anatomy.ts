import { createAnatomy } from "@ark-ui/react/anatomy";

export const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "label",
  "requiredIndicator",
  "helperText",
  "errorText",
);

export const linjetagAnatomy = createAnatomy("linjetag").parts(
  "iconContainer",
  "icon",
  "root",
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
