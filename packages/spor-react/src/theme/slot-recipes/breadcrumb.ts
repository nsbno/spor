import { coreBackground, coreBorder } from "../utils/core-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { defineSlotRecipe } from "@chakra-ui/react";
import { breadcrumbAnatomy } from "./anatomy";
import { focusVisibleStyles } from "../utils/focus-utils";

export const breadcrumbSlotRecipe = defineSlotRecipe({
  className: "spor-breadcrumb",
  slots: breadcrumbAnatomy.keys(),
  base: {
    list: {
      display: "inline-flex",
      flexWrap: "wrap",
      alignItems: "center",
    },
    link: {
      cursor: "pointer",
      padding: 0.5,
      borderRadius: "xs",
      ...focusVisibleStyles(),
    },
    currentLink: {
      borderRadius: "xs",
      cursor: "default",
    },
  },
  variants: {
    variant: {
      core: {
        link: {
          _hover: {
            ...coreBorder("default"),
            _active: {
              ...coreBackground("active"),
              outline: "none",
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
  },
});
