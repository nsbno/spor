import { coreBackground, coreBorder } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { defineSlotRecipe } from "@chakra-ui/react";
import { breadcrumbAnatomy } from "./anatomy";
import { outlineBorder } from "../utils/outline-utils";

export const breadcrumbSlotRecipe = defineSlotRecipe({
  className: "spor-breadcrumb",
  slots: breadcrumbAnatomy.keys(),
  base: {
    list: {
      display: "inline-flex",
      flexWrap: "nowrap",
      alignItems: "center",
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
        outlineOffset: 0,
      },
    },
    link: {
      cursor: "pointer",
      padding: "3px",
      borderRadius: "6px",
    },
    currentLink: {
      borderRadius: "6px",
      cursor: "default",
    },
  },
  variants: {
    variant:{
    core: {
      link: {
        _hover: {
          ...coreBorder("default"),
          _active: {
            ...coreBackground("active"),
          },
        },
      },
    },
    ghost: {
      link: {
        _hover: {
          ...ghostBackground("hover"),
          _active: {
            ...ghostBackground("active"),
          },
        },
      },
    },
  },
 
}});