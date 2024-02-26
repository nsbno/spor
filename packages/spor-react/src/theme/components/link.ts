import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-util";

const config = defineStyleConfig({
  baseStyle: (props) => ({
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

    ...focusVisibleStyles(props),

    svg: {
      display: "inline-block",
      width: "1.125em",
      height: "1.125em",
      position: "relative",
      bottom: "-0.2em",
    },
  }),
  variants: {
    primary: (props) => ({
      color: mode("pine", "coralGreen")(props),
      _hover: {
        color: mode("white", "darkTeal")(props),
        backgroundColor: mode("darkTeal", "blueGreen")(props),
      },
      _active: {
        color: mode("white", "darkTeal")(props),
        backgroundColor: mode("greenHaze", "seaMist")(props),
      },
    }),
    secondary: (props) => ({
      backgroundImage: `linear-gradient(${mode(
        "blackAlpha.400",
        "whiteAlpha.400",
      )(props)}, ${mode("blackAlpha.400", "whiteAlpha.400")(props)})`,
      color: mode("darkGrey", "white")(props),
      "&:focus, &:focus-visible, &:active, &:hover": {
        outline: "solid",
        outlineWidth: "1px",
      },
      _hover: {
        color: mode("darkGrey", "white")(props),
        outlineColor: mode("darkGrey", "white")(props),
      },
      _active: {
        outlineColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
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
