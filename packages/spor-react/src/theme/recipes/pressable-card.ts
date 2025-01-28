import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { accentBackground, accentText } from "../utils/accent-utils";
import { defineRecipe } from "../../util";

export const pressableCardRecipe = defineRecipe({
  base: {
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    borderRadius: "md",
    cursor: "pointer",
    transitionProperty: "common",
    transitionDuration: "fast",

    _disabled: {
      ...coreBackground("disabled"),
      ...coreBorder("disabled"),
      ...coreText("disabled"),
      outline: "none",
      pointerEvents: "none",
    },
  },

  variants: {
    variant: {
      core: {
        cursor: "pointer",
        ...coreBorder("default"),
        _hover: {
          ...coreBorder("hover"),
        },
        _active: {
          ...coreBackground("active"),
          ...coreBorder("active"),
        },
      },
      accent: {
        ...accentText("default"),
        ...accentBackground("default"),
        boxShadow: "sm",
        _hover: {
          ...accentBackground("hover"),
          boxShadow: "md",
        },
        _active: {
          ...accentBackground("active"),
          boxShadow: "none",
        },
      },
      floating: {
        ...floatingBackground("default"),
        ...floatingBorder("default"),
        boxShadow: "sm",
        _hover: {
          ...floatingBackground("hover"),
          ...floatingBorder("hover"),
          boxShadow: "md",
        },
        _active: {
          ...floatingBorder("default"),
          ...floatingBackground("active"),
          boxShadow: "none",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
