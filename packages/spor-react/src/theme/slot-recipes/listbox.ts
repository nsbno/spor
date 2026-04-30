import { defineSlotRecipe } from "@chakra-ui/react";

import { listBoxAnatomy } from "./anatomy";

export const listBoxSlotRecipe = defineSlotRecipe({
  slots: listBoxAnatomy.keys(),
  className: "spor-listbox",
  base: {
    root: {
      backgroundColor: "surface",
      boxShadow: "sm",
      overflowY: "auto",
      maxHeight: "50vh",
      width: "100%",
      listStyle: "none",
      paddingTop: 2,
      borderBottomRadius: "md",
      borderWidth: 1,
      zIndex: "dropdown",
    },
    item: {
      paddingX: 2,
      paddingY: 1,
      marginY: 1,
      marginX: 1,
      borderRadius: "sm",
      color: "text.ghost",
      cursor: "pointer",
      listStyle: "none",
      _active: {
        backgroundColor: "surface.ghost.active",
      },

      _hover: {
        backgroundColor: "surface.accent",
        color: "text.accent",
      },
      _selected: {
        backgroundColor: "surface.ghost.active",
      },
      _focus: {
        outline: "2px solid",
        outlineColor: "outline.focus",
      },
    },
    label: {},
    description: {
      fontSize: ["mobile.xs", "desktop.xs"],
      color: "text.ghost",
      "[aria-selected='true'] &": {
        color: "text.ghost",
      },
    },
  },
  variants: {
    variant: {
      core: {
        root: {
          outline: "1px solid",
          outlineColor: "outline.core",
        },
      },
      floating: {
        root: {
          outline: "1px solid",
          outlineColor: "outline.floating",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
