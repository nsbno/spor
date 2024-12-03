import { defineRecipe } from "@chakra-ui/react";
import { inputBaseStyle, inputVariant } from "../utils/input-utils";

export const textareaRecipe = defineRecipe({
  className: "spor-textarea",
  base: {
    minHeight: "5rem",
    verticalAlign: "top",
    appearance: "none",
    paddingTop: 2,
    transitionProperty: "common",
    transitionDuration: "normal",
    "&:not(:placeholder-shown)": {
      "&:has(+ label)": {
        paddingTop: 4,
      },
      "& + label": {
        transform: "scale(0.825) translateY(-10px)",
      },
    },
    _disabled: {
      cursor: "not-allowed",
      pointerEvents: "none",
      boxShadow: "none",
      ...inputBaseStyle().field,
    },
  },
  variants: {
    variant: {
      base: {
        ...inputVariant("base"),
      },
      floating: {
        ...inputVariant("floating"),
      },
    },
    size: {
      sm: {
        fontSize: "sm",
        padding: 2,
        borderRadius: "md",
      },
      md: {
        fontSize: "md",
        padding: 3,
        borderRadius: "md",
      },
      lg: {
        fontSize: "lg",
        padding: 4,
        borderRadius: "lg",
      },
    },
  },
  defaultVariants: {
    variant: "base",
    size: "md",
  },
});
