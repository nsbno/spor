import { defineStyleConfig } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: (props: any) => ({
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    borderRadius: "sm",
    ...focusVisibleStyles(props),
    _checked: {
      outline: "1px solid",
      outlineColor: "greenHaze",
      ...floatingBackground("active", props),
      _hover: {
        ...floatingBackground("active", props),
      },
    },
    _disabled: {
      pointerEvents: "none",
      ...baseBackground("disabled", props),
      ...baseBorder("disabled", props),
      ...baseText("disabled", props),
    },
  }),
  variants: {
    base: (props) => ({
      ...baseBackground("default", props),
      ...baseBorder("default", props),
      _hover: {
        ...baseBackground("hover", props),
        ...baseBorder("hover", props),
      },
      _active: {
        ...baseBackground("active", props),
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
        ...floatingBorder("active", props),
      },
      _checked: {
        _hover: {
          outline: "1px solid",
          outlineColor: "silver",
        },
      },
    }),
  },
});

export default config;
