import { baseBackground, baseBorder } from "../utils/base-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { defineRecipe } from "@chakra-ui/react";

export const breadcrumbRecipe = defineRecipe({
  base: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    color: "inherit",
    textDecoration: "none",
    textStyle: "xs",
    paddingX: 0.5,
    borderRadius: "xs",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      ...focusVisibleStyles,
    },
  },
  variants: {
    core: {
      "&:not([aria-current=page])": {
        _hover: {
          ...baseBorder("default"),
        },
        _active: {
          ...baseBackground("active"),
        },
      },
    },
    ghost: {
      "&:not([aria-current=page])": {
        _hover: {
          ...ghostBackground("hover"),
        },
        _active: {
          ...ghostBackground("active"),
        },
      },
    },
  },
});
