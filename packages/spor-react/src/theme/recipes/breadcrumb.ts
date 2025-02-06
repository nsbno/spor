import { coreBackground, coreBorder } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { defineRecipe } from "@chakra-ui/react";

export const breadcrumbRecipe = defineRecipe({
  base: {
    display: "inline-flex",
    flexWrap: "nowrap",
    alignItems: "center",
    /* borderRadius: "6px",
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    color: "inherit",
    textDecoration: "none",
    textStyle: "xs",
    paddingX: 0.5, */
  },
  link: {
      cursor: "pointer",
      ...focusVisibleStyles,
     
  },
  currentLink: {
   
  },
  variants: {
    variant: {
      core: {
        link: {
          borderRadius: "6px",
          padding: "3px",
            _hover: {
              ...coreBorder("default"),
              _active: {
                ...coreBackground("active"),
                border: "none",
              },
          },
        },
      },
      ghost: {
        link: {
         padding: "3px",
         borderRadius: "6px",
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