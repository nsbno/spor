import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreText } from "../utils/core-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { paginationAnatomy } from "./anatomy";

export const paginationSlotRecipe = defineSlotRecipe({
  slots: paginationAnatomy.keys(),
  className: "spor-pagination",
  base: {
    listItem: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      width: "5",
      height: "5",
      gap: 3,
      marginInline: 0.5,
      ...coreBackground("default"),
      ...coreText("default"),
      _hover: {
        ...ghostBackground("hover"),
        borderRadius: 50,
        _active: {
          borderRadius: 50,
          ...ghostBackground("active"),
        },
        _disabled: {
          ...coreText("disabled"),
        },
      },
    },
    list: {
      display: "inline-flex",
      listStyle: "none",
      height: "5",
      gap: 3,
    },

    activeButton: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      width: "5",
      height: "5",
      gap: 3,
      padding: "6px",
      borderRadius: 50,
      fontWeight: "bold",
      ...coreBackground("active"),
      _hover: {
        ...ghostBackground("hover"),
        borderRadius: 50,
        _active: {
          borderRadius: 50,
          ...ghostBackground("active"),
        },
      },
    },
    disabled: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "not-allowed",
      pointerEvents: "none",
      ...coreText("default"),
    },
    icon: {
      bottom: "-0.03em !important",
      fontSize: "0.8em",
    },
  },
});
