import { defineRecipe } from "@chakra-ui/react";

export const closeButtonRecipe = defineRecipe({
  base: {
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "md",
    backgroundColor: "transparent",
    color: "text",
    fontWeight: "normal",
    _hover: {
      background: "ghost.surface.hover",
      _disabled: {
        color: "icon.disabled",
      },
      _active: {
        background: "ghost.surface.active",
      },
    },
  },
  variants: {
    size: {
      lg: {
        width: "40px",
        height: "40px",
        fontSize: "xs",
      },
      md: {
        width: "32px",
        height: "32px",
        fontSize: "0.75rem",
      },
      sm: {
        width: "24px",
        height: "24px",
        fontSize: "0.625rem",
      },
    },
  },
});
