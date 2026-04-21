import { defineRecipe } from "@chakra-ui/react";

export const staticCardRecipe = defineRecipe({
  base: {
    borderRadius: "md",
  },
  variants: {
    colorPalette: {
      white: {
        backgroundColor: "surface",
        color: "text",
      },
      grey: {
        backgroundColor: "surface.neutral",
      },
      yellow: {
        backgroundColor: "surface.warning",
      },
      darkYellow: {
        backgroundColor: "surface.notice",
      },
      red: {
        backgroundColor: "surface.critical",
      },
      green: {
        backgroundColor: "surface.success",
      },
      blue: {
        backgroundColor: "surface.info",
      },
      orange: {
        backgroundColor: "surface.caution",
      },
    },
  },
  defaultVariants: {
    colorPalette: "white",
  },
});
