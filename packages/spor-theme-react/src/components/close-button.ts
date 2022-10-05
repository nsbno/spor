import { defineStyleConfig } from "@chakra-ui/react";
import { cssVar } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const $size = cssVar("close-button-size");

const config = defineStyleConfig({
  baseStyle: {
    w: [$size.reference],
    h: [$size.reference],
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "xs",
    backgroundColor: "transparent",
    color: "darkGrey",
    fontWeight: "normal",
    ...focusVisible({
      focus: {
        outline: "none",
        boxShadow: getBoxShadowString({ borderColor: "greenHaze" }),
      },
      notFocus: {
        boxShadow: "none",
      },
    }),
    _hover: {
      backgroundColor: "seaMist",
      _disabled: {
        color: "dimGrey",
      },
    },
    _active: {
      backgroundColor: "mint",
    },
  },
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
