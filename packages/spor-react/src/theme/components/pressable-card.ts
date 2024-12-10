import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
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
      ...baseBackground("disabled"),
      ...baseBorder("disabled"),
      ...baseText("disabled"),
      outline: "none",
      pointerEvents: "none",
    },
  },

  variants: {
    variant: {
      base: {
        cursor: "pointer",
        ...baseBorder("default"),
        _hover: {
          ...baseBorder("hover"),
        },
        _active: {
          ...baseBackground("active"),
          ...baseBorder("active"),
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
    variant: "base",
  },
});

export default pressableCardRecipe;
