import { defineSlotRecipe } from "@chakra-ui/react";

import { radioCardAnatomy } from "./anatomy";

export const choiceChipSlotRecipe = defineSlotRecipe({
  className: "spor-choice-chip",
  slots: radioCardAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      gap: "1",
      width: "fit-content",
    },
    item: {
      display: "flex-inline",
      transitionProperty: "all",
      transitionDuration: "fast",

      _checked: {
        outline: "none",
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "outline.focus",
          outlineOffset: "1px",
        },
        _hover: {
          outline: "none",
        },
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
    itemControl: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
    },
  },
  variants: {
    size: {
      xs: {
        item: {
          borderRadius: "xl",
          _checked: {
            borderRadius: "9px",
          },
        },
        itemControl: {
          height: 5,
          paddingX: 1.5,
        },
        label: {
          fontSize: { base: "mobile.sm", sm: "desktop.sm" },
          fontWeight: "regular",
        },
      },
      sm: {
        item: {
          borderRadius: "xl",
          _checked: {
            borderRadius: "sm",
          },
        },
        itemControl: {
          height: 6,
          paddingX: 2,
        },
        label: {
          fontSize: { base: "mobile.sm", sm: "desktop.sm" },
          fontWeight: "bold",
        },
      },
      md: {
        item: {
          borderRadius: "xl",
          _checked: {
            borderRadius: "sm",
          },
        },
        itemControl: {
          height: 7,
          paddingX: 2,
        },
        label: {
          fontSize: { base: "mobile.md", sm: "desktop.md" },
          fontWeight: "bold",
        },
      },
      lg: {
        item: {
          borderRadius: "xl",
          _checked: {
            borderRadius: "md",
          },
        },
        itemControl: {
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
        itemControl: {
          _checked: {
            backgroundColor: "surface.brand",
            color: "text.brand",
            outline: "none",
            _hover: {
              backgroundColor: "surface.brand.hover",
              _active: {
                backgroundColor: "surface.brand.active",
              },
            },
          },
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
        itemControl: {
          backgroundColor: "surface.accent",
          color: "text.accent",
          outline: "none",
          border: "none",
          _checked: {
            backgroundColor: "surface.brand",
            color: "text.brand",
            outline: "none",
            _hover: {
              backgroundColor: "surface.brand.hover",
              _active: {
                backgroundColor: "surface.brand.active",
              },
            },
          },
          _hover: {
            backgroundColor: "surface.accent.hover",

            _active: {
              backgroundColor: "surface.accent.active",
            },
          },
        },
      },
      floating: {
        itemControl: {
          backgroundColor: "surface.floating",
          outline: "1px solid",
          outlineColor: "outline.floating",
          color: "text.floating",

          boxShadow: "sm",
          _checked: {
            backgroundColor: "surface.brand",
            color: "text.brand",
            outline: "none",
            _hover: {
              backgroundColor: "surface.brand.hover",
              _active: {
                backgroundColor: "surface.brand.active",
              },
            },
          },
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
  },
  defaultVariants: {
    size: "sm",
    variant: "core",
  },
});
