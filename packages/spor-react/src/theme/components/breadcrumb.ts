import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { baseBackground, baseBorder } from "../utils/base-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    link: {
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
        ...focusVisibleStyles(props),
      },
    },
    list: {
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
  })),
  variants: {
    base: (props) => ({
      link: {
        "&:not([aria-current=page])": {
          _hover: {
            ...baseBorder("default", props),
          },
          _active: {
            ...baseBackground("active", props),
          },
        },
      },
    }),
    ghost: (props) => ({
      link: {
        "&:not([aria-current=page])": {
          _hover: {
            ...ghostBackground("hover", props),
          },
          _active: {
            ...ghostBackground("active", props),
          },
        },
      },
    }),
  },
  defaultProps: {
    variant: "base",
  },
});
