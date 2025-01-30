import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { outlineBorder } from "../utils/outline-utils";
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
        _disabled: {
          ...coreText("disabled"),
        },
        _active: {
            borderRadius: 50,
            ...ghostBackground("active"),
          },
      },
     
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
  variants: {
    variant: {
      core: {
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
            _disabled: {
              ...coreText("disabled"),
            },
            _active: {
                borderRadius: 50,
                ...ghostBackground("active"),
              },
          },
         
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
    },
  },
});