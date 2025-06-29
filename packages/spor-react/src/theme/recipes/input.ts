import { defineRecipe } from "@chakra-ui/react";

/* FYI: The styling in this file is also used in Textarea */

export const inputRecipe = defineRecipe({
  base: {
    appearance: "none",
    width: "100%",
    outline: "none",
    border: 0,
    borderRadius: "sm",
    transitionProperty: "common",
    transitionDuration: "fast",
    color: "text",
    position: "relative",
    paddingX: 3,
    paddingTop: 3,
    height: 8,
    fontSize: "mobile.md",

    _disabled: {
      backgroundColor: "surface.disabled",
      outline: "1px solid",
      outlineColor: "outline.disabled",
      pointerEvents: "none",
    },
    _invalid: {
      outline: "2px solid",
      outlineColor: "outline.error",
      _active: {
        outline: "2px solid",
        outlineColor: "outline.error",
      },
      _focus: {
        outline: "2px solid",
        outlineColor: "outline.error",
      },
      _hover: {
        outline: "2px solid",
        outlineColor: "core.outline",
      },
    },
  },
  variants: {
    variant: {
      core: {
        backgroundColor: "transparent",
        outline: "1px solid",
        outlineColor: "core.outline",
        _hover: {
          outline: "2px solid",
          outlineColor: "core.outline.hover",
          _active: {
            outline: "1px solid",
            outlineColor: "outline.disabled",
            backgroundColor: "core.surface.active",
          },
        },
        _focus: {
          outline: "2px solid",
          outlineColor: "outline.focus",
        },
      },
      floating: {
        boxShadow: "sm",
        bg: "floating.surface",
        outline: "1px solid",
        outlineColor: "floating.outline",

        _hover: {
          outline: "1px solid",
          outlineColor: "floating.outline.hover",
        },
        _active: {
          outline: "1px solid",
          outlineColor: "floating.outline.active",
          backgroundColor: "floating.surface.active",
        },

        focus: {
          outline: "1px solid",
          outlineColor: "outline.focus",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
