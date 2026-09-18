import { defineSlotRecipe } from "@chakra-ui/react";

import { alertAnatomy } from "./anatomy";

export const alertSlotRecipe = defineSlotRecipe({
  className: "spor-alert",
  slots: alertAnatomy.keys(),
  base: {
    root: {
      borderRadius: "sm",
      padding: 2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      position: "relative",
      textStyle: "sm",
      border: "sm",
      backgroundColor: "surface",
      borderColor: "outline",
    },
    description: {
      color: "text.subtle",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
      alignItems: "flex-start",
    },
    title: {
      fontWeight: "bold",
      color: "text",
    },
    closeButton: {
      color: `text`,
      _hover: {
        bg: `surface.ghost.hover`,
        _active: {
          bg: `surface.ghost.active`,
        },
      },
    },
  },
});
