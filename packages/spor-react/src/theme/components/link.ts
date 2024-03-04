import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-util";
import { baseBackground, brandBackground } from "../utils/background-utils";
import { baseText, brandText } from "../utils/text-utils";

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
      ...brandText("default", props),
      _hover: {
        ...brandText("hover", props),
        ...brandBackground("hover", props),
      },
      _active: {
        ...brandText("active", props),
        ...brandBackground("active", props),
      },
    }),
    secondary: (props) => ({
      backgroundImage: `linear-gradient(${mode(
        "blackAlpha.400",
        "whiteAlpha.400",
      )(props)}, ${mode("blackAlpha.400", "whiteAlpha.400")(props)})`,
      ...baseText("default", props),
      "&:focus, &:focus-visible, &:active, &:hover": {
        outline: "solid",
        outlineWidth: "1px",
      },
      ...baseBackground("default", props),
      _hover: {
        outlineColor: mode("darkGrey", "white")(props),
        ...baseBackground("hover", props),
      },
      _active: {
        outlineColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
        ...baseBackground("active", props),
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
});

export default config;
