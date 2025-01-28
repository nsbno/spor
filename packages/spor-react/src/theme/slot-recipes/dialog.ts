import { defineSlotRecipe } from "@chakra-ui/react";
import { bg } from "../utils/bg-utils";
import { coreText } from "../utils/core-utils";

export const dialogSlotRecipe = defineSlotRecipe({
  slots: [
    "overlay",
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer",
  ],
  className: "spor-modal",
  base: {
    overlay: {
      backgroundColor: "blackAlpha.600",
      zIndex: "modal",
    },
    dialogContainer: {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: "flex-start",
      overflow: "auto",
    },
    dialog: {
      borderRadius: "md",
      ...bg("default"),
      ...coreText("default"),
      marginY: "3.75rem",
      zIndex: "modal",
      boxShadow: "md",
    },
    header: {
      paddingX: 5,
      paddingTop: 6,
      paddingBottom: 2,
      fontWeight: "bold",
      fontFamily: "body",
    },
    closeButton: {
      position: "absolute",
      color: "inherit",
      top: 3,
      insetEnd: 3,
    },
    body: {
      paddingX: 5,
      paddingBottom: 6,
      flex: 1,
    },
    footer: {
      paddingX: 3,
      paddingBottom: 3,
    },
  },
  variants: {
    size: {
      xs: getSize("xs"),
      sm: getSize("sm"),
      md: getSize("md"),
      lg: getSize("lg"),
      xl: getSize("xl"),
      "2xl": getSize("2xl"),
      "3xl": getSize("3xl"),
      "4xl": getSize("4xl"),
      "5xl": getSize("5xl"),
      "6xl": getSize("6xl"),
      full: getSize("full"),
    },
  },
});

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
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
