import { defineRecipe } from "@chakra-ui/react";

export const groupRecipe = defineRecipe({
  className: "spor-group",
  base: {
    fontSize: "lg",
    _disabled: {
      "& > *": {
        pointerEvents: "none",
        backgroundColor: "surface.disabled",
        color: "text.disabled",
      },
    },
  },
});
