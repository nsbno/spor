import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreText } from "../utils/core-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { paginationAnatomy } from "./anatomy";
import { focusVisibleStyles } from "../utils/focus-utils";

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
      ...focusVisibleStyles(),
      ...coreText("default"),
      cursor: "pointer",
      ...coreBackground("default"),
      _hover: {
        ...ghostBackground("hover"),
        _active: {
          ...ghostBackground("active"),
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
