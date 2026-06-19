import { defineSlotRecipe } from "@chakra-ui/react";

import { breadcrumbAnatomy } from "./anatomy";

export const breadcrumbSlotRecipe = defineSlotRecipe({
  slots: breadcrumbAnatomy.keys(),
  base: {
    list: {
      display: "inline-flex",
      flexWrap: "wrap",
      gap: 1,
      alignItems: "center",
    },
    link: {
      cursor: "pointer",
      borderRadius: "xs",
      textDecoration: "underline",
    },
    currentLink: {
      cursor: "default",
    },
    separator: {
      "& svg": {
        color: "icon.disabled",
      },
    },
  },

  variants: {
    variant: {
      core: {
        link: {
          _hover: {
            textDecoration: "none",

            _active: {
              backgroundColor: "surface.core.active",
            },
          },
        },
      },
      ghost: {
        link: {
          _hover: {
            backgroundColor: "surface.ghost.hover",
            _active: {
              backgroundColor: "surface.ghost.active",
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: "core",
  },
});
