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
      maxWidth: "300px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      position: "relative",
      textStyle: "sm",
      border: "sm",
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      gap: 1.5,
      color: "text",
    },
    description: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
      alignItems: "flex-start",
    },
    title: {
      fontWeight: "bold",
    },
  },
  variants: {
    variant: {
      important: {
        root: {
          borderColor: "alert.important.outline",
          background: "alert.important.surface",
        },
        content: {
          color: "alert.important.text.secondary",
        },
        title: {
          color: "alert.important.text",
        },
        indicator: {
          color: "alert.important.icon",
        },
        closeButton: {
          color: "alert.important.text",
        },
      },
      alt: {
        root: {
          borderColor: "alert.alt.outline",
          background: "alert.alt.surface",
        },
        content: {
          color: "alert.alt.text.secondary",
        },
        title: {
          color: "alert.alt.text",
        },
        indicator: {
          color: "alert.alt.icon",
        },
        closeButton: {
          color: "alert.alt.text",
        },
      },
      error: {
        root: {
          borderColor: "alert.error.outline",
          background: "alert.error.surface",
        },
        content: {
          color: "alert.error.text.secondary",
        },
        title: {
          color: "alert.error.text",
        },
        indicator: {
          color: "alert.error.icon",
        },
        closeButton: {
          color: "alert.error.text",
        },
      },
      success: {
        root: {
          borderColor: "alert.success.outline",
          background: "alert.success.surface",
        },
        content: {
          color: "alert.important.text.secondary",
        },
        title: {
          color: "alert.success.text",
        },
        indicator: {
          color: "alert.success.icon",
        },
        closeButton: {
          color: "alert.success.text",
        },
      },
      info: {
        root: {
          borderColor: "alert.info.outline",
          background: "alert.info.surface",
        },
        content: {
          color: "alert.info.text.secondary",
        },
        title: {
          color: "alert.info.text",
        },
        indicator: {
          color: "alert.info.icon",
        },
        closeButton: {
          color: "alert.info.text",
        },
      },
      neutral: {
        root: {
          borderColor: "alert.neutral.outline",
          background: "alert.neutral.surface",
        },
        content: {
          color: "alert.neutral.text.secondary",
        },
        title: {
          color: "alert.neutral.text",
        },
        indicator: {
          color: "alert.neutral.icon",
        },

        closeButton: {
          color: "alert.neutral.text",
        },
      },
      "error-secondary": {
        root: {
          borderColor: "alert.error-secondary.outline",
          background: "alert.error-secondary.surface",
        },
        content: {
          color: "alert.error-secondary.text.secondary",
        },
        title: {
          color: "alert.error-secondary.text",
        },
        indicator: {
          color: "alert.error-secondary.icon",
        },
        closeButton: {
          color: "alert.error-secondary.text",
        },
      },
      service: {
        root: {
          borderColor: "alert.service.outline",
          background: "alert.service.surface",
        },
        content: {
          color: "alert.service.text.secondary",
        },
        title: {
          color: "alert.service.text",
        },
        indicator: {
          color: "alert.service.icon",
        },
        closeButton: {
          color: "alert.service.text",
          _hover: {
            bg: "alert.service.surface.hover",
            _active: {
              bg: "alert.service.surface.active",
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
});
