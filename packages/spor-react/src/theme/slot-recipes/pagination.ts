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
      width: 5,
      height: 5,
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      flexDirection: "row",
      listStyle: "none",
      height: 5,
    },

    activeButton: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      width: "5",
      height: "5",
      gap: 3,
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
  },
});
