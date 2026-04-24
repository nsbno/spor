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
        outlineColor: "outline.core",
      },
    },
  },
  variants: {
    variant: {
      core: {
        backgroundColor: "transparent",
        outline: "1px solid",
        outlineColor: "outline.core",
        _hover: {
          outline: "2px solid",
          outlineColor: "outline.core.hover",
          _active: {
            outline: "1px solid",
            outlineColor: "outline.disabled",
            backgroundColor: "surface.core.active",
          },
        },
        _focus: {
          outline: "2px solid",
          outlineColor: "outline.focus",
        },
      },
      floating: {
        boxShadow: "sm",
        bg: "surface.floating",
        outline: "1px solid",
        outlineColor: "outline.floating",

        _hover: {
          outline: "1px solid",
          outlineColor: "outline.floating.hover",
        },
        _active: {
          outline: "1px solid",
          outlineColor: "outline.neutral",
          backgroundColor: "surface.floating.active",
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
