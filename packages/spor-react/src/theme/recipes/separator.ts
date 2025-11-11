import { defineRecipe } from "@chakra-ui/react";

export const separatorRecipe = defineRecipe({
  base: {
    display: "block",
    borderColor: "outline.disabled",
  },

  variants: {
    variant: {
      solid: {
        borderStyle: "solid",
      },
      dashed: {
        borderImageSlice: 1,
        borderImageSource: `repeating-linear-gradient(
            var(--gradient-direction),
            var(--spor-colors-outline-disabled) 0,
            var(--spor-colors-outline-disabled) var(--dash-size),
            transparent var(--dash-size),
            transparent calc(var(--dash-size) + var(--dash-gap))
          )`,
      },
    },
    orientation: {
      vertical: {
        height: "100%",
        borderInlineStartWidth: "var(--separator-thickness)",
        "--gradient-direction": "0deg",
      },
      horizontal: {
        width: "100%",
        borderTopWidth: "var(--separator-thickness)",
        "--gradient-direction": "90deg",
      },
    },
    size: {
      sm: {
        "--separator-thickness": "1px",
        borderRadius: "1px",
        "--dash-size": "2px",
        "--dash-gap": "3px",
      },
      md: {
        "--separator-thickness": "2px",
        borderRadius: "2px",
        "--dash-size": "4px",
        "--dash-gap": "4px",
      },
      lg: {
        "--separator-thickness": "3px",
        borderRadius: "3px",
        "--dash-size": "6px",
        "--dash-gap": "6px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "solid",
    orientation: "horizontal",
  },
});
