import { defineStyleConfig } from "@chakra-ui/react";
import { cssVar, mode } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";

const $size = cssVar("close-button-size");

const config = defineStyleConfig({
  baseStyle: (props) => ({
    w: [$size.reference],
    h: [$size.reference],
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "md",
    backgroundColor: "transparent",
    color: mode("darkGrey", "white")(props),
    fontWeight: "normal",
    ...focusVisibleStyles(props),
    _hover: {
      ...ghostBackground("hover", props),
      _disabled: {
        color: "dimGrey",
      },
    },
    _active: {
      ...ghostBackground("active", props),
    },
  }),
  sizes: {
    lg: {
      [$size.variable]: "40px",
      fontSize: "xs",
    },
    md: {
      [$size.variable]: "32px",
      fontSize: "0.75rem",
    },
    sm: {
      [$size.variable]: "24px",
      fontSize: "0.625rem",
    },
  },
  defaultProps: {
    size: "md",
  },
});

export default config;
