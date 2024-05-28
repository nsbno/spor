import {
  createMultiStyleConfigHelpers,
  defineStyleConfig,
} from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { anatomy } from "@chakra-ui/theme-tools";

const parts = anatomy("radio-card").parts("container", "checked", "radioInput");
const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props: any) => ({
    container: {
      appearance: "none",
      border: "none",
      overflow: "hidden",
      fontSize: "inherit",
      display: "block",
      cursor: "pointer",
      borderRadius: "sm",
      ...focusVisibleStyles(props),
      _disabled: {
        pointerEvents: "none",
        ...baseBackground("disabled", props),
        ...baseBorder("disabled", props),
        ...baseText("disabled", props),
      },
    },
    checked: {
      outline: "1px solid",
      outlineColor: "greenHaze",
      ...floatingBackground("active", props),
      _hover: {
        ...floatingBackground("active", props),
      },
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
        },
      },
    }),
    floating: (props) => ({
      container: {
        ...baseText("default", props),
        ...baseBackground("default", props),
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
      },
      checked: {
        _hover: {
          outline: "1px solid",
          outlineColor: "silver",
        },
      },
    }),
  },
});

export default config;
