import { defineSlotRecipe } from "@chakra-ui/react";

import { dialogAnatomy } from "./anatomy";

export const dialogSlotRecipe = defineSlotRecipe({
  slots: dialogAnatomy.keys(),
  className: "spor-dialog",
  base: {
    backdrop: {
      background: "blackAlpha.500",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100dvh",
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
    positioner: {
      display: "flex",
      width: "100vw",
      height: "100dvh",
      position: "fixed",
      left: 0,
      top: 0,
      "--dialog-z-index": "zIndex.modal",
      zIndex: "modal",
      justifyContent: "center",
      overscrollBehaviorY: "none",
    },
    content: {
      display: "flex",
      backgroundColor: "bg",
      flexDirection: "column",
      position: "relative",
      width: "full",
      outline: 0,
      borderRadius: "lg",
      marginY: "3.75rem",
      textStyle: "sm",
      boxShadow: "lg",
      _open: {
        animationDuration: "moderate",
      },
      _closed: {
        animationDuration: "faster",
      },
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 0,
      paddingX: "6",
      paddingTop: "6",
      paddingBottom: "2",
    },
    body: {
      flex: "1",
      paddingX: "6",
      paddingTop: "2",
      paddingBottom: "4",
      fontSize: ["xs", null, null, "sm"],
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      paddingX: "6",
      paddingTop: "2",
      paddingBottom: "4",
    },
    title: {
      fontSize: ["md", null, null, "lg"],
      fontFamily: "heading",
      fontWeight: "medium",
    },
    closeTrigger: {
      position: "absolute",
      top: "2",
      insetEnd: "2",
      "& svg": {
        color: "icon",
      },
    },
  },

  variants: {
    placement: {
      center: {
        positioner: {
          alignItems: "center",
        },
        content: {
          marginX: "auto",
        },
      },
      top: {
        positioner: {
          alignItems: "flex-start",
        },
        content: {
          marginX: "auto",
        },
      },
      bottom: {
        positioner: {
          alignItems: "flex-end",
        },
        content: {
          marginX: "auto",
        },
      },
    },

    scrollBehavior: {
      inside: {
        positioner: {
          overflow: "hidden",
        },
        content: {
          maxHeight: "calc(100% - 7.5rem)",
        },
        body: {
          overflow: "auto",
        },
      },
      outside: {
        positioner: {
          overflow: "auto",
          pointerEvents: "auto",
        },
      },
    },

    size: {
      xs: {
        content: {
          maxWidth: "sm",
        },
      },
      sm: {
        content: {
          maxWidth: "md",
        },
      },
      md: {
        content: {
          maxWidth: "lg",
        },
      },
      lg: {
        content: {
          maxWidth: "2xl",
        },
      },
      xl: {
        content: {
          maxWidth: "4xl",
        },
      },
      cover: {
        positioner: {
          padding: "10",
        },
        content: {
          width: "100%",
          height: "100%",
          "--dialog-margin": "0",
        },
      },
    },

    motionPreset: {
      scale: {
        content: {
          _open: { animationName: "scale-in, fade-in" },
          _closed: { animationName: "scale-out, fade-out" },
        },
      },
      "slide-in-bottom": {
        content: {
          _open: { animationName: "slide-from-bottom, fade-in" },
          _closed: { animationName: "slide-to-bottom, fade-out" },
        },
      },
      "slide-in-top": {
        content: {
          _open: { animationName: "slide-from-top, fade-in" },
          _closed: { animationName: "slide-to-top, fade-out" },
        },
      },
      "slide-in-left": {
        content: {
          _open: { animationName: "slide-from-left, fade-in" },
          _closed: { animationName: "slide-to-left, fade-out" },
        },
      },
      "slide-in-right": {
        content: {
          _open: { animationName: "slide-from-right, fade-in" },
          _closed: { animationName: "slide-to-right, fade-out" },
        },
      },
      none: {},
    },
  },
  defaultVariants: {
    size: "md",
    scrollBehavior: "outside",
    placement: "top",
    motionPreset: "scale",
  },
});
