import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    backgroundImage: "linear-gradient(currentColor, currentColor)",
    backgroundSize: "100% 1px",
    backgroundPosition: "0 100%",
    backgroundRepeat: "no-repeat",
    borderRadius: "none",
    padding: "2px",
    color: "inherit",
    display: "inline",
    position: "relative",
    boxDecorationBreak: "clone",

    "&:focus, &:focus-visible, &:active, &:hover": {
      backgroundImage: "none",
      backgroundSize: "100%",
      outline: "none",
      borderRadius: "xs",
    },

    svg: {
      display: "inline-block",
      width: "1.125em",
      height: "1.125em",
      position: "relative",
      bottom: "-0.2em",
    },
  },
  variants: {
    primary: (props) => ({
      color: mode("pine", "coralGreen")(props),
      ...focusVisible({
        focus: {
          backgroundColor: mode("pine", "white")(props),
          color: mode("white", "pine")(props),
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            isInset: false,
          }),
        },
        notFocus: {
          color: "pine",
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }),
      _hover: {
        color: mode("darkTeal", "white")(props),
        backgroundColor: mode("coralGreen", "whiteAlpha.200")(props),
      },
      _active: {
        color: mode("pine", "white")(props),
        backgroundColor: mode("mint", "whiteAlpha.100")(props),
      },
    }),
    secondary: (props) => ({
      color: mode("darkGrey", "white")(props),
      ...focusVisible({
        focus: {
          backgroundColor: mode("darkGrey", "white")(props),
          color: mode("white", "darkTeal")(props),
        },
        notFocus: {
          boxShadow: "none",
          backgroundColor: "transparent",
        },
      }),
      _hover: {
        backgroundColor: mode("blackAlpha.100", "whiteAlpha.200")(props),
        color: mode("darkGrey", "white")(props),
      },
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.100")(props),
        color: mode("darkGrey", "white")(props),
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
});

export default config;
