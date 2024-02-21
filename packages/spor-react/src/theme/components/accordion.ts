import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { focusVisibleStyles } from "../utils/focus-util";
import { baseText } from "../utils/text-utils";
import {
  baseBackground,
  floatingBackground,
  ghostBackground,
} from "../utils/background-utils";
import { baseBorder, floatingBorder } from "../utils/border-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      border: "none",
      borderRadius: "sm",
    },
    button: {
      transitionProperty:
        "background-color, color, border-radius, box-shadow, opacity",
      transitionDuration: "normal",
      border: "none",
      borderRadius: "sm",
      borderColor: "osloGrey",
      display: "flex",
      justifyContent: "space-between",
      ...baseText("default", props),
      textAlign: "left",
      fontFamily: "body",
      fontWeight: "bold",
      ...focusVisibleStyles(props),
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
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
    list: (props) => ({
      button: {
        boxShadow: "none",
        _hover: {
          ...ghostBackground("hover", props),
        },
        _active: {
          ...ghostBackground("active", props),
        },
      },
    }),
    outline: (props) => ({
      container: {
        ...baseBorder("default", props),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          ...baseBorder("hover", props),
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("default", props),
        },
      },
    }),
    card: (props) => ({
      container: {
        ...floatingBackground("default", props),
        ...floatingBorder("default", props),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          ...ghostBackground("hover", props),
          ...floatingBorder("default", props),
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
    variant: "list",
    size: "sm",
  },
});

export default config;
