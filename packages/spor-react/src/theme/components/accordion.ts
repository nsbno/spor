import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import {
  baseBackground,
  floatingBackground,
  ghostBackground,
} from "../utils/background-utils";
import { baseBorder, floatingBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-util";
import { baseText } from "../utils/text-utils";

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
      fontFamily: "body",
      fontWeight: "bold",
      outlineOffset: "-2px",
      ...focusVisibleStyles(props),
      _disabled: {
        pointerEvents: "none",
        opacity: 0.4,
      },
    },
    panel: {
      paddingY: 2,
      borderBottomRadius: "sm",
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
  sizes: {
    sm: {
      button: {
        fontSize: ["mobile.xs", null, "desktop.xs"],
        paddingX: 2,
        paddingY: 1,
        minHeight: 6,
      },
      panel: {
        fontSize: ["mobile.xs", null, "desktop.xs"],
        paddingX: 2,
      },
    },
    md: {
      button: {
        fontSize: ["mobile.sm", null, "desktop.sm"],
        paddingX: 3,
        paddingY: 1,
        minHeight: 7,
      },
      panel: {
        fontSize: ["mobile.sm", null, "desktop.sm"],
        paddingX: 3,
      },
    },
    lg: {
      button: {
        fontSize: ["mobile.sm", null, "desktop.sm"],
        paddingX: 3,
        paddingY: 2,
        minHeight: 8,
      },
      panel: {
        fontSize: ["mobile.sm", null, "desktop.sm"],
        paddingX: 3,
      },
    },
  },
  defaultProps: {
    variant: "ghost",
    size: "sm",
  },
});

export default config;
