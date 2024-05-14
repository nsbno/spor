import { defineStyleConfig } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { accentBackground } from "../utils/accent-utils";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    borderRadius: "md",
    cursor: "pointer",
    ...focusVisibleStyles(props),
    _disabled: {
      ...baseBackground("disabled", props),
      ...baseText("disabled", props),
      outline: "none",
      pointerEvents: "none",
    },
  }),
  variants: {
    base: (props) => ({
      ...baseBorder("default", props),
      _hover: {
        ...baseBorder("hover", props),
      },
      _active: {
        ...baseBackground("active", props),
        ...baseBorder("active", props),
      },
    }),
    accent: (props) => ({
      ...accentBackground("default", props),
      boxShadow: "sm",
      _hover: {
        ...accentBackground("hover", props),
        boxShadow: "sm",
      },
      _active: {
        ...accentBackground("active", props),
        boxShadow: "none",
      },
    }),
    floating: (props) => ({
      ...floatingBackground("default", props),
      boxShadow: "sm",
      _hover: {
        ...floatingBackground("hover", props),
        ...floatingBorder("hover", props),
        boxShadow: "md",
      },
      _active: {
        ...floatingBackground("active", props),
        boxShadow: "none",
      },
    }),
  },
});

export default config;
