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
        boxShadow: "0px 1px 3px 0px var(--shadow-color)",
        shadowColor: "surface.disabled",

        border: "sm",
        borderColor: "floating.outline",

        backgroundColor: "floating.surface",
        _hover: {
          boxShadow: "0px 2px 6px 0px var(--shadow-color)",
          backgroundColor: "floating.surface.hover",

          borderColor: "floating.outline.hover",

          _active: {
            boxShadow: "none",
            backgroundColor: "floating.surface.active",
            borderColor: "floating.outline.active",
          },
        },
      },
      core: {
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
        boxShadow: "0px 1px 3px 0px var(--shadow-color)",
        shadowColor: "surface.disabled",
        background: "alert.success.surface",
        _hover: {
          background: "alert.success.surface.hover",

          boxShadow: "0px 2px 6px 0px var(--shadow-color)",
          _active: {
            background: "alert.success.surface.active",
            boxShadow: "none",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
