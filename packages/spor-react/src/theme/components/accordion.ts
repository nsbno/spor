import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: {
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
      display: "flex",
      justifyContent: "space-between",
      color: "darkGrey",
      textAlign: "left",
      fontFamily: "body",
      fontWeight: "bold",
      ...focusVisible({
        notFocus: {
          boxShadow: getBoxShadowString({
            borderColor: "osloGrey",
          }),
        },
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
        },
      }),
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
  },
  variants: {
    list: {
      button: {
        boxShadow: "none",
        _hover: {
          backgroundColor: "seaMist",
        },
        _active: {
          backgroundColor: "mint",
        },
      },
    },
    outline: {
      container: {
        boxShadow: getBoxShadowString({
          borderColor: colors.blackAlpha["400"],
        }),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "darkGrey",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "mint",
          boxShadow: getBoxShadowString({
            borderColor: "darkGrey",
          }),
        },
      },
    },
    card: {
      container: {
        boxShadow: getBoxShadowString({
          baseShadow: "sm",
          borderColor: "silver",
        }),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          backgroundColor: "seaMist",
        },
        _active: {
          backgroundColor: "mint",
        },
      },
    },
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
