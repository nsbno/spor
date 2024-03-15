import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground } from "../utils/background-utils";
import { baseBorder } from "../utils/border-utils";
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
      ...baseBackground("hover", props),
    },
    _active: {
      ...baseBackground("active", props),
    },
    ...focusVisibleStyles(props),
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
            backgroundColor: mode(
              "ghost.surface.hover.light",
              "ghost.surface.hover.dark",
            )(props),
          },
          _active: {
            backgroundColor: mode(
              "ghost.surface.active.light",
              "ghost.surface.active.dark",
            )(props),
          },
        },
      },
    }),
  },
  defaultProps: {
    variant: "base",
  },
});
