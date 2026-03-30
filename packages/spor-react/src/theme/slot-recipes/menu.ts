import { defineSlotRecipe } from "@chakra-ui/react";

import { menuAnatomy } from "./anatomy";

export const menuSlotRecipe = defineSlotRecipe({
  className: "menu",
  slots: menuAnatomy.keys(),
  base: {
    content: {
      bg: "bg",
      borderRadius: "sm",
      boxShadow: "sm",
      width: "fit-content",
      padding: "2",

      display: "flex",
      flexDirection: "column",
      gap: "1",
      zIndex: "dropdown",

      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast",
        zIndex: "popover",
        outline: "none",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
    },
    item: {
      borderRadius: "sm",
      paddingY: "1",
      paddingX: "2",

      _hover: {
        backgroundColor: "accent.surface.hover",
      },

      "&:active": {
        backgroundColor: "accent.surface.active",
      },

      _checked: {
        backgroundColor: "accent.surface",
      },

      _highlighted: {
        backgroundColor: "ghost.surface.hover",
      },
    },
    itemGroupLabel: {
      paddingY: "1",
      fontWeight: "bold",
    },
    itemCommand: {
      fontSize: "2xs",
    },
    separator: {
      color: "outline",
    },
  },
  variants: {
    variant: {
      core: {
        content: {
          border: "1px solid",
          borderColor: "core.outline",
        },
      },
      accent: {
        content: {
          border: "1px solid",
          borderColor: "core.outline",
        },
      },
      floating: {
        content: {
          border: "sm",
          borderColor: "floating.outline",
          boxShadow: "lg",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
