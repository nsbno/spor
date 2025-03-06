import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { choiceChipAnatomy } from "./anatomy";

export const choiceChipSlotRecipe = defineSlotRecipe({
  slots: choiceChipAnatomy.keys(),
  className: "spor-choice-chip",
  base: {
    root: {
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
        color: "white",
        outline: "none",

        _hover: {
          backgroundColor: "brand.surface.hover",
          color: "white",
          outline: "none",
          _active: {
            backgroundColor: "brand.surface.active",
          },
        },
      },
      _disabled: {
        pointerEvents: "none",
        boxShadow: "none",
        backgroundColor: "core.surface.disabled",
        color: "core.text.disabled",

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
      },
      "input:focus-visible + &": focusVisibleStyles()._focusVisible,
    },
  },
  variants: {
    variant: {
      core: {
        root: {
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
      },
      accent: {
        root: {
          backgroundColor: "accent.surface",
          color: "accent.text",
          outline: "none",

          _hover: {
            backgroundColor: "accent.surface.hover",
            color: "accent.text",

            _active: {
              backgroundColor: "accent.surface.active",
              color: "accent.text.default",
            },
          },
        },
      },
      floating: {
        root: {
          backgroundColor: "floating.surface.default",
          outline: "1px solid",
          outlineColor: "floating.outline",
          boxShadow: "sm",
          _hover: {
            backgroundColor: "floating.surface.hover",
            outline: "1px solid",
            outlineColor: "floating.outline.hover",

            _active: {
              backgroundColor: "accent.surface.active",
              color: "accent.text.default",
              outline: "1px solid",
              outlineColor: "floating.outline",
            },
          },
        },
      },
    },
    size: {
      xs: {
        root: {
          _checked: {
            borderRadius: "0.563rem",
          },
          height: 5,
          paddingX: 1.5,
        },
      },
      sm: {
        root: {
          _checked: {
            borderRadius: "sm",
          },
          height: 6,
          paddingX: 2,
        },
      },
      md: {
        root: {
          _checked: {
            borderRadius: "sm",
          },
          height: 7,
          paddingX: 2,
        },
      },
      lg: {
        root: {
          _checked: {
            borderRadius: "md",
          },
          height: 8,
          paddingX: 3,
        },
      },
    },
  },
});
