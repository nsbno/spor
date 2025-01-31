import { defineSlotRecipe } from "@chakra-ui/react";
import { bg } from "../utils/bg-utils";
import { coreText } from "../utils/core-utils";
import { dialogAnatomy } from "./anatomy";

export const dialogSlotRecipe = defineSlotRecipe({
  slots: dialogAnatomy.keys(),
  className: "spor-dialog",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      left: 0,
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
    positioner: {
      display: "flex",
      width: "100vw",
      height: "100dvh",
      position: "fixed",
      left: 0,
      top: 0,
      "--dialog-z-index": "zIndex.modal",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
      justifyContent: "center",
      overscrollBehaviorY: "none",
    },
    content: {
      display: "flex",
      backgroundColor: "white",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      borderRadius: "lg",
      marginY: "3.75rem",
      textStyle: "sm",
      "--dialog-z-index": "zIndex.modal",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
      bg: "bg.panel",
      boxShadow: "lg",
      _open: {
        animationDuration: "moderate",
      },
      _closed: {
        animationDuration: "faster",
      },
    },
    header: {
      flex: 0,
      px: "6",
      pt: "6",
      pb: "4",
    },
    body: {
      flex: "1",
      px: "6",
      pt: "2",
      pb: "6",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      px: "6",
      pt: "2",
      pb: "4",
    },
    title: {
      textStyle: "lg",
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
    },
  },

  variants: {
    placement: {
      center: {
        positioner: {
          alignItems: "center",
        },
        content: {
          "--dialog-base-margin": "auto",
          mx: "auto",
        },
      },
      top: {
        positioner: {
          alignItems: "flex-start",
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto",
        },
      },
      bottom: {
        positioner: {
          alignItems: "flex-end",
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto",
        },
      },
    },

    scrollBehavior: {
      inside: {
        positioner: {
          overflow: "hidden",
        },
        content: {
          maxH: "calc(100% - 7.5rem)",
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
          maxW: "sm",
        },
      },
      sm: {
        content: {
          maxW: "md",
        },
      },
      md: {
        content: {
          maxW: "lg",
        },
      },
      lg: {
        content: {
          maxW: "2xl",
        },
      },
      xl: {
        content: {
          maxW: "4xl",
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
      full: {
        content: {
          maxW: "100vw",
          minH: "100vh",
          "--dialog-margin": "0",
          borderRadius: "0",
          marginY: 0,
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
/*  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      left: 0,
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
}); */

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
