import { defineSlotRecipe } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

import { radioCardAnatomy } from "./anatomy";

export const radioCardSlotRecipe = defineSlotRecipe({
  className: "spor-radio-card",
  slots: radioCardAnatomy.keys(),
  base: {
    item: {
      flex: 1,
      overflow: "hidden",
      fontSize: "inherit",
      display: "block",
      cursor: "pointer",
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",
      outlineWidth: tokens.size.stroke.sm,
      outlineStyle: "solid",

      _focusVisible: {
        outlineWidth: "2px",
        outlineColor: "outline.focus",
        outlineStyle: "solid",
        outlineOffset: "1px",
      },

      _checked: {
        outlineColor: "outline.highlight",
        outlineWidth: tokens.size.stroke.md,
        outlineStyle: "solid",
        backgroundColor: "surface.core.active",
        _focusVisible: {
          outlineColor: "outline.focus",
          outlineStyle: "double",
          outlineWidth: `calc(3 * ${tokens.size.stroke.md})`, // space for double outline
        },
      },
      _disabled: {
        outline: "none",
        pointerEvents: "none",
        background: "surface.disabled",
        color: "text.disabled",
      },
      _invalid: {
        outlineColor: "outline.error",
        "& .dot": {
          backgroundColor: "outline.error",
        },
        _hover: {
          outlineColor: "outline.error",
          "& .dot": {
            backgroundColor: "outline.error",
          },
          _active: {
            backgroundColor: "surface.critical",
          },
        },
        _checked: {
          outlineColor: "outline.error",
          backgroundColor: "surface.critical",
        },
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
      fontWeight: "bold",
      fontSize: "inherit",
    },
    itemControl: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },

    itemIndicator: {
      display: "inline-flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: "2px",
      borderColor: "outline.core",
      borderRadius: "xl",
      width: 3,
      height: 3,
      marginRight: 2,
      marginTop: 0.5,

      _checked: {
        borderColor: "surface.brand",
      },
      _hover: {
        borderColor: "surface.brand.hover",
        "& .dot": {
          backgroundColor: "surface.brand.hover",
        },
      },

      _disabled: {
        pointerEvents: "none",
        backgroundColor: "surface.disabled",
        borderColor: "outline.disabled",
        "& .dot": {
          backgroundColor: "outline.disabled",
        },
      },
      _focusVisible: {
        outlineWidth: "2px",
        outlineColor: "outline.focus",
        outlineStyle: "solid",
        outlineOffset: "1px",
      },

      "& .dot": {
        height: "full",
        width: "full",
        borderRadius: "xl",
        backgroundColor: "surface.brand",
        scale: "0.5",
      },
    },
  },
  variants: {
    variant: {
      core: {
        item: {
          outlineColor: "outline.core",
          _hover: {
            outlineWidth: tokens.size.stroke.md,
            outlineColor: "outline.core.highlight",
            _active: {
              outlineWidth: tokens.size.stroke.sm,
            },
          },
        },
      },
      floating: {
        item: {
          boxShadow: "0px 1px 3px 0px var(--shadow-color)",
          shadowColor: "surface.disabled",
          outlineColor: "outline.floating",
          background: "surface.floating",
          _hover: {
            outlineColor: "outline.floating.highlight",
            backgroundColor: "surface.floating.hover",
            boxShadow: "0px 2px 6px 0px var(--shadow-color)",
            _active: {
              backgroundColor: "surface.floating.active",
              boxShadow: "none",
            },
          },
          _checked: {
            _hover: {
              backgroundColor: "surface.floating.hover",
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
