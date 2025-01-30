import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreText } from "../utils/core-utils";
import { ghostBackground } from "../utils/ghost-utils";

export const paginationSlotRecipe = defineSlotRecipe({
  slots: [
    "listItem",
    "link",
    "activeButton",
    "disabled",
    "icon",
  ],
  className: "spor-pagination",
  base: {
    listItem: {
      display: "flex",
    },
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 5,
      height: 5,
      backgroundImage: "none",
      borderRadius: 50,
      fontSize: "xs",
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
      width: 5,
      height: 5,
      backgroundImage: "none",
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
      width: 5,
      height: 5,
      backgroundImage: "none",
      borderRadius: 50,
      fontSize: "xs",
      cursor: "not-allowed",
      pointerEvents: "none",
      boxShadow: "none",
      ...coreText("disabled"),
    },
    icon: {
      bottom: "-0.03em !important",
    },
  },
});