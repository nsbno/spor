import { defineSlotRecipe } from "@chakra-ui/react";

import { alertExpandableAnatomy } from "./anatomy";

export const alertExpandableSlotRecipe = defineSlotRecipe({
  className: "spor-alert-expandable",
  slots: alertExpandableAnatomy.keys(),
  base: {
    root: {
      border: "sm",
      backgroundColor: "surface",
      borderColor: "outline",
    },
    itemTrigger: {
      paddingX: "2 !important",
      _hover: {
        bg: "surface.ghost.hover",
        outlineOffset: "0px",
        outline: "1px solid",
        outlineColor: "outline",
        _active: {
          bg: "surface.ghost.active",
        },
      },

      _expanded: {
        borderBottomRadius: "none",
      },
    },
    itemContent: {
      color: "text.subtle",
      fontSize: "xs !important",
      paddingTop: "1 !important",
    },
  },
});
