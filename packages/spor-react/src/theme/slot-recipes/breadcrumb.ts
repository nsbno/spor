import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { breadcrumbAnatomy } from "./anatomy";
import tokens from "@vygruppen/spor-design-tokens";

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
      ...focusVisibleStyles(),
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
            outlineColor: "core.outline.hover",
            outlineWidth: tokens.size.stroke.md,
            outlineStyle: "solid",
            _active: {
              backgroundColor: "core.surface.active",
              outline: "none",
            },
          },
        },
      },
      ghost: {
        link: {
          _hover: {
            backgroundColor: "ghost.surface.hover",
            _active: {
              backgroundColor: "ghost.surface.active",
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
