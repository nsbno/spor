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
      outlineColor: "core.outline",
      _checked: {
        backgroundColor: "brand.surface",
        borderRadius: "sm",
        outline: "none",
        color: "brand.text",
        _hover: {
          backgroundColor: "brand.surface.hover",
          _active: {
            backgroundColor: "brand.surface.active",
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
          color: "core.text",
          outlineColor: "core.outline",

          _hover: {
            outline: "2px solid",
            outlineColor: "core.outline.hover",

            _active: {
              outline: "1px solid",
              outlineColor: "core.outline",
              backgroundColor: "core.surface.active",
            },
          },
        },
      },
      accent: {
        root: {
          backgroundColor: "accent.surface",
          color: "accent.text",
          outline: "none",

          _hover: {
            backgroundColor: "accent.surface.hover",

            _active: {
              backgroundColor: "accent.surface.active",
            },
          },
        },
      },
      floating: {
        root: {
          backgroundColor: "floating.surface",
          outline: "1px solid",
          outlineColor: "floating.outline",
          color: "floating.text",

          boxShadow: "sm",
          _hover: {
            backgroundColor: "floating.surface.hover",
            outline: "1px solid",
            outlineColor: "floating.outline.hover",

            _active: {
              backgroundColor: "floating.surface.active",
              outline: "1px solid",
              outlineColor: "floating.outline",
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
