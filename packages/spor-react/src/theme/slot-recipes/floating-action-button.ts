import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { floatingActionButtonAnatomy } from "./anatomy";

export const floatingActionButtonSlotRecipe = defineSlotRecipe({
  slots: floatingActionButtonAnatomy.keys(),
  className: "spor-floating-action-button",
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      paddingY: 2,
      paddingX: 2,
      cursor: "pointer",
      overflowX: "hidden",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      boxShadow: "md",
      transitionDuration: "fast",
      transitionProperty: "common",
      position: "fixed",
      zIndex: "sticky",
      ...focusVisibleStyles(),
      _disabled: {
        backgroundColor: "surface.disabled",
        color: "text.disabled",
        pointerEvents: "none",
      },
    },
    text: {
      display: "flex",
      flex: "none",
      alignItems: "center",
      fontWeight: "bold",
      textStyle: "sm",
      marginRight: 1,
    },
  },
  variants: {
    variant: {
      brand: {
        root: {
          backgroundColor: "brand.surface",
          color: "brand.text",
          _hover: {
            backgroundColor: "brand.surface.hover",
          },
          _active: {
            backgroundColor: "brand.surface.active",
          },
        },
      },
      core: {
        root: {
          backgroundColor: "transparent",
          outline: "1px solid",
          outlineColor: "core.outline",
          color: "core.text",
          _hover: {
            backgroundColor: "transparent",
            outline: "2px solid",
            outlineColor: "core.outline.light",
          },
          _active: {
            outline: "1px solid",
            outlineColor: "core.outline",
            backgroundColor: "brand.surface.active",
          },
        },
      },
      accent: {
        root: {
          backgroundColor: "accent.surface",
          color: "accent.text",
          _hover: {
            backgroundColor: "accent.surface.hover",
            color: "accent.text",
          },
          _active: {
            backgroundColor: "accent.surface.active",
          },
        },
      },
    },
    placement: {
      "top left": {
        root: {
          top: "1rem",
          left: "1rem",
        },
      },
      "top right": {
        root: {
          top: "1rem",
          right: "1rem",
        },
      },
      "bottom left": {
        root: {
          bottom: "1rem",
          left: "1rem",
        },
      },
      "bottom right": {
        root: {
          bottom: "1rem",
          right: "1rem",
        },
      },
    },
  },
  defaultVariants: {
    variant: "brand",
  },
});
