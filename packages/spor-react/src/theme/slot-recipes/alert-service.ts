import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";

export const alertServiceSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "itemTrigger",
    "itemTriggerTitle",
    "notificationText",
    "itemContent",
  ],
  className: "spor-service-alert",
  base: {
    root: {
      fontSize: "inherit",
      transitionProperty: "outline, border-radius",
      transitionDuration: "fast",
      borderTopRadius: "none",
      borderBottomRadius: "md",
      backgroundColor: "alert.service.surface",
      outline: "1px solid",
      outlineColor: "alert.service.outline",
      color: "text.inverted",
      boxShadow: "sm",
    },
    itemTrigger: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: [2, null, null, 2],
      borderBottomRadius: "md",
      borderTopRadius: "none",
      width: "full",
      color: "text.inverted",
      "&:hover": {
        backgroundColor: "alert.service.surface.hover",
      },
      "&:active": {
        backgroundColor: "alert.service.surface.active",
      },
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
        outlineOffset: "1px",
      },
      _focus: {
        ...focusVisibleStyles()._focusVisible,
        outlineOffset: "1px",
      },
    },
    itemTriggerTitle: {
      fontSize: ["xs", null, null, "sm"],
    },
    notificationText: {
      fontWeight: "400",
      fontSize: ["2xs", null, null, "xs"],
      textWrap: "nowrap",
    },
    itemContent: {
      paddingX: "0.75rem",
      paddingTop: "0.375rem",
      paddingBottom: "0.9375rem",
      color: "inherit",
    },
  },
});
