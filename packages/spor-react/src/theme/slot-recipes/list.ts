import { listAnatomy } from "./anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export const listSlotRecipe = defineSlotRecipe({
  slots: listAnatomy.keys(),
  className: "spor-list",
  base: {
    item: {
      fontFamily: "body",
      whiteSpace: "normal",
      display: "list-item",
      fontSize: ["mobile.sm", "desktop.sm"],
    },
    icon: {
      marginEnd: "2",
      display: "inline",
      verticalAlign: "text-bottom",
    },
  },
  variants: {
    variant: {
      marker: {
        root: {
          listStyle: "revert",
          listStylePosition: "inside",
        },
        item: {
          _marker: {
            color: "inherit",
          },
        },
      },

      plain: {
        item: {
          alignItems: "flex-start",
          display: "inline-flex",
        },
      },
    },
  },

  defaultVariants: {
    variant: "marker",
  },
});
