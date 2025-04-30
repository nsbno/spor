import { defineRecipe } from "@chakra-ui/react";

import { inputRecipe } from "./input";

export const textareaRecipe = defineRecipe({
  className: "spor-textarea",
  base: {
    ...inputRecipe.base,
    paddingTop: 0,
    minHeight: "calc(var(--label-height) + 4rem)",
    verticalAlign: "top",
    appearance: "none",
    borderTop: "0.8rem solid transparent",
    "&:focus-visible, &:not(:placeholder-shown)": {
      borderTop: "var(--label-height) solid transparent",
    },
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
