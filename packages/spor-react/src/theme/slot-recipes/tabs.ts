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
      ".spor-tabs__list:has(.spor-tabs__indicator) &": {
        transition: "color 0.2s ease",
      },
      _selected: {
        color: "text.brand",
        // @ts-expect-error — valid CSS selector, not recognized by Chakra's types
        ".spor-tabs__list:not(:has(.spor-tabs__indicator)) &[data-selected]": {
          backgroundColor: "surface.brand",
          _hover: {
            backgroundColor: "surface.brand",
          },
        },
      },
    },
    indicator: {
      position: "absolute",
      top: "2.5px",
      left: 0,
      width: "var(--width)",
      height: "var(--height)",
      transform: "translate(var(--x), var(--y))",
      transition: "transform 0.2s ease, width 0.2s ease",
      borderRadius: "xl",
      backgroundColor: "surface.brand",
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
          borderColor: "outline",
        },
        trigger: {
          color: "text.core",
          border: "md",
          borderColor: "transparent",
          "&:not([data-selected])": {
            _hover: {
              backgroundColor: "surface.ghost.hover",
              _active: {
                backgroundColor: "surface.ghost.active",
                outline: "none",
                outlineColor: "transparent",
              },
            },
          },
        },
        _disabled: {
          backgroundColor: "surface.disabled",
          color: "surface.disabled",
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
          "&:not([data-selected])": {
            _hover: {
              backgroundColor: "surface.accent.hover",
              _active: {
                backgroundColor: "surface.accent.active",
              },
            },
          },
        },
        indicator: {
          backgroundColor: "surface.brand",
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
          top: "1px",
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
