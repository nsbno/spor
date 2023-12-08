import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: {
    border: 0,
    borderRadius: "xl",
    fontWeight: "bold",
    transitionProperty: "common",
    transitionDuration: "normal",
    textWrap: "wrap",
    paddingX: 3,
    paddingY: 1,
    _focus: {
      boxShadow: 0,
      outline: 0,
    },
    _disabled: {
      cursor: "not-allowed",
      boxShadow: "none",
      backgroundColor: "silver",
      color: "dimGrey",
    },
    _hover: {
      _disabled: {
        background: "silver",
      },
    },
  },
  variants: {
    primary: (props) => ({
      // FIXME: Update to use a global defined background color for darkMode whenever it is available.
      // hardcoded background color as alpha-"hack" below is not feasible for dark mode with solid background color
      backgroundColor: mode("pine", "coralGreen")(props),
      color: mode("white", "darkTeal")(props),
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 2px ${mode(
            colors.greenHaze,
            colors.azure,
          )(props)}, inset 0 0 0 4px ${mode(
            colors.white,
            colors.darkGrey,
          )(props)}`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: mode("darkTeal", "blueGreen")(props),
      },
      _active: {
        backgroundColor: mode("greenHaze", "seaMist")(props),
      },
    }),
    secondary: (props) => ({
      // FIXME: Update to use global defined background color for darkMode whenever it is available instead of alpha
      backgroundColor: mode("seaMist", "primaryGreen")(props),
      color: mode("darkTeal", "white")(props),
      // order is important here for now while we do not have global defined background color for darkMode
      _hover: {
        backgroundColor: mode("coralGreen", "greenHaze")(props),
      },
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 2px ${mode(
            colors.greenHaze,
            colors.primaryGreen,
          )(props)}, inset 0 0 0 4px ${mode(
            colors.white,
            colors.darkTeal,
          )(props)}`,
          _hover: {
            boxShadow: `inset 0 0 0 2px ${mode(
              colors.greenHaze,
              colors.azure,
            )(props)}, inset 0 0 0 4px ${mode(
              colors.white,
              colors.blackAlpha[500],
            )(props)}`,
          },
        },
        notFocus: {
          boxShadow: "none",
        },
      }),
      _active: {
        backgroundColor: mode("mint", "darkTeal")(props),
        boxShadow: `inset 0 0 0 2px ${mode(
          colors.greenHaze,
          colors.azure,
        )(props)}, inset 0 0 0 4px ${mode(
          colors.white,
          colors.blackAlpha[600],
        )(props)}`,
        _hover: {
          boxShadow: `inset 0 0 0 2px ${mode(
            colors.greenHaze,
            colors.azure,
          )(props)}, inset 0 0 0 4px ${mode(
            colors.white,
            colors.blackAlpha[600],
          )(props)}`,
        },
      },
    }),
    additional: (props) => ({
      backgroundColor: "transparent",
      color: mode("darkGrey", "white")(props),
      fontWeight: "normal",
      boxShadow: `inset 0 0 0 1px ${mode(
        colors.blackAlpha[400],
        colors.whiteAlpha[400],
      )(props)}`,
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            borderColor: "azure",
          }),
        },
        notFocus: {
          boxShadow: `inset 0 0 0 1px ${mode(
            colors.blackAlpha[400],
            colors.whiteAlpha[400],
          )(props)}`,
        },
      }),
      _hover: {
        boxShadow: `inset 0 0 0 2px currentColor`,
      },
      _active: {
        boxShadow: `inset 0 0 0 1px ${mode(
          colors.blackAlpha[400],
          colors.whiteAlpha[300],
        )(props)}`,
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
      },
    }),
    ghost: (props) => ({
      backgroundColor: "transparent",
      color: mode("darkGrey", "white")(props),
      fontWeight: "normal",
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: mode("greenHaze", "azure")(props),
            borderWidth: 2,
          }),
        },
        notFocus: {
          outline: "none",
        },
      }),
      _hover: {
        backgroundColor: mode("seaMist", "whiteAlpha.200")(props),
        _disabled: {
          color: "blackAlpha.300",
        },
      },
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.100")(props),
      },
    }),
    floating: (props) => ({
      backgroundColor: mode("white", "whiteAlpha.100")(props),
      boxShadow: getBoxShadowString({
        borderColor: mode("grey.200", "whiteAlpha.400")(props),
        baseShadow: "sm",
      }),
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.400")(props),
      },
      _hover: {
        backgroundColor: mode("white", "whiteAlpha.200")(props),
        boxShadow: getBoxShadowString({
          borderColor: mode("grey.300", "white")(props),
          baseShadow: "md",
          borderWidth: 2,
        }),
      },
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: mode("greenHaze", "azure")(props),
            borderWidth: 2,
            baseShadow: "sm",
          }),
          _hover: {
            boxShadow: getBoxShadowString({
              borderColor: mode("greenHaze", "azure")(props),
              borderWidth: 2,
              baseShadow: "md",
            }),
          },
        },
        notFocus: {
          outline: "none",
          boxShadow: "sm",
        },
      }),
    }),
  },
  sizes: {
    lg: {
      minHeight: 8,
      minWidth: 8,
      fontSize: "18px",
    },
    md: {
      minHeight: 7,
      minWidth: 7,
      fontSize: "18px",
    },
    sm: {
      minHeight: 6,
      minWidth: 6,
      fontSize: "16px",
    },
    xs: {
      minHeight: 5,
      minWidth: 5,
      fontSize: "16px",
      paddingX: 2,
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default config;
