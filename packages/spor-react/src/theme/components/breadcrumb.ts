import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-util";

const config = defineStyleConfig({
  baseStyle: (props) => ({
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
  }),
  variants: {
    base: () => ({}),
    ghost: () => ({
      _hover: {
        backgroundColor: "red",
      },
    }),
  },
});

const baseStyle = {
  link: {
    ...(config.baseStyle ? config.baseStyle({}) : {}),
  },
  list: {
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
};

export default {
  parts: parts.keys,
  baseStyle,
  variants: config.variants,
};