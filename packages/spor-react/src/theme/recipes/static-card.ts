import { defineRecipe } from "@chakra-ui/react";

export const staticCardRecipe = defineRecipe({
  base: {
    borderRadius: "md",
  },
  variants: {
    colorPalette: {
      white: {
        backgroundColor: "surface.color.neutral",
        color: "text",
      },
      grey: {
        backgroundColor: "surface.color.grey",
      },
      yellow: {
        backgroundColor: "surface.color.cream",
      },
      darkYellow: {
        backgroundColor: "surface.color.yellow",
      },
      red: {
        backgroundColor: "surface.color.red",
      },
      green: {
        backgroundColor: "surface.color.green",
      },
      blue: {
        backgroundColor: "surface.color.blue",
      },
      orange: {
        backgroundColor: "surface.color.orange",
      },
    },
  },
  defaultVariants: {
    colorPalette: "white",
  },
});
