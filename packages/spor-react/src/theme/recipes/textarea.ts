import { defineRecipe } from "@chakra-ui/react";
import { inputRecipe } from "./input";

export const textareaRecipe = defineRecipe({
  className: "spor-textarea",
  base: {
    ...inputRecipe.base,
    minHeight: "5rem",
    paddingTop: 4,
  },
  variants: {
    variant: {
      core: {
        ...inputRecipe.variants?.variant.core,
      },
      floating: {
        ...inputRecipe.variants?.variant.floating,
      },
    },
  },
});
