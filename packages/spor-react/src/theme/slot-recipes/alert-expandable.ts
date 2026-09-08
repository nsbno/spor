import { defineSlotRecipe } from "@chakra-ui/react";

import { alertExpandableAnatomy } from "./anatomy";

export const alertExpandableSlotRecipe = defineSlotRecipe({
  className: "spor-alert-expandable",
  slots: alertExpandableAnatomy.keys(),
  base: {
    itemTrigger: {
      paddingX: "2 !important",
      _expanded: {
        borderBottomRadius: "none",
      },
    },
    itemContent: {
      fontSize: "xs !important",
      paddingTop: "1 !important",
    },
    root: {
      border: "sm",
    },
  },
});
