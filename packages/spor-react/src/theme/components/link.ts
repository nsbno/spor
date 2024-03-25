import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

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
      ...baseText("default", props),
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
        outline: "1px solid",
      },
      ...baseBackground("default", props),
      _hover: {
        ...baseBorder("hover", props), // TODO: This is also weird
        ...baseBackground("hover", props),
        outlineWidth: 1,
      },
      _active: {
        ...baseBackground("active", props),
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
});

export default config;
