import { coreBackground, coreBorder } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { defineRecipe } from "@chakra-ui/react";

export const breadcrumbRecipe = defineRecipe({
  className: "spor-breadcrumb",
  base: {
    display: "inline-flex",
    flexWrap: "nowrap",
    alignItems: "center",
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    color: "inherit",
    textDecoration: "none",
    textStyle: "xs",
    paddingX: 0.5,
    borderRadius: "xs",
    _hover: {
    borderRadius: "6px",
_active: {
  borderRadius: "6px",

},
    },
  },
  link: {
    "&:not([aria-current=page])": {
      cursor: "pointer",
      ...focusVisibleStyles,
      _hover: {
        ...coreBorder("default"),
        _active: {
          ...coreBackground("active"),
        },
      },
    },
  },
  currentLink: {
    borderRadius: "6px",
    "&:not([aria-current=page])": {
      cursor: "default",
    },
  },
  variants: {
    variant: {
      core: {
        link: {
          "&:not([aria-current=page])": {
            _hover: {
              ...coreBorder("default"),
              _active: {
                ...coreBackground("active"),
              },
            },
          },
        },
      },
      ghost: {
        link: {
          "&:not([aria-current=page])": {
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
  },
});