import { defineSlotRecipe } from "@chakra-ui/react";

import { collapsibleAnatomy } from "./anatomy";

export const collapsibleSlotRecipe = defineSlotRecipe({
  slots: collapsibleAnatomy.keys(),
  className: "chakra-collapsible",
  base: {
    content: {
      margin: -1,
      padding: 1,
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
      },
    },
  },
});
