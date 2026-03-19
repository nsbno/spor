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

      _checked: {
        backgroundColor: "ghost.surface.active !important", // <— selected bg
      },

      _highlighted: {
        backgroundColor: "ghost.surface.hover !important",
      },
    },
    itemGroupLabel: {
      padding: "2",
      fontWeight: "bold",
    },
    separator: {
      color: "outline",
    },
  },
});
