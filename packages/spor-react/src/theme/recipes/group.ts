import { defineRecipe } from "@chakra-ui/react";

export const groupRecipe = defineRecipe({
  className: "spor-group",
  base: {
    fontSize: "lg",
  },
  variants: {
    disabled: {
      true: {
        "& > *": {
          pointerEvents: "none",
          backgroundColor: "surface.disabled",
          color: "text.disabled",
        },
      },
    },
  },
});
