import { defineSlotRecipe } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

import { radioCardAnatomy } from "./anatomy";

export const radioCardSlotRecipe = defineSlotRecipe({
  className: "spor-radio-card",
  slots: radioCardAnatomy.keys(),
  base: {
    item: {
      flex: 1,
      overflow: "hidden",
      fontSize: "inherit",
      display: "block",
      cursor: "pointer",
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",

      _focusVisible: {
        outlineWidth: "2px",
        outlineColor: "outline.focus",
        outlineStyle: "solid",
        outlineOffset: "1px",
      },

      _disabled: {
        outline: "none",
        pointerEvents: "none",
        background: "surface.disabled",
        color: "text.disabled",
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
      fontWeight: "bold",
      fontSize: "inherit",
    },
  },
  variants: {
    variant: {
      core: {
        item: {
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
          _checked: {
            outlineColor: "outline.focus",
            outlineWidth: tokens.size.stroke.md,
            outlineStyle: "solid",
            backgroundColor: "core.surface.active",
            _focusVisible: {
              outlineStyle: "double",
              outlineWidth: `calc(3 * ${tokens.size.stroke.md})`, // space for double outline
            },
          },
        },
      },
      floating: {
        item: {
          boxShadow: "0px 1px 3px 0px var(--shadow-color)",
          shadowColor: "surface.disabled",

          border: "sm",
          borderColor: "floating.outline",

          background: "floating.surface",
          _hover: {
            background: "floating.surface.hover",

            borderColor: "floating.outline.hover",

            boxShadow: "0px 2px 6px 0px var(--shadow-color)",
            _active: {
              background: "floating.surface.active",
              borderColor: "floating.outline.active",
              boxShadow: "none",
            },
          },
          _checked: {
            outlineColor: "outline.focus",
            outlineWidth: tokens.size.stroke.md,
            outlineStyle: "solid",
            backgroundColor: "core.surface.active",

            _focusVisible: {
              outlineStyle: "double",
              outlineWidth: `calc(3 * ${tokens.size.stroke.md})`, // space for double outline
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
