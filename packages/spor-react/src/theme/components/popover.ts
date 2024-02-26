import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { cssVar, mode } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-util";

const $popperBg = cssVar("popper-bg");
const $arrowBg = cssVar("popper-arrow-bg");
const $arrowShadowColor = cssVar("popper-arrow-shadow-color");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    popper: {
      zIndex: "popover",
    },
    content: {
      [$popperBg.variable]: mode("colors.darkTeal", "colors.pine")(props),
      backgroundColor: $popperBg.reference,
      [$arrowBg.variable]: $popperBg.reference,
      [$arrowShadowColor.variable]: "blackAlpha.300",
      color: "white",
      borderRadius: "sm",
      padding: 1.5,
      zIndex: "inherit",
      maxWidth: "20em",
      _focus: {
        outline: 0,
        boxShadow: "outline",
      },
    },
    arrow: {
      backgroundColor: "transparent",
      boxShadow: "none",
      clipPath:
        "path('M 0 0 Q 2.4 6 0 12 Q 6 9.6 12 12 Q 9.6 6 12 0 Q 6 2.4 0 0 z')",
    },
    closeButton: {
      position: "absolute",
      color: "white",
      ...focusVisibleStyles(props),
      _hover: {
        backgroundColor: "whiteAlpha.100",
      },
      _active: {
        backgroundColor: "whiteAlpha.200",
      },
      borderRadius: "sm",
      top: 2,
      right: 1,
    },
  }),
  sizes: {
    sm: {
      content: {
        paddingX: 1.5,
        paddingY: 1,
      },
    },
    lg: {
      content: {
        paddingX: 3,
        paddingY: 2,
      },
    },
  },
});

export default config;
