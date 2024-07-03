import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      borderRadius: "sm",
    },
    button: {
      transitionProperty:
        "background-color, color, border-radius, box-shadow, opacity",
      transitionDuration: "fast",
      borderRadius: "sm",
      display: "flex",
      justifyContent: "space-between",
      ...baseText("default", props),
      textAlign: "left",
      fontSize: ["mobile.sm", null, "desktop.sm"],
      fontFamily: "body",
      fontWeight: "bold",
      outlineOffset: "-2px",
      paddingX: [2, null, 3],
      paddingY: [1, null, 1.5],
      minHeight: [6, null, 7],
      ...focusVisibleStyles(props),
      _disabled: {
        pointerEvents: "none",
        opacity: 0.4,
      },
    },
    panel: {
      paddingY: 2,
      paddingX: [2, null, 3],
      borderBottomRadius: "sm",
      fontSize: ["mobile.sm", null, "desktop.sm"],
    },
    icon: {
      fontSize: "1.25em",
    },
  }),
  variants: {
    ghost: (props) => ({
      button: {
        _hover: {
          ...ghostBackground("hover", props),
        },
        _active: {
          ...ghostBackground("active", props),
        },
      },
    }),
    base: (props) => ({
      container: {
        ...baseBorder("default", props),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          ...baseBorder("hover", props),
          outlineOffset: 0,
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("default", props),
        },
      },
    }),
    floating: (props) => ({
      container: {
        ...floatingBackground("default", props),
        ...floatingBorder("default", props),
        boxShadow: "sm",
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          ...floatingBackground("hover", props),
          ...floatingBorder("hover", props),
          outlineOffset: 1,
        },
        _active: {
          ...ghostBackground("active", props),
          ...floatingBorder("default", props),
        },
      },
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default config;
