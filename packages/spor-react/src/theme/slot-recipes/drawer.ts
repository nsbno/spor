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
    positioner: {
      display: "flex",
      width: "100vw",
      height: "100dvh",
      position: "fixed",
      insetInlineStart: 0,
      top: 0,
      zIndex: "modal",
      overscrollBehaviorY: "none",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      zIndex: "modal",
      textStyle: "sm",
      maxH: "100dvh",
      color: "inherit",
      bg: "bg.panel",
      boxShadow: "lg",
      _open: {
        animationDuration: "slowest",
        animationTimingFunction: "ease-in-smooth",
      },
      _closed: {
        animationDuration: "slower",
        animationTimingFunction: "ease-in-smooth",
      },
    },
    header: {
      flex: 0,
      px: "6",
      pt: "6",
      pb: "4",
    },
    body: {
      px: "6",
      py: "2",
      flex: "1",
      overflow: "auto",
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
    size: {
      xs: {
        content: {
          maxW: "xs",
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
      full: {
        content: {
          maxW: "100vw",
          h: "100dvh",
        },
      },
    },

    placement: {
      start: {
        positioner: {
          justifyContent: "flex-start",
        },
        content: {
          _open: {
            animationName: {
              base: "slide-from-left-full, fade-in",
              _rtl: "slide-from-right-full, fade-in",
            },
          },
          _closed: {
            animationName: {
              base: "slide-to-left-full, fade-out",
              _rtl: "slide-to-right-full, fade-out",
            },
          },
        },
      },

      end: {
        positioner: {
          justifyContent: "flex-end",
        },
        content: {
          _open: {
            animationName: {
              base: "slide-from-right-full, fade-in",
              _rtl: "slide-from-left-full, fade-in",
            },
          },
          _closed: {
            animationName: {
              base: "slide-to-right-full, fade-out",
              _rtl: "slide-to-right-full, fade-out",
            },
          },
        },
      },

      top: {
        positioner: {
          alignItems: "flex-start",
        },
        content: {
          maxW: "100%",
          _open: { animationName: "slide-from-top-full, fade-in" },
          _closed: { animationName: "slide-to-top-full, fade-out" },
        },
      },

      bottom: {
        positioner: {
          alignItems: "flex-end",
        },
        content: {
          maxW: "100%",
          _open: { animationName: "slide-from-bottom-full, fade-in" },
          _closed: { animationName: "slide-to-bottom-full, fade-out" },
        },
      },
    },

    contained: {
      true: {
        positioner: {
          padding: "4",
        },
        content: {
          borderRadius: "l3",
        },
      },
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
