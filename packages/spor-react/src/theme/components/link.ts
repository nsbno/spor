import { defineStyleConfig } from "@chakra-ui/react";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";
import { mode } from "@chakra-ui/theme-tools";

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
    pb: "2px",
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
      color: mode("pine", "seaMist")(props),
      ...focusVisible({
        focus: {
          backgroundColor: "transparent",
          boxShadow: getBoxShadowString({
            borderColor: "azure",
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
        color: "white",
        backgroundColor: "pine",
        boxShadow: getBoxShadowString({
          borderColor: "pine",
          borderWidth: 2,
          isInset: false,
        }),
      },
      _active: {
        color: "white",
        backgroundColor: "azure",
        boxShadow: getBoxShadowString({
          borderColor: "azure",
          borderWidth: 2,
          isInset: false,
        }),
      },
    }),
    secondary: (props) => ({
      color: mode("darkGrey", "white")(props),
      ...focusVisible({
        focus: {
          backgroundColor: "transparent",
          boxShadow: getBoxShadowString({
            borderColor: "azure",
            borderWidth: 2,
            isInset: false,
          }),
        },
        notFocus: {
          boxShadow: "none",
          backgroundColor: "transparent",
        },
      }),
      _hover: {
        backgroundColor: mode("seaMist", "pine")(props),
        boxShadow: getBoxShadowString({
          borderColor: mode("seaMist", "pine")(props),
          borderWidth: 2,
          isInset: false,
        }),
      },
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
        boxShadow: getBoxShadowString({
          borderColor: mode("mint", "whiteAlpha.200")(props),
          borderWidth: 2,
          isInset: false,
        }),
      },
    }),
    /**
     * @deprecated tertiary style will be deprecated in the future.
     * Please use the secondary style instead.
     */
    tertiary: (props) => ({
      color: "white",
      ...focusVisible({
        focus: {
          color: "pine",
          backgroundColor: "white",
          boxShadow: getBoxShadowString({
            borderColor: "white",
            borderWidth: 3,
            isInset: false,
          }),
        },
        notFocus: {
          color: "white",
          boxShadow: "none",
          backgroundColor: "transparent",
        },
      }),
      _hover: {
        color: "white",
        backgroundColor: "whiteAlpha.200",
        boxShadow: getBoxShadowString({
          borderColor: props.theme.colors.whiteAlpha[200],
          borderWidth: 3,
          isInset: false,
        }),
      },
      _active: {
        color: "white",
        backgroundColor: "whiteAlpha.400",
        boxShadow: getBoxShadowString({
          borderColor: props.theme.colors.whiteAlpha[400],
          borderWidth: 3,
          isInset: false,
        }),
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
});

export default config;
