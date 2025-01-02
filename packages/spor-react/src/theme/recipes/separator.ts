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
        borderWidth: "0.5px",
        borderRadius: "1px",
      },
      md: {
        borderWidth: "1.5px",
        borderRadius: "1px",
      },
      lg: {
        borderWidth: "2px",
        borderRadius: "1px",
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
        borderWidth: "0.5px",
        height: "0.5px",
      },
    },
    {
      variant: "dashed",
      size: "md",
      css: {
        borderWidth: "1px",
        height: "1px",
      },
    },
    {
      variant: "dashed",
      size: "lg",
      css: {
        borderWidth: "1.5px",
        height: "1.5px",
      },
    },
    {
      variant: "dashed",
      css: {
        borderRadius: "unset",
      },
    },
  ],
});