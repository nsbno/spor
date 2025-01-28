import { defineRecipe } from "@chakra-ui/react";
import { brandBackground, brandText } from "../utils/brand-utils";
import { coreBorder, coreText } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

const svgStyles = () => {
  return {
    "& svg": {
      display: "inline-block",
      width: "1.125em",
      height: "1.125em",
      position: "relative",
    },
  };
};

export const linkRecipe = defineRecipe({
  base: {
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
    display: "inline-flex",
    alignItems: "center",
    justifyItems: "center",
    gap: "4px",
    position: "relative",
    boxDecorationBreak: "clone",

    "&:focus, &:focus-visible, &:active, &:hover": {
      backgroundImage: "none",
      backgroundSize: "100%",
      outline: "none",
      borderRadius: "xs",
    },

    ...focusVisibleStyles(),

    ...svgStyles(),
  },
  variants: {
    variant: {
      primary: {
        ...coreText("default"),
        _hover: {
          ...brandText("hover"),
          ...brandBackground("hover"),
          _active: {
            ...brandBackground("active"),
          },
        },
      },
      secondary: {
        ...coreText("default"),
        _hover: {
          ...coreBorder("hover"),
          outlineWidth: "1px",
          _active: {
            ...brandBackground("active"),
          },
        },
      },
    },
  },
});
