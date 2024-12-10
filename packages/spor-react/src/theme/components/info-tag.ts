import { defineSlotRecipe } from "@chakra-ui/react";
import { travelTagSlotRecipe } from "./travel-tag";

export const infoTagSlotRecipe = defineSlotRecipe({
  slots: [
    "container",
    "iconContainer",
    "icon",
    "textContainer",
    "title",
    "description",
    "walk",
  ],
  className: "spor-info-tag",
  base: {
    ...travelTagSlotRecipe.base,
    iconContainer: {
      ...travelTagSlotRecipe.base?.iconContainer,
      padding: 1,
    },
    textContainer: {
      color: "text.default",
    },
  },
  variants: {
    size: {
      ...travelTagSlotRecipe.variants?.size,
      sm: {
        ...travelTagSlotRecipe.variants?.size!.sm,
        iconContainer: {
          borderRadius: "0.375rem",
        },
      },
      md: {
        ...travelTagSlotRecipe.variants?.size!.md,
        iconContainer: {
          borderRadius: "0.375rem",
        },
      },
      lg: {
        ...travelTagSlotRecipe.variants?.size!.lg,
        iconContainer: {
          borderRadius: "sm",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default infoTagSlotRecipe;
