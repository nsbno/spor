import { defineSlotRecipe } from "@chakra-ui/react";

import { paginationAnatomy } from "./anatomy";

export const paginationSlotRecipe = defineSlotRecipe({
  slots: paginationAnatomy.keys(),
  className: "spor-pagination",
  base: {
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "5",
      width: "5",
      fontSize: "xs",
      borderRadius: "xl",
      color: "core.text",
      cursor: "pointer",
      _hover: {
        background: "ghost.surface.hover",
        _active: {
          background: "ghost.surface.active",
        },
      },
      _selected: {
        cursor: "default",
        fontWeight: "bold",
        backgroundColor: "core.surface.active",
      },
    },
    list: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: ["0.5", null, null, "1"],
      listStyle: "none",
    },
  },
});
