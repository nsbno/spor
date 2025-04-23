import { defineGlobalStyles } from "@chakra-ui/react";

export const globalCss = defineGlobalStyles({
  "html, body": {
    color: "text",
  },
  svg: {
    display: "initial",
  },

  ":focus-visible": {
    outlineWidth: "2px !important",
    outlineColor: "outline.focus !important",
    outlineStyle: "solid !important",
    outlineOffset: "1px !important",
  },
});
