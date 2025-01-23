import { defineRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";

export const staticCardRecipe = defineRecipe({
  base: {
    borderRadius: "md",
  },
  variants: {
    colorPalette: {
      white: {
        backgroundColor: "white",
        color: "text",
      },
      grey: {
        backgroundColor: "silver",
      },
      green: {
        backgroundColor: "seaMist",
      },
      darkGreen: {
        backgroundColor: "pine",
        color: "white",
      }, 
      orange: {
        backgroundColor: "champagne",
      },
      red: {
        backgroundColor: "lightRed",
      },
      yellow: {
        backgroundColor: "blonde",
      },
      darkYellow: {
        backgroundColor: "banana",
      },
      blue: {
        backgroundColor: "lightBlue",
      },
      darkBlue: {
        backgroundColor: "darkBlue",
        color: "white",
      }, 
    },
  },
});
