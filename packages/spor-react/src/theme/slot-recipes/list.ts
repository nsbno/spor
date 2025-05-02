import { defineSlotRecipe } from "@chakra-ui/react";

import { listAnatomy } from "./anatomy";

export const listSlotRecipe = defineSlotRecipe({
  slots: listAnatomy.keys(),
  className: "spor-list",
  base: {
    item: {
      fontFamily: "body",
      whiteSpace: "normal",
      fontSize: "inherit",
      marginLeft: "2",
      _marker: {
        display: "inline-block",
      },
    },
    icon: {
      display: "inline-block",
    },
  },
  variants: {
    variant: {
      marker: {
        root: {
          listStyle: "revert",
        },
        item: {
          _marker: {
            color: "inherit",
          },
        },
      },

      plain: {
        item: {
          display: "block",
        },
      },
    },
  },

  defaultVariants: {
    variant: "marker",
  },
});
