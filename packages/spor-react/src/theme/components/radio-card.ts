import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { anatomy, mode } from "@chakra-ui/theme-tools";
import { outlineBorder } from "../utils/outline-utils";

const parts = anatomy("radio-card").parts(
  "container",
  "checked",
  "radioInput",
  "focused",
);
const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props: any) => ({
    container: {
      border: "none",
      overflow: "hidden",
      fontSize: "inherit",
      display: "block",
      cursor: "pointer",
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",
      _disabled: {
        pointerEvents: "none",
        ...baseBackground("disabled", props),
        ...baseBorder("disabled", props),
        ...baseText("disabled", props),
      },
    },
    checked: {
      outline: "2px solid",
      ...outlineBorder("focus", props),
      ...floatingBackground("active", props),
    },
    radioInput: {
      appearance: "none",
      position: "absolute",
      opacity: 0,
      zIndex: -1,
    },
  }),
  variants: {
    base: (props) => ({
      container: {
        ...baseText("default", props),
        ...baseBackground("default", props),
        ...baseBorder("default", props),
        _hover: {
          ...baseBackground("hover", props),
          ...baseBorder("hover", props),
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("active", props),
        },
      },
      checked: {
        _hover: {
          ...baseBorder("hover", props),
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("active", props),
        },
      },
      focused: {
        outline: "4px solid",
        outlineStyle: "double",
        ...outlineBorder("focus", props),
        outlineOffset: "-1px",
      },
    }),
    floating: (props) => ({
      container: {
        ...floatingBackground("default", props),
        ...floatingBorder("default", props),
        boxShadow: "sm",
        _hover: {
          ...floatingBackground("hover", props),
          ...floatingBorder("hover", props),
          boxShadow: "md",
        },
        _active: {
          ...floatingBackground("active", props),
          ...floatingBorder("active", props),
        },
      },
      checked: {
        _hover: {
          ...floatingBorder("hover", props),
          boxShadow: "md",
        },
        _active: {
          ...floatingBackground("active", props),
          ...floatingBorder("active", props),
        },
      },
      focused: {
        outline: "4px solid",
        outlineStyle: "double",
        ...outlineBorder("focus", props),
        outlineOffset: "-1px",
      },
    }),
  },
});

export default config;
