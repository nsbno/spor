import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisibleStyles } from "../utils/focus-util";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    border: 0,
    borderRadius: "xl",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transitionProperty: "common",
    transitionDuration: "normal",
    textWrap: "wrap",
    paddingX: 3,
    paddingY: 1,
    _focus: {
      boxShadow: 0,
      outline: 0,
    },
    ...focusVisibleStyles(props),
    _disabled: {
      cursor: "not-allowed",
      boxShadow: "none",
      backgroundColor: mode("blackAlpha.100", "whiteAlpha.100")(props),
      color: mode("blackAlpha.400", "whiteAlpha.400")(props),
    },
    _hover: {
      _disabled: {
        background: mode("blackAlpha.100", "whiteAlpha.100")(props),
      },
    },
  }),
  variants: {
    primary: (props) => ({
      // FIXME: Update to use a global defined background color for darkMode whenever it is available.
      // hardcoded background color as alpha-"hack" below is not feasible for dark mode with solid background color
      backgroundColor: mode("pine", "coralGreen")(props),
      color: mode("white", "darkTeal")(props),
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
      color: mode("darkTeal", "seaMist")(props),
      // order is important here for now while we do not have global defined background color for darkMode
      _hover: {
        backgroundColor: mode("coralGreen", "greenHaze")(props),
      },
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
    tertiary: (props) => ({
      backgroundColor: "transparent",
      color: mode("darkGrey", "white")(props),
      boxShadow: `inset 0 0 0 1px ${mode(
        colors.blackAlpha[400],
        colors.whiteAlpha[400],
      )(props)}`,
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
    }),
  },
  sizes: {
    lg: {
      minHeight: 8,
      minWidth: 8,
      fontSize: "18px",
      fontWeight: "bold",
    },
    md: {
      minHeight: 7,
      minWidth: 7,
      fontSize: "18px",
      fontWeight: "bold",
    },
    sm: {
      minHeight: 6,
      minWidth: 6,
      fontSize: "16px",
      fontWeight: "normal",
    },
    xs: {
      minHeight: 5,
      minWidth: 5,
      fontSize: "16px",
      paddingX: 2,
      fontWeight: "normal",
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default config;
