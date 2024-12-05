import { defineSlotRecipe } from "@chakra-ui/react";

export const serviceAlertSlotRecipe = defineSlotRecipe({
  slots: ["container", "outerBox", "notificationText", "serviceMessageContent"],
  className: "spor-service-alert",
  base: {
    container: {
      paddingX: 0,
      paddingY: 2,
      fontSize: "inherit",
      transitionProperty: "outline, border-radius",
      transitionDuration: "fast",
      borderTopRadius: "none",
      borderBottomRadius: "md",
      _hover: {
        outline: "2px solid",
      },
    },
    outerBox: {
      outline: "1px solid",
      borderBottomRadius: "md",
      borderTopRadius: "none",
      width: "100%",
    },
    notificationText: {
      fontWeight: "400",
      fontSize: "1rem",
      pr: "0.375rem",
    },
    serviceMessageContent: {
      paddingX: "0.75rem",
      paddingTop: "0.375rem",
      paddingBottom: "0.9375rem",
    },
  },
  variants: {
    variant: {
      "global-deviation": {
        container: {
          _hover: {
            outlineColor: "primrose",
          },
          _active: {
            backgroundColor: "blonde",
            outlineColor: "primrose",
          },
          color: "darkGrey",
        },
        outerBox: {
          outlineColor: "primrose",
          backgroundColor: "blonde",
        },
        notificationText: {
          color: "darkGrey",
        },
        serviceMessageContent: {
          color: "darkGrey",
        },
      },
      service: {
        container: {
          _hover: {
            outlineColor: "blueGreen",
          },
          _active: {
            backgroundColor: "pine",
            outlineColor: "pine",
          },
          color: "white",
        },
        outerBox: {
          outlineColor: "blueGreen",
          backgroundColor: "darkTeal",
        },
        notificationText: {
          color: "white",
        },
        serviceMessageContent: {
          color: "white",
        },
      },
    },
  },
  defaultVariants: {
    variant: "service",
  },
});
