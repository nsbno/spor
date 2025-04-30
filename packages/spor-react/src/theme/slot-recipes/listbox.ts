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
      color: "ghost.text",
      cursor: "pointer",
      listStyle: "none",
      _active: {
        backgroundColor: "ghost.surface.active",
      },

      _hover: {
        backgroundColor: "accent.surface",
        color: "accent.text",
      },
      _selected: {
        backgroundColor: "ghost.surface.active",
      },
      _focus: {
        outlineColor: "outline.focus",
      },
    },
    label: {},
    description: {
      fontSize: ["mobile.xs", "desktop.xs"],
      color: "ghost.text",
      "[aria-selected='true'] &": {
        color: "ghost.text",
      },
    },
  },
  variants: {
    variant: {
      core: {
        root: {
          outline: "1px solid",
          outlineColor: "core.outline",
        },
      },
      floating: {
        root: {
          outline: "1px solid",
          outlineColor: "floating.outline",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
