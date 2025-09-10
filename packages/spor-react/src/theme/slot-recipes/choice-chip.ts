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
      fontSize: "xs",
      cursor: "pointer",
      transitionProperty: "all",
      borderRadius: "xl",
      transitionDuration: "fast",
      paddingInlineStart: "2",
      paddingInlineEnd: "2",

      outline: "1px solid",
      outlineColor: "base.outline",
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
          backgroundColor: "core.surface.disabled",
          boxShadow: "none",
          color: "core.text.disabled",
        },
        _checked: {
          cursor: "not-allowed",
          boxShadow: "none",
          color: "core.text.disabled",
          backgroundColor: "core.surface.disabled",
          _hover: {
            backgroundColor: "core.surface.disabled",
            boxShadow: "none",
            color: "core.text.disabled",
          },
        },
      },
    },

    label: {
      display: "flex",
      alignItems: "center",

      fontSize: "xs",
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
      },
      sm: {
        root: {
          _checked: {
            borderRadius: "sm",
          },
          height: 6,
          paddingX: 2,
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
      },
      lg: {
        root: {
          _checked: {
            borderRadius: "md",
          },
          height: 8,
          paddingX: 3,
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
    size: "md",
    variant: "core",
    chipType: "choice",
  },
});
