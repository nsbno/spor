import tokens from "@vygruppen/spor-design-tokens";

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
        borderColor: "outline.floating",

        backgroundColor: "surface.floating",
        _hover: {
          boxShadow: "0px 2px 6px 0px var(--shadow-color)",
          backgroundColor: "surface.floating.hover",

          borderColor: "outline.floating.hover",

          _active: {
            boxShadow: "none",
            backgroundColor: "surface.floating.active",
            borderColor: "outline.neutral",
          },
        },
      },
      core: {
        outlineColor: "outline.core",
        outlineWidth: tokens.size.stroke.sm,
        outlineStyle: "solid",

        _hover: {
          outlineColor: "outline.core.hover",
          outlineWidth: tokens.size.stroke.md,
          outlineStyle: "solid",
          _active: {
            backgroundColor: "surface.core.active",
            outlineWidth: tokens.size.stroke.sm,
          },
        },
      },
      accent: {
        boxShadow: "0px 1px 3px 0px var(--shadow-color)",
        shadowColor: "surface.disabled",
        background: "surface.success",
        _hover: {
          background: "surface.success.hover",

          boxShadow: "0px 2px 6px 0px var(--shadow-color)",
          _active: {
            background: "surface.success.active",
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
