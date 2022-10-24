import { defineStyleConfig } from "@chakra-ui/react";
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
    pb: "2px",
    color: "inherit",
    display: "inline",
    position: "relative",

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
    primary: {
      color: "pine",
      ...focusVisible({
        focus: {
          color: "white",
          backgroundColor: "pine",
          boxShadow: getBoxShadowString({
            borderColor: "pine",
            borderWidth: 3,
            isInset: false,
          }),
        },
        notFocus: {
          color: "pine",
          boxShadow: "none",
          backgroundColor: "transparent",
        },
      }),
      _hover: {
        backgroundColor: "coralGreen",
        color: "darkTeal",
        boxShadow: getBoxShadowString({
          borderColor: "coralGreen",
          borderWidth: 3,
          isInset: false,
        }),
      },
      _active: {
        backgroundColor: "mint",
        boxShadow: getBoxShadowString({
          borderColor: "mint",
          borderWidth: 3,
          isInset: false,
        }),
        color: "pine",
      },
    },
    secondary: (props) => ({
      color: "darkGrey",
      ...focusVisible({
        focus: {
          color: "white",
          backgroundColor: "darkGrey",
          boxShadow: getBoxShadowString({
            borderColor: "darkGrey",
            borderWidth: 3,
            isInset: false,
          }),
        },
        notFocus: {
          color: "darkGrey",
          boxShadow: "none",
          backgroundColor: "transparent",
        },
      }),
      _hover: {
        color: "darkGrey",
        backgroundColor: "blackAlpha.100",
        boxShadow: getBoxShadowString({
          borderColor: props.theme.colors.blackAlpha[100],
          borderWidth: 3,
          isInset: false,
        }),
      },
      _active: {
        color: "darkTeal",
        backgroundColor: "mint",
        boxShadow: getBoxShadowString({
          borderColor: "mint",
          borderWidth: 3,
          isInset: false,
        }),
      },
    }),
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
