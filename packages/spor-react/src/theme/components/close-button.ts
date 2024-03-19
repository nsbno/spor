import { defineStyleConfig } from "@chakra-ui/react";
import { cssVar, mode } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-utils";

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
      backgroundColor: mode("seaMist", "whiteAlpha.100")(props),
      _disabled: {
        color: "dimGrey",
      },
    },
    _active: {
      backgroundColor: mode("mint", "whiteAlpha.200")(props),
    },
  }),
  sizes: {
    lg: {
      [$size.variable]: "40px",
      fontSize: "16px",
    },
    md: {
      [$size.variable]: "32px",
      fontSize: "12px",
    },
    sm: {
      [$size.variable]: "24px",
      fontSize: "10px",
    },
  },
  defaultProps: {
    size: "md",
  },
});

export default config;
