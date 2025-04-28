import { defineRecipe } from "@chakra-ui/react";

export const separatorRecipe = defineRecipe({
  className: "spor-separator",
  base: {
    borderColor: "outline.disabled",
    display: "block",
    borderRadius: "xl",
  },
  variants: {
    variant: {
      solid: {
        borderStyle: "solid",
      },
      dashed: {
        width: "100%",
        borderWidth: "0px",
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
        borderLeftWidth: "1px",
      },
    },
  },
  compoundVariants: [
    {
      variant: "dashed",
      size: "sm",
      css: {
        background:
          "linear-gradient(to left, var(--spor-colors-outline-disabled), var(--spor-colors-outline-disabled) 1px, transparent 1px, transparent 4px)",
        backgroundSize: "4px 1px",
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variant: "dashed",
      size: "md",
      css: {
        background:
          "linear-gradient(to left, var(--spor-colors-outline-disabled), var(--spor-colors-outline-disabled) 3px, transparent 3px, transparent 6px)",
        backgroundSize: "9px 2px",
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variant: "dashed",
      size: "lg",
      css: {
        background:
          "linear-gradient(to left, var(--spor-colors-outline-disabled), var(--spor-colors-outline-disabled) 3px, transparent 3px, transparent 9px)",
        backgroundSize: "9px 3px",
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variant: "dashed",
      orientation: "vertical",
      css: {
        background: "0",
        width: "0%",
        height: "100%",
      },
    },
  ],
});
