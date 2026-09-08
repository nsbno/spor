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
      backgroundColor: "surface.neutral",
      borderColor: "outline.neutral",
    },
    description: {
      color: "text.neutral.subtle",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
      alignItems: "flex-start",
    },
    title: {
      fontWeight: "bold",
      color: "text.neutral",
    },
    closeButton: {
      color: `text.neutral`,
      _hover: {
        bg: `surface.neutral.hover`,
        _active: {
          bg: `surface.neutral.active`,
        },
      },
    },
  },
});
