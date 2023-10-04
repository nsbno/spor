import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { mode } from "@chakra-ui/theme-tools";
import { focusVisible } from "../utils/focus-utils";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleLink = defineStyle((props) => ({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: "none",
  textStyle: "xs",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    paddingX: 0.5,
    borderRadius: "xs",
    _hover: {
      backgroundColor: mode("seaMist", "pine")(props),
    },
     ...focusVisible({
     focus: {
       boxShadow: getBoxShadowString({
         borderColor: mode("greenHaze", "azure")(props),
         borderWidth: 2,
       }),
     },
     notFocus: {
       notFocus: { boxShadow: "none" },
     }
   }),
    _active: {
      backgroundColor: mode("mint", "whiteAlpha.200")(props),
    },
  },
}));

const baseStyle = definePartsStyle((props) => ({
  link: baseStyleLink(props),
  list: {
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
}));

export default defineMultiStyleConfig({
  baseStyle,
});
