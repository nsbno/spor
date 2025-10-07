import { defineSlotRecipe } from "@chakra-ui/react";

import { alertServiceAnatomy } from "./anatomy";

export const alertServiceSlotRecipe = defineSlotRecipe({
  className: "spor-service-alert",
  slots: alertServiceAnatomy.keys(),
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
      padding: ["2", "3"],
      paddingBottom: "1",
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

      _icon: {
        color: "text",
      },
    },
    itemTriggerTitle: {
      fontSize: ["mobile.sm", "desktop.sm"],
    },
    notificationText: {
      fontWeight: "400",
      fontSize: ["mobile.xs", "desktop.xs"],
      textWrap: "nowrap",
      color: "alert.service.text.secondary",
    },

    itemContent: {
      paddingX: ["2", "3"],
      paddingBottom: ["2", "3"],
      paddingTop: ["1", "2"],
    },

    itemBody: {
      marginX: "auto",
      padding: "0 !important",
      color: "alert.service.text.secondary",
      gap: 0,
      flexDirection: "column",
      display: "flex",
      "& > p": {
        width: "full",
        borderBottom: "1px dashed",
        borderColor: "outline.inverted",

        paddingY: ["1", "1.5"],

        _first: {
          paddingTop: 0,
        },
        _last: {
          borderBottom: "none",
          paddingBottom: 0,
        },
      },
    },
  },
});
