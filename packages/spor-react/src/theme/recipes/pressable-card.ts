import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { accentBackground, accentText } from "../utils/accent-utils";
import { defineRecipe } from "../../util";
import { focusVisibleStyles } from "../utils/focus-utils";
import tokens from "@vygruppen/spor-design-tokens";

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
    ...focusVisibleStyles(),

    _disabled: {
      outline: "none",
      pointerEvents: "none",
      background: "surface.disabled",
      color: "text.disabled",
    },
  },

  variants: {
    variant: {
      floating: {
        boxShadow: "sm",

        backgroundColor: "floating.surface",
        _hover: {
          boxShadow: "md",
          backgroundColor: "floating.surface.hover",
          _active: {
            boxShadow: "none",
            backgroundColor: "floating.surface.active",
          },
        },
      },
      base: {
        outlineColor: "core.outline",
        outlineWidth: tokens.size.stroke.sm,
        outlineStyle: "solid",
        backgroundColor: "core.surface",

        _hover: {
          outlineColor: "core.outline.hover",
          outlineWidth: tokens.size.stroke.md,
          outlineStyle: "solid",
          _active: {
            backgroundColor: "core.surface.active",
            outlineWidth: tokens.size.stroke.sm,
          },
        },
      },
      accent: {
        boxShadow: "sm",
        boxShadowColor: "surface.disabled",
        background: "alert.success.surface",
        _hover: {
          background: "alert.success.surface.hover",

          boxShadow: "md",
          _active: {
            background: "alert.success.surface.active",

            boxShadow: "none",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
