import { defineSlotRecipe } from "@chakra-ui/react";



export const alertSlotRecipe = defineSlotRecipe({
  slots: ["root", "icon", "closeButton"],
  className: "spor-alert",
  base: {
    root: {
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
        root: {
          backgroundColor: "seaMist",
        },
      },
      info: {
        root: {
          backgroundColor: "lightBlue",
        },
      },
      warning: {
        root: {
          backgroundColor: "blonde",
        },
      },
      error: {
        root: {
          backgroundColor: "lightRed",
        },
      },
      "alt-transport": {
        root: {
          backgroundColor: "banana",
        },
      },
      "global-deviation": {
        root: {
          backgroundColor: "blonde",
        },
      },
      service: {
        root: {
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
