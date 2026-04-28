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
      color: "text.core",
      cursor: "pointer",
      _hover: {
        background: "surface.ghost.hover",
        _active: {
          background: "surface.ghost.active",
        },
      },
      _selected: {
        cursor: "default",
        fontWeight: "bold",
        backgroundColor: "surface.core.active",
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
