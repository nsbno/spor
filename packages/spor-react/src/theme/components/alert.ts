import { defineSlotRecipe } from "@chakra-ui/react";

export const alertSlotRecipe = defineSlotRecipe({
  slots: ["container", "icon", "closeButton"],
  className: "spor-alert",
  base: {
    container: {
      borderRadius: "sm",
      color: "darkGrey",
      paddingX: 3,
      paddingY: 2,
      display: "flex",
      position: "relative",
      textStyle: "sm",
    },
    icon: {
      marginRight: 1,
    },
    closeButton: {
      position: "absolute",
      top: 1,
      right: 1,
      color: "darkGrey",
    },
  },
  variants: {
    variant: {
      success: {
        container: {
          backgroundColor: "seaMist",
        },
      },
      info: {
        container: {
          backgroundColor: "lightBlue",
        },
      },
      warning: {
        container: {
          backgroundColor: "blonde",
        },
      },
      error: {
        container: {
          backgroundColor: "lightRed",
        },
      },
      "alt-transport": {
        container: {
          backgroundColor: "banana",
        },
      },
      "global-deviation": {
        container: {
          backgroundColor: "blonde",
        },
      },
      service: {
        container: {
          backgroundColor: "darkTeal",
          color: "white",
        },
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export default alertSlotRecipe;