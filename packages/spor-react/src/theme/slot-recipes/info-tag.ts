import { defineSlotRecipe } from "@chakra-ui/react";
import { travelTagSlotRecipe } from "./travel-tag";
import { infoTagAnatomy } from "./anatomy";

export const infoTagSlotRecipe = defineSlotRecipe({
  slots: infoTagAnatomy.keys(),
  className: "spor-info-tag",
  base: {
    ...travelTagSlotRecipe.base,
    iconContainer: {
      ...travelTagSlotRecipe.base?.iconContainer,
      padding: 1,
    },
    textContainer: {
      color: "text",
    },
    container: {
      display: "flex",
      position: "relative",
      alignItems: "center",
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
