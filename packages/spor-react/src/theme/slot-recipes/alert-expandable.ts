import { defineSlotRecipe } from "@chakra-ui/react";

import { alertExpandableAnatomy } from "./anatomy";

export const alertExpandableSlotRecipe = defineSlotRecipe({
  className: "spor-alert-expandable",
  slots: alertExpandableAnatomy.keys(),
  base: {
    root: {
      border: "sm",
      backgroundColor: "surface",
    },
    itemTrigger: {
      paddingX: "2 !important",
      _expanded: {
        borderBottomRadius: "none",
      },
    },
    itemContent: {
      backgroundColor: "surface",
      fontSize: "xs !important",
      paddingTop: "1 !important",
    },
  },
});
