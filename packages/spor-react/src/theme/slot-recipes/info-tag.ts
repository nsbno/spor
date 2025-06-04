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
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      ferry: {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      subway: {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      tram: {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      "local-train": {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      "region-train": {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      "region-express-train": {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      "long-distance-train": {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      "airport-express-train": {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      "vy-bus": {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
      },
      "local-bus": {
        iconContainer: {
          icon: {
            color: "text",
          },
        },
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
