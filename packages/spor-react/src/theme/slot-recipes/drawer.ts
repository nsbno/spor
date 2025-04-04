import { defineSlotRecipe } from "@chakra-ui/react";
import { drawerAnatomy } from "./anatomy";

export const drawerSlotRecipe = defineSlotRecipe({
  slots: drawerAnatomy.keys(),
  className: "spor-drawer",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      position: "fixed",
      insetInlineStart: 0,
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
        animationDuration: "slow",
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
      background: "bg",
      position: "relative",
      width: "100%",
      outline: 0,
      zIndex: "modal",
      maxHeight: "100dvh",
      color: "inherit",
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
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingX: "5",
      paddingBottom: "1",
    },
    body: {
      paddingX: "5",
      paddingY: ["1", null, null, "2"],
      flex: "1",
      overflow: "auto",
      fontSize: ["xs", null, null, "sm"],
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      paddingX: "5",
      paddingTop: "2",
    },
    title: {
      fontSize: ["sm", null, null, "md"],
      fontWeight: "semibold",
      textAlign: "left",
    },
    closeTrigger: {
      position: "absolute",
      top: "2",
      insetEnd: "2",
    },
  },
  variants: {
    size: {
      xs: {
        content: {
          width: "15rem",
        },
      },
      sm: {
        content: {
          width: "25rem",
        },
      },
      md: {
        content: {
          width: "40rem",
        },
      },
      lg: {
        content: {
          width: "56rem",
        },
      },
      xl: {
        content: {
          width: "68rem",
        },
      },
      full: {
        content: {
          width: "100vw",
          height: "100vh",
          borderRadius: "0 !important",
          paddingBottom: "4",
        },
        closeTrigger: {
          position: "relative",
        },
        title: {
          textAlign: "center",
        },
      },
    },

    placement: {
      start: {
        positioner: {
          justifyContent: "flex-start",
        },
        content: {
          paddingTop: "4",
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
          paddingTop: "4",
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
          marginX: "auto",
          paddingTop: "4",
          borderBottomRadius: "lg",
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
          marginX: "auto",
          paddingBottom: "4",
          borderTopRadius: "lg",
          _open: { animationName: "slide-from-bottom-full, fade-in" },
          _closed: { animationName: "slide-to-bottom-full, fade-out" },
        },
      },
    },
  },
});
