import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { cardSelectAnatomy } from "./anatomy";

export const cardSelectSlotRecipe = defineSlotRecipe({
  slots: cardSelectAnatomy.keys(),
  className: "spor-card-select",
  base: {
    trigger: {
      appearance: "none",
      display: "flex",
      alignItems: "center",
      transitionProperty: "outline",
      transitionDuration: "fast",
      color: "core.text",
      ...focusVisibleStyles(),
      fontWeight: "normal",
      outline: "1px solid",
      outlineColor: "core.outline",
      _expanded: {
        backgroundColor: "accent.surface.active",
      },
    },
    card: {
      borderRadius: "sm",
      boxShadow: "md",
      padding: 3,
      color: "core.text",
      backgroundColor: "surface",
    },
  },
  variants: {
    variant: {
      core: {
        trigger: {
          outline: "1px solid",
          outlineColor: "outline",
          _hover: {
            outline: "2px solid",
            outlineColor: "core.outline",
          },
          _active: {
            backgroundColor: "accent.surface.active",
          },
        },
      },
      ghost: {
        trigger: {
          backgroundColor: "transparent",
          outline: "none",
          color: "ghost.text",
          _hover: {
            backgroundColor: "ghost.surface.hover",
          },
          _active: {
            backgroundColor: "ghost.surface.active",
          },
          _expanded: {
            backgroundColor: "ghost.surface.active",
          },
        },
      },
      floating: {
        trigger: {
          boxShadow: "sm",
          backgroundColor: {
            _light: "bg",
            _dark: `color-mix(in srgb, white 10%, var(--spor-colors-bg))`,
          },
          outline: "1px solid",
          outlineColor: "floating.outline",
          transition: "all .1s ease-out",
          _hover: {
            backgroundColor: {
              _light: "floating.surface.hover",
              _dark: `color-mix(in srgb, white 10%, var(--spor-colors-bg))`,
            },
            outline: "1px solid",
            outlineColor: "floating.outline.hover",
            _active: {
              backgroundColor: "floating.surface.active",
              outline: "1px solid",
              outlineColor: "floating.outline.active",
            },
          },
          _expanded: {
            backgroundColor: "floating.surface.active",
          },
        },
      },
    },
    size: {
      sm: {
        trigger: {
          paddingX: 1.5,
          paddingY: 1,
          minHeight: "1.25rem",
          fontSize: "xs",
          borderRadius: "md",
        },
      },
      md: {
        trigger: {
          paddingX: 2,
          paddingY: 1.5,
          minHeight: "2.625rem",
          fontSize: "xs",
          borderRadius: "lg",
        },
      },
      lg: {
        trigger: {
          paddingX: 3,
          paddingY: 2,
          minHeight: "3.375rem",
          fontSize: "sm",
          borderRadius: "lg",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
    size: "md",
  },
});
