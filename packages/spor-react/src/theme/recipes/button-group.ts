import { defineRecipe } from "@chakra-ui/react";

export const GroupRecipe = defineRecipe({
  base: {
    backgroundColor: "red",
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
