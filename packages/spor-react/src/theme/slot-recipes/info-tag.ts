import { defineSlotRecipe } from "@chakra-ui/react";

import { infoTagAnatomy } from "./anatomy";
import { travelTagSlotRecipe } from "./travel-tag";

export const infoTagSlotRecipe = defineSlotRecipe({
  slots: infoTagAnatomy.keys(),
  className: "spor-info-tag",
  base: {
    ...travelTagSlotRecipe.base,
    iconContainer: {},
    textContainer: {
      color: "text",
    },
    container: {
      display: "flex",
      position: "relative",
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
    },
    description: {
      fontWeight: "normal",
    },
  },
  variants: {
    variant: {
      walk: {
        iconContainer: {},
      },
      ferry: {
        iconContainer: {},
      },
      subway: {
        iconContainer: {},
      },
      tram: {
        iconContainer: {},
      },
      "local-train": {
        iconContainer: {},
      },
      "region-train": {
        iconContainer: {},
      },
      "region-express-train": {
        iconContainer: {},
      },
      "long-distance-train": {
        iconContainer: {},
      },
      "airport-express-train": {
        iconContainer: {},
      },
      "vy-bus": {
        iconContainer: {},
      },
      "local-bus": {
        iconContainer: {},
      },
    },
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
