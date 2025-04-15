import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";

export const choiceChipRecipe = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    boxAlign: "center",
    fontSize: "xs",
    cursor: "pointer",
    transitionProperty: "all",
    borderRadius: "xl",
    transitionDuration: "fast",
    height: 6,
    paddingInlineStart: "2",
    paddingInlineEnd: "2",
    outline: "1px solid",
    outlineColor: "base.outline",
    _checked: {
      backgroundColor: "brand.surface",
      borderRadius: "sm",
      color: "brand.text",
      outline: "none",

      _hover: {
        backgroundColor: "brand.surface.hover",
        outline: "none",
        _active: {
          backgroundColor: "brand.surface.active",
        },
      },
    },
    _disabled: {
      pointerEvents: "none",
      boxShadow: "none",
      backgroundColor: "surface.disabled",
      color: "text.disabled",
      outline: "none",

      _hover: {
        backgroundColor: "core.surface.disabled",
        boxShadow: "none",
        color: "core.text.disabled",
      },
      _checked: {
        cursor: "not-allowed",
        boxShadow: "none",
        color: "core.text.disabled",
        backgroundColor: "core.surface.disabled",
        _hover: {
          backgroundColor: "core.surface.disabled",
          boxShadow: "none",
          color: "core.text.disabled",
        },
      },
      "input:focus-visible + &": focusVisibleStyles()._focusVisible,
    },
  },
  variants: {
    variant: {
      core: {
        color: "core.text",
        outlineColor: "core.outline",

        _hover: {
          outline: "2px solid",
          outlineColor: "core.outline.hover",

          _active: {
            outline: "1px solid",
            outlineColor: "core.outline",
            backgroundColor: "core.surface.active",
          },
        },
      },
      accent: {
        backgroundColor: "accent.surface",
        color: "accent.text",
        outline: "none",

        _hover: {
          backgroundColor: "accent.surface.hover",

          _active: {
            backgroundColor: "accent.surface.active",
          },
        },
      },
      floating: {
        backgroundColor: "floating.surface",
        outline: "1px solid",
        outlineColor: "floating.outline",
        color: "floating.text",

        boxShadow: "sm",
        _hover: {
          backgroundColor: "floating.surface.hover",
          outline: "1px solid",
          outlineColor: "floating.outline.hover",

          _active: {
            backgroundColor: "floating.surface.active",
            outline: "1px solid",
            outlineColor: "floating.outline",
          },
        },
      },
    },
    size: {
      xs: {
        _checked: {
          borderRadius: "0.563rem",
        },
        height: 5,
        paddingX: 1.5,
      },
      sm: {
        _checked: {
          borderRadius: "sm",
        },
        height: 6,
        paddingX: 2,
      },
      md: {
        _checked: {
          borderRadius: "sm",
        },
        height: 7,
        paddingX: 2,
      },
      lg: {
        _checked: {
          borderRadius: "md",
        },
        height: 8,
        paddingX: 3,
      },
    },
  },
});
