import { defineRecipe } from "@chakra-ui/react";
import { useColorModeValue } from "../../color-mode";

export const dividerRecipe = defineRecipe({
  base: {
    borderColor: useColorModeValue("blackAlpha.300", "whiteAlpha.300"),
  },
  variants: {
    variant: {
      solid: {
        borderStyle: "solid",
      },
      dashed: {
        backgroundImage: `repeating-linear-gradient(90deg, ${useColorModeValue("blackAlpha.300", "whiteAlpha.300")}, ${useColorModeValue("blackAlpha.300", "whiteAlpha.300")} 4px, transparent 4px, transparent 10px)`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        backgroundSize: "100% 3px",
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
    {
      variant: "dashed",
      css: {
        borderRadius: "unset",
        borderWidth: "unset",
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    size: "md",
    orientation: "horizontal",
  },
});
