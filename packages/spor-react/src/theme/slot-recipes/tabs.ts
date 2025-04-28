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
          backgroundColor: "core.surface",
          color: "core.text",
          border: "sm",
        },
        trigger: {
          color: "core.text",
          border: "md",
          borderColor: "transparent",
          _hover: {
            outline: "2px solid",
            outlineColor: "core.surface.hover",
            outlineOffset: "-2px",
          },
          _active: {
            backgroundColor: "brand.surface.active",
            color: "brand.text",
            outline: "none",
          },
          _selected: {
            backgroundColor: "brand.surface",
            color: "brand.text",
          },
          _disabled: {
            backgroundColor: "surface.disabled",
            color: "brand.text.disabled",
          },
        },
      },
      accent: {
        list: {
          backgroundColor: "accent.bg",
          color: "accent.text",
        },
        trigger: {
          color: "accent.text",
          _disabled: {
            backgroundColor: "surface.disabled",
            color: "accent.text.disabled",
          },
          _hover: {
            backgroundColor: "accent.surface.hover",
            _active: {
              backgroundColor: "brand.surface.active",
              color: "brand.text",
            },
          },
          _selected: {
            backgroundColor: "brand.surface",
            color: "brand.text",
            _hover: {
              backgroundColor: "brand.surface.hover",
              color: "brand.text",
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
            borderColor: "accent.surface",
          },
        },
      },
    },
  },
});
