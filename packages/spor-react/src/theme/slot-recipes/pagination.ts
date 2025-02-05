import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreText } from "../utils/core-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { paginationAnatomy } from "./anatomy";

export const paginationSlotRecipe = defineSlotRecipe({
  slots: paginationAnatomy.keys(),
  className: "spor-pagination",
  base: {
    listItem: {
      display: "flex",
    },
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      padding: "2px",
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
    activeButton: {
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "19px",
      height: "14px",
      fontSize: "xs",
      borderRadius: 50,
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