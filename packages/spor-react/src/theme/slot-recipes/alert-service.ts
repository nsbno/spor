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

      _icon: {
        color: "text",
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
    itemBody: {
      marginX: "auto",
      padding: "0 !important",
      paddingBottom: ["0.5", null, null, "1"],
      color: "text.inverted",
      "& > p": {
        gap: 2,
        width: "full",
        borderBottom: "1px dashed",
        borderColor: "outline.inverted",
        paddingBottom: "3",
        paddingTop: "2",
        _last: {
          borderBottom: "none",
        },
      },
    },
  },
});
