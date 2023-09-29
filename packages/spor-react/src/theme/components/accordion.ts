import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { colors, shadows } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";
import { mode } from "@chakra-ui/theme-tools";

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
      display: "flex",
      justifyContent: "space-between",
      color: mode("darkGrey", "white")(props),
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
            borderColor: mode("greenHaze", "azure")(props),
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
  }),
  variants: {
    list: (props) => ({
      button: {
        boxShadow: "none",
        _hover: {
          backgroundColor: mode("seaMist", "pine")(props),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.200")(props),
        },
      },
    }),
    outline: (props) => ({
      container: {
        boxShadow: getBoxShadowString({
          borderColor: mode(
            colors.blackAlpha["400"],
            colors.whiteAlpha["400"],
          )(props),
        }),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.100")(props),
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", colors.whiteAlpha[400])(props),
          }),
        },
      },
    }),
    card: (props) => ({
      container: {
        backgroundColor: mode("white", "whiteAlpha.100")(props),
        boxShadow: getBoxShadowString({
          baseShadow: mode<keyof typeof shadows>("sm", "none")(props),
          borderColor: mode("silver", "whiteAlpha.400")(props),
        }),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          backgroundColor: mode("seaMist", "whiteAlpha.200")(props),
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
            borderWidth: 1,
          }),
        },
        _active: {
          backgroundColor: mode("mint", "inherit")(props),
          boxShadow: getBoxShadowString({
            baseShadow: "none",
            borderWidth: 1,
            borderColor: mode("darkGrey", "whiteAlpha.400")(props),
          }),
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
