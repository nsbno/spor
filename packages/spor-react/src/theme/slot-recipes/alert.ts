import { defineSlotRecipe } from "@chakra-ui/react";

export const alertSlotRecipe = defineSlotRecipe({
  slots: ["root", "indicator", "title", "closeButton", "content"],
  className: "spor-alert",
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
          color: "text",
        },
      },
      "global-deviation": {
        root: {
          backgroundColor: "blonde",
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
