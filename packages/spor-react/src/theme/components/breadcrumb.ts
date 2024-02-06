import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-util";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleLink = defineStyle((props) => ({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  color: "inherit",
  textDecoration: "none",
  textStyle: "xs",
  paddingX: 0.5,
  borderRadius: "xs",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      backgroundColor: mode("seaMist", "pine")(props),
    },
    ...focusVisibleStyles(props),
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
