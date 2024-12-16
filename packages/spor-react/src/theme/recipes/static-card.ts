import { defineRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";

export const staticCardRecipe = defineRecipe({
  base: {
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    borderRadius: "md",
    color: "text",
    ...focusVisibleStyles(),
  },
  variants: {
    colorPalette: {
      white: {
        backgroundColor: "white",
        color: "text",
      },
      grey: {
        backgroundColor: "lightGrey",
      },
      green: {
        backgroundColor: "seaMist",
      },
      red: {
        backgroundColor: "pink",
      },
      darkBlue: {
        backgroundColor: "darkBlue",
        color: "white",
      },
      darkGreen: {
        backgroundColor: "pine",
        color: "white",
      },
      darkYellow: {
        backgroundColor: "banana",
      },
    },
  },
  defaultVariants: {
    colorPalette: "white",
  },
});
