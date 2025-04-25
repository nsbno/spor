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
    description: {
      display: "flex",
      alignItems: "flex-start",
      gap: 1.5,
      color: "text",
    },
    content: {
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
        description: {
          color: "alert.important.text.secondary",
        },
        title: {
          color: "alert.important.text",
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
        description: {
          color: "alert.alt.text.secondary",
        },
        title: {
          color: "alert.alt.text",
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
        description: {
          color: "alert.error.text.secondary",
        },
        title: {
          color: "alert.error.text",
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
        description: {
          color: "alert.important.text.secondary",
        },
        title: {
          color: "alert.success.text",
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
        description: {
          color: "alert.info.text.secondary",
        },
        title: {
          color: "alert.info.text",
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
        description: {
          color: "alert.neutral.text.secondary",
        },
        title: {
          color: "alert.neutral.text",
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
        description: {
          color: "alert.error-secondary.text.secondary",
        },
        title: {
          color: "alert.error-secondary.text",
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
        description: {
          color: "alert.service.text.secondary",
        },
        title: {
          color: "alert.service.text",
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
