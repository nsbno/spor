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
      borderRadius: "50px",
      fontSize: "xs",
      width: "19px",
      height: "14px",
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
        },      }, 
     
    },
    activeButton: {
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "19px",
      height: "14px",
      borderRadius: 50,
      fontSize: "xs",
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
      width: "19px",
      height: "14px",
      borderRadius: 50,
      fontSize: "xs",
      cursor: "not-allowed",
      pointerEvents: "none",
      ...coreText("disabled"),
    },
    icon: {
      bottom: "-0.03em !important",
    },
  },
});