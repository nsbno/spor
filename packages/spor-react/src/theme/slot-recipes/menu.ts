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
      padding: "1",

      display: "flex",
      flexDirection: "column",
      gap: "0.5",
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
      gap: "0.5",
    },
    item: {
      borderRadius: "9px",
      padding: "2",
      display: "flex",
      justifyContent: "space-between",
      gap: 1.5,

      _hover: {
        backgroundColor: "surface.accent.hover",
      },

      "&:active": {
        backgroundColor: "surface.accent.active",
      },

      _checked: {
        backgroundColor: "surface.accent",
      },

      _highlighted: {
        backgroundColor: "surface.ghost.hover",
      },
    },
    itemGroupLabel: {
      paddingY: "1",
      fontWeight: "bold",
      fontSize: "xs",
    },
    itemCommand: {
      fontSize: "2xs",
    },
    separator: {
      color: "outline",
    },
    radioItem: {
      display: "flex",
      justifyContent: "space-between",
      gap: 2,
    },
    triggerItem: {
      display: "flex",
      justifyContent: "space-between",
      gap: 1.5,
      alignItems: "center",
    },
    checkboxItem: {
      display: "flex",
      gap: 2,
      alignItems: "center",
      width: "full",
    },
  },
  variants: {
    variant: {
      core: {
        content: {
          border: "1px solid",
          borderColor: "outline.core",
        },
      },
      accent: {
        content: {
          border: "1px solid",
          borderColor: "outline.core",
        },
      },
      floating: {
        content: {
          border: "sm",
          borderColor: "outline.floating",
          boxShadow: "lg",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
