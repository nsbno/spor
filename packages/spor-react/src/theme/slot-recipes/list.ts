import { defineSlotRecipe } from "@chakra-ui/react";

export const listSlotRecipe = defineSlotRecipe({
  slots: ["container", "item", "icon"],
  className: "spor-list",
  base: {
    container: {
      fontSize: ["mobile.sm", "desktop.sm"],
    },
    item: {
      fontFamily: "body",
    },
    icon: {
      marginEnd: "2",
      display: "inline",
      verticalAlign: "text-bottom",
    },
  },
});
