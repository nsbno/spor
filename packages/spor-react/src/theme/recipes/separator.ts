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
        backgroundImage: `
          linear-gradient(
            90deg, 
            blackAlpha.400
             blackAlpha.300", 4px, 
            transparent 4px, 
            transparent 10px
          )
        `,
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        backgroundSize: "100% 3px",
        height: "1px",
        borderStyle: "dashed",

      },
    },
    size: {
      sm: {
        borderWidth: "1px",
        borderRadius: "0.5px",
      },
      md: {
        borderWidth: "2px",
        borderRadius: "1px",
      },
      lg: {
        borderWidth: "3px",
        borderRadius: "1.5px",
      },
    },
  },
  compoundVariants: [
    {
      variant: "dashed",
      size: "sm",
      css: {
        height: "1px",
      },
    },
    {
      variant: "dashed",
      size: "md",
      css: {
        height: "2px",
      },
    },
    {
      variant: "dashed",
      size: "lg",
      css: {
        height: "3px",
      },
    },
  ],
});
