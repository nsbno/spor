import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { anatomy } from "@chakra-ui/theme-tools";
import { outlineBorder } from "../utils/outline-utils";

const parts = anatomy("radio-card").parts(
  "container",
  "checked",
  "radioInput",
  "focused",
  "focusedChecked",
);
const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props: any) => ({
    container: {
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
      focusedChecked: {
        outline: "4px solid",
        outlineStyle: "double",
        ...outlineBorder("focus", props),
        outlineOffset: "-1px",
      },
      focused: {
        outline: "2px solid",
        ...outlineBorder("focus", props),
        outlineOffset: "1px",
        boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.40)`,
        _hover: {
          ...baseBorder("hover", props),
          boxShadow: "none",
          outlineOffset: "0px",
        },
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
      focusedChecked: {
        outline: "4px solid",
        outlineStyle: "double",
        ...outlineBorder("focus", props),
        outlineOffset: "-1px",
      },
      focused: {
        outline: "2px solid",
        ...outlineBorder("focus", props),
        outlineOffset: "1px",
        boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.10)`,
        _hover: {
          ...floatingBorder("hover", props),
          boxShadow: "md",
          outlineOffset: "0px",
        },
      },
    }),
  },
});

export default config;
