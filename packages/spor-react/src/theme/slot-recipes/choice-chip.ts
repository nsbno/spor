import { defineSlotRecipe } from "@chakra-ui/react";

import { checkboxCardAnatomy } from "./anatomy";

export const choiceChipSlotRecipe = defineSlotRecipe({
  slots: checkboxCardAnatomy.keys(),
  className: "chakra-checkbox-card",
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      boxAlign: "center",
      cursor: "pointer",
      transitionProperty: "all",
      borderRadius: "xl",
      transitionDuration: "fast",
      paddingInlineStart: "2",
      paddingInlineEnd: "2",

      outline: "1px solid",
      outlineColor: "outline.core",
      _checked: {
        backgroundColor: "surface.brand",
        borderRadius: "sm",
        outline: "none",
        color: "text.brand",
        _hover: {
          backgroundColor: "surface.brand.hover",
          _active: {
            backgroundColor: "surface.brand.active",
          },
        },
      },

      _focusVisible: {
        outline: "2px solid",
        outlineColor: "outline.focus",
        outlineOffset: "1px",
      },

      _disabled: {
        pointerEvents: "none",
        boxShadow: "none",
        backgroundColor: "surface.disabled",
        color: "text.disabled",
        outline: "none",

        _hover: {
          backgroundColor: "surface.disabled",
          boxShadow: "none",
          color: "text.disabled",
        },
        _checked: {
          cursor: "not-allowed",
          boxShadow: "none",
          color: "text.disabled",
          backgroundColor: "surface.disabled",
          _hover: {
            backgroundColor: "surface.disabled",
            boxShadow: "none",
            color: "text.disabled",
          },
        },
      },
    },

    label: {
      display: "flex",
      alignItems: "center",
      gap: "1",
    },
  },

  variants: {
    size: {
      xs: {
        root: {
          _checked: {
            borderRadius: "0.563rem",
          },
          height: 5,
          paddingX: 1.5,
        },
        label: {
          fontSize: { base: "mobile.sm", sm: "desktop.sm" },
          fontWeight: "medium",
        },
      },
      sm: {
        root: {
          _checked: {
            borderRadius: "sm",
          },
          height: 6,
          paddingX: 2,
        },
        label: {
          fontSize: { base: "mobile.sm", sm: "desktop.sm" },
          fontWeight: "bold",
        },
      },
      md: {
        root: {
          _checked: {
            borderRadius: "sm",
          },
          height: 7,
          paddingX: 2,
        },
        label: {
          fontSize: { base: "mobile.md", sm: "desktop.md" },
          fontWeight: "bold",
        },
      },
      lg: {
        root: {
          _checked: {
            borderRadius: "md",
          },
          height: 8,
          paddingX: 3,
        },
        label: {
          fontSize: { base: "mobile.md", sm: "desktop.md" },
          fontWeight: "bold",
        },
      },
    },

    variant: {
      core: {
        root: {
          color: "text.core",
          outlineColor: "outline.core",

          _hover: {
            outline: "2px solid",
            outlineColor: "outline.core.hover",

            _active: {
              outline: "1px solid",
              outlineColor: "outline.core",
              backgroundColor: "surface.core.active",
            },
          },
        },
      },
      accent: {
        root: {
          backgroundColor: "surface.accent",
          color: "text.accent",
          outline: "none",

          _hover: {
            backgroundColor: "surface.accent.hover",

            _active: {
              backgroundColor: "surface.accent.active",
            },
          },
        },
      },
      floating: {
        root: {
          backgroundColor: "surface.floating",
          outline: "1px solid",
          outlineColor: "outline.floating",
          color: "text.floating",

          boxShadow: "sm",
          _hover: {
            backgroundColor: "surface.floating.hover",
            outline: "1px solid",
            outlineColor: "outline.floating.hover",

            _active: {
              backgroundColor: "surface.floating.active",
              outline: "1px solid",
              outlineColor: "outline.floating",
            },
          },
        },
      },
    },
    chipType: {
      icon: {},
      choice: {},
      filter: {},
    },
  },

  defaultVariants: {
    size: "sm",
    variant: "core",
    chipType: "choice",
  },
});
