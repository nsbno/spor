import { defineStyleConfig } from "@chakra-ui/react";
import { cssVar, mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const $size = cssVar("close-button-size");

const config = defineStyleConfig({
  baseStyle: (props) => ({
    w: [$size.reference],
    h: [$size.reference],
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "xs",
    backgroundColor: "transparent",
    color: mode("darkGrey", "white")(props),
    fontWeight: "normal",
    ...focusVisible({
      focus: {
        outline: "transparent solid 2px",
        boxShadow: getBoxShadowString({ borderColor: mode("greenHaze", "azure")(props) }),
        outlineOffset: "2px",
      },
      notFocus: {
        boxShadow: "none",
      },
    }),
    _hover: {
      backgroundColor: mode("seaMist", "pine")(props),
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
