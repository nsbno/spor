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
          },
          _active: {
            backgroundColor: "surface.brand.active",
            color: "text.brand",
            outline: "none",
          },
          _selected: {
            backgroundColor: "surface.brand",
            color: "text.brand",
            _hover: {
              outline: "none",
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
          backgroundColor: "bg.accent",
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
              backgroundColor: "surface.brand.active",
              color: "text.brand",
            },
          },
          _selected: {
            backgroundColor: "surface.brand",
            color: "text.brand",
            _hover: {
              backgroundColor: "surface.brand.hover",
              color: "text.brand",
              outline: "none",
            },
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
          _focus: {
            border: "md",
            borderColor: "surface.accent",
          },
        },
      },
    },
  },
});
