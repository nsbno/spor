import { defineSlotRecipe } from "@chakra-ui/react";
import { coreText } from "../utils/core-utils";
import { bg } from "../utils/bg-utils";
import { drawerAnatomy } from "./anatomy";

export const drawerSlotRecipe = defineSlotRecipe({
  slots: drawerAnatomy.keys(),
  className: "spor-drawer",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      insetInlineStart: 0,
      top: 0,
      w: "100vw",
      h: "100dvh",
      zIndex: "modal",
      _open: {
        animationName: "fade-in",
        animationDuration: "slow",
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "moderate",
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

/* overlay: {
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
  ...coreText("default"),
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
}, */