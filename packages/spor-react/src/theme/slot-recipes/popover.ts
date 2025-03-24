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
      bg: { _light: "surface.tertiary", _dark: "brand.surface" },
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
      alignItems: "center",

      borderRadius: "sm",
      zIndex: "inherit",
      maxWidth: "20em",
    },
    arrow: {
      "--arrow-background": {
        _light: "colors.surface.tertiary",
        _dark: "colors.brand.surface",
      },
      "--arrow-size": "6px",
    },
    arrowTip: {},

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
          minWidth: "8rem",
        },
      },
      md: {
        body: {
          maxWidth: "13rem",
          minWidth: "13rem",
        },
        content: {
          padding: "14px 12px 18px 18px",
        },
      },
      lg: {
        body: {
          maxWidth: "26rem",
          minWidth: "26rem",
        },
        content: {
          padding: "14px 12px 18px 18px",
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
