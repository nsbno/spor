import { defineRecipe } from "@chakra-ui/react";

export const separatorRecipe = defineRecipe({
  className: "spor-separator",
  base: {
    borderColor: "blackAlpha.300",
    display: "block",
  },
  variants: {
    variant: {
      solid: {
        borderStyle: "solid",
      },
      dashed: {
        borderStyle: "dashed",
      },
    },
    size: {
      sm: {
        borderBottomWidth: "1px",
        height: "1px",
      },
      md: {
        borderBottomWidth: "2px",
        height: "2px",
      },
      lg: {
        borderBottomWidth: "3px",
        height: "3px",
      },
    },
    orientation: {
      horizontal: {
        width: "100%",
      },
      vertical: {
        height: "100%",
      },
    },
  },
   compoundVariants: [
    {
      variant: "dashed",
      size: "sm",
      css: {
        width: "100%",
        borderWidth: "0px",
        background:' linear-gradient(to left, #b2b2b2, #b2b2b2 1px, transparent 1px, transparent 4px)',
        backgroundSize: "4px 1px",
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variant: "dashed",
      size: "md",
      css: {
        width: "100%",
        borderWidth: "0px",
        background:' linear-gradient(to left, #b2b2b2, #b2b2b2 3px, transparent 3px, transparent 6px)',
        backgroundSize: "9px 2px",
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variant: "dashed",
      size: "lg",
      css: {
        width: "100%",
        borderWidth: "0px",
        background:' linear-gradient(to left, #b2b2b2, #b2b2b2 3px, transparent 3px, transparent 9px)',
        backgroundSize: "9px 3px",
        backgroundRepeat: "repeat-x",
      },
    },
  ], 
});
