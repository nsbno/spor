import { defineRecipe } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

const svgStyles = () => {
  return {
    "& svg": {
      display: "inline-block",
      width: "1.125em",
      height: "1.125em",
      position: "relative",
      bottom: "-0.2em",
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
    display: "inline",
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
  compoundVariants: [
    {
      variant: "primary",
      css: {
        ...baseText("default"),
      },
      _hover: {
        ...brandText("hover"),
        ...brandBackground("hover"),
      },
    },
    {
      variant: "secondary",
      css: {
        backgroundImage: `linear-gradient("blackAlpha.400", "blackAlpha.400")`,
        ...baseText("default"),
        "&:focus, &:focus-visible, &:active, &:hover": {
          outline: "1px solid",
        },
      },
      ...baseBackground("default"),
      _hover: {
        ...baseBorder("hover"), // TODO: This is also weird
        ...baseBackground("hover"),
        outlineWidth: 1,
      },
      _active: {
        ...baseBackground("active"),
      },
    },
  ],
});
