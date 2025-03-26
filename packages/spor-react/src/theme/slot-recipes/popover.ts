import { surface } from "./../utils/surface-utils";
import { defineSlotRecipe } from "@chakra-ui/react";
import { popoverAnatomy } from "./anatomy";

export const popoverSlotRecipe = defineSlotRecipe({
  className: "spor-popover",
  slots: popoverAnatomy.keys(),
  base: {
    content: {
      position: "relative",
      display: "flex",
      gap: "0.625rem",
      padding: "0.563rem 0.75rem",

      textStyle: "sm",
      bg: "brand.surface",
      boxShadow: "lg",
      borderRadius: "sm",
      zIndex: "popover",
      outline: "0",
      transformOrigin: "var(--transform-origin)",
      maxHeight: "var(--available-height)",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "faster",
      },
    },
    body: {
      color: "text.inverted",
      display: "flex",
      alignItems: "center",
      minWidth: "20rem",
      borderRadius: "sm",
      zIndex: "inherit",
      maxWidth: "20em",
    },
    arrow: {
      "--arrow-background": "colors.brand.surface",
      "--arrow-size": "6px",
    },

    closeTrigger: {
      color: "text.inverted",

      _hover: {
        backgroundColor: "brand.surface.hover",
        _disabled: {
          backgroundColor: "brand.surface.active",
        },
        _active: {
          backgroundColor: "brand.surface.active",
        },
      },
    },
  },
  variants: {
    size: {
      sm: {
        body: {
          maxWidth: "8rem",
        },
      },
      md: {
        body: {
          maxWidth: "16rem",
        },
      },
      lg: {
        body: {
          maxWidth: "32rem",
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
