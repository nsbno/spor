import { listAnatomy } from "./anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export const listSlotRecipe = defineSlotRecipe({
  slots: listAnatomy.keys(),
  className: "spor-list",
  base: {
    root: {
      listStyle: "none",
    },
    item: {
      fontFamily: "body",
      position: "relative",
      marginLeft: 0,
      whiteSpace: "normal",
      display: "list-item",
      fontSize: "mobile.md",
      paddingLeft: 0,
      _marker: {
        display: "inline-block",
        position: "relative",
        marginLeft: 4,
      },
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
          display: "block",
        },
      },
    },
  },

  defaultVariants: {
    variant: "marker",
  },
});
