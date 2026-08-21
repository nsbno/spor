import { defineSlotRecipe } from "@chakra-ui/react";

import { tabsAnatomy } from "./anatomy";

export const tabsSlotRecipe = defineSlotRecipe({
  slots: tabsAnatomy.keys(),
  className: "spor-tabs",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    list: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      borderRadius: "xl",
      width: "fit-content",
      position: "relative",
      overflow: "hidden",
    },
    trigger: {
      display: "flex",
      cursor: "pointer",
      justifyContent: "center",
      alignItems: "center",
      transitionProperty: "common",
      transitionDuration: "normal",
      height: "100%",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      position: "relative",
      _selected: {
        color: "text.brand",
        transition: "transform  0.2s ease",
        _hover: {
          backgroundColor: "surface.brand",
        },
      },
    },
    indicator: {
      position: "absolute",
      top: "3px",
      left: 0,
      width: "var(--width)",
      height: "var(--height)",
      transform: "translate(var(--x), var(--y))",
      transition: "transform 0.2s ease, width 0.2s ease",
      borderRadius: "xl",
      backgroundColor: "surface.brand",
      _hover: {
        backgroundColor: "surface.brand.hover",
        outline: "none",
      },
    },
  },
  variants: {
    fitted: {
      true: {
        list: {
          display: "flex",
          width: "auto",
        },
        trigger: {
          flex: 1,
          textAlign: "center",
          justifyContent: "center",
        },
      },
    },
    justify: {
      start: {
        list: {
          justifyContent: "flex-start",
        },
      },
      center: {
        list: {
          justifyContent: "center",
        },
      },
      end: {
        list: {
          justifyContent: "flex-end",
        },
      },
    },
    variant: {
      core: {
        list: {
          color: "text.core",
          border: "sm",
        },
        trigger: {
          color: "text.core",
          border: "md",
          borderColor: "transparent",
          _hover: {
            outline: "2px solid",
            outlineColor: "outline.core.hover",
            outlineOffset: "-2px",
            _active: {
              backgroundColor: "surface.core.active",
              outline: "none",
              outlineColor: "transparent",
            },
          },

          _disabled: {
            backgroundColor: "surface.disabled",
            color: "surface.disabled",
          },
        },
      },
      accent: {
        list: {
          backgroundColor: "surface.accent",
          color: "text.accent",
        },
        trigger: {
          color: "text.accent",

          _disabled: {
            backgroundColor: "surface.disabled",
            color: "icon.disabled",
          },
          _hover: {
            backgroundColor: "surface.accent.hover",
            _active: {
              backgroundColor: "surface.accent.active",
            },
          },
        },
        indicator: {
          backgroundColor: "surface.brand",
          _hover: {
            backgroundColor: "surface.brand.hover",
            outline: "none",
          },
        },
      },
    },
    size: {
      xs: {
        list: {
          height: 5,
          padding: "0.1rem",
        },
        trigger: {
          paddingX: 2,
          paddingY: 0,
        },
        indicator: {
          top: "2px",
        },
      },
      sm: {
        list: {
          height: 6,
          padding: 0.5,
        },
        trigger: {
          paddingX: 2,
        },
      },
      md: {
        list: {
          height: 7,
          padding: 0.5,
        },
        trigger: {
          fontWeight: "bold",
          paddingX: 2,
        },
      },
      lg: {
        list: {
          height: 8,
          padding: "0.2rem",
        },
        trigger: {
          fontWeight: "bold",
          fontSize: "sm",
          paddingX: 3,
        },
      },
    },
  },
});
