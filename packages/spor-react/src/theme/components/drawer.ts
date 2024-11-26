import { drawerAnatomy, modalAnatomy as parts } from "@chakra-ui/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";
import { type PartsStyleObject } from "@chakra-ui/theme-tools";
import { baseText } from "../utils/base-utils";
import { bg } from "../utils/bg-utils";

export const drawerRecipe = defineSlotRecipe({
  slots: [
    "overlay",
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer",
  ],
  className: "spor-drawer",
  base: {
    overlay: {
      backgroundColor: "blackAlpha.600",
      zIndex: "modal",
      color: "red",
    },
    dialogContainer: {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: "flex-start",
      overflow: "auto",
    },
    dialog: {
      ...bg("default"),
      ...baseText("default"),
      zIndex: "modal",
      maxHeight: "calc(100% - 7.5rem)",
      boxShadow: "md",
    },
    header: {
      paddingX: 3,
      paddingTop: 6,
      paddingBottom: 2,
      fontWeight: "bold",
      fontFamily: "body",
    },
    closeButton: {
      position: "absolute",
      top: 3,
      insetEnd: 3,
      zIndex: "modal",
    },
    body: {
      paddingX: 3,
      paddingBottom: 6,
      flex: 1,
      overflow: "auto",
    },
    footer: {
      paddingX: 3,
      paddingBottom: 3,
    },
  },
  variants: {},
});

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string): PartsStyleObject<typeof parts> {
  if (value === "full") {
    return {
      dialog: {
        maxWidth: "100vw",
        minHeight: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minHeight: "-webkit-fill-available",
        },
        marginY: 0,
      },
    };
  }
  return {
    dialog: { maxWidth: value },
  };
}
