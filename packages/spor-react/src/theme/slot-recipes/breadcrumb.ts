import { defineSlotRecipe } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

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
      padding: 0.5,
      borderRadius: "xs",
    },
    currentLink: {
      borderRadius: "xs",
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
            outlineColor: "outline.core.hover",
            outlineWidth: tokens.size.stroke.md,
            outlineStyle: "solid",
            _active: {
              backgroundColor: "surface.core.active",
              outline: "none",
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
