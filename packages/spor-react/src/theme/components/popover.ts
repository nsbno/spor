import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";

export const popoverSlotRecipe = defineSlotRecipe({
  slots: [
    "content",
    "header",
    "body",
    "footer",
    "arrow",
    "arrowTip",
    "closeTrigger",
  ],
  className: "spor-popover",
  base: {
    content: {
      zIndex: "popover",
    },
    body: {
      "--popover-bg": "brand.surface.tertiary",
      backgroundColor: "---popover-bg",
      "--arrow-bg": "---popover-bg",
      "--arrow-shadow-color": "blackAlpha.300",
      color: "white", // TODO: Should this be a semantic token? Where does it fit in?
      borderRadius: "sm",
      padding: 1.5,
      zIndex: "inherit",
      maxWidth: "20em",
    },
    arrow: {
      backgroundColor: "transparent",
      boxShadow: "none",
      clipPath:
        "path('M 0 0 Q 2.4 6 0 12 Q 6 9.6 12 12 Q 9.6 6 12 0 Q 6 2.4 0 0 z')",
    },
    closeTrigger: {
      position: "absolute",
      color: "white",
      ...focusVisibleStyles(),
      _hover: {
        backgroundColor: "whiteAlpha.100",
      },
      _active: {
        backgroundColor: "whiteAlpha.200",
      },
      borderRadius: "sm",
      top: 2,
      right: 1,
    },
  },
  variants: {
    size: {
      sm: {
        content: {
          paddingX: 1.5,
          paddingY: 1,
        },
      },
      lg: {
        content: {
          paddingX: 3,
          paddingY: 2,
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
