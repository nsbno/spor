import { defineSlotRecipe } from "@chakra-ui/react";

import { menuAnatomy } from "./anatomy";

export const menuSlotRecipe = defineSlotRecipe({
  className: "menu",
  slots: menuAnatomy.keys(),
  base: {
    content: {
      bg: "bg",
      padding: 1,
      border: "sm",
      borderColor: "floating.outline",
      borderRadius: "sm",
      boxShadow: "sm",
      width: "fit-content",
    },
    item: {
      padding: "2",
      "&:hover": {
        backgroundColor: "bg.secondary",
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
