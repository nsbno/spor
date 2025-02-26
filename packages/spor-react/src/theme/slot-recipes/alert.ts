import { defineSlotRecipe } from "@chakra-ui/react";
import { alertAnatomy } from "./anatomy";

export const alertSlotRecipe = defineSlotRecipe({
  className: "spor-alert",
  slots: alertAnatomy.keys(),
  base: {
    root: {
      borderRadius: "sm",
      padding: 2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      position: "relative",
      textStyle: "sm",
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      gap: 1.5,
      color: "text",
    },
    title: {
      fontWeight: "bold",
    },
  },
  variants: {
    variant: {
      success: {
        root: {
          backgroundColor: "alert.success.surface",
          color: "text",
        },
        indicator: {
          color: "primaryGreen",
        },
      },
      info: {
        root: {
          backgroundColor: "alert.info.surface",
        },
        indicator: {
          color: "darkBlue",
        },
      },
      important: {
        root: {
          backgroundColor: "alert.important.surface",
        },
        indicator: {
          color: "darkGrey",
        },
      },
      error: {
        root: {
          backgroundColor: "alert.error.surface",
        },
        indicator: {
          color: "brightRed",
        },
      },
      "alt-transport": {
        root: {
          backgroundColor: "alert.alt.surface",
        },
        indicator: {
          color: "icon",
        },
      },
      "global-deviation": {
        root: {
          backgroundColor: "alert.important.surface",
        },
        indicator: {
          color: "darkGrey",
        },
      },
      service: {
        root: {
          backgroundColor: "alert.service.surface",
        },
        indicator: {
          color: "darkGrey",
        },
      },
    },
  },
});
