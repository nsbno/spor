import { defineSlotRecipe } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

import { switchAnatomy } from "./anatomy";

export const switchSlotRecipe = defineSlotRecipe({
  slots: switchAnatomy.keys(),
  className: "spor-switch",
  base: {
    root: {
      display: "inline-flex",
      gap: "2.5",
      alignItems: "center",
      position: "relative",
      verticalAlign: "middle",
      "--switch-diff": "calc(var(--switch-width) - var(--switch-height))",
      "--switch-x": {
        base: "var(--switch-diff)",
        _rtl: "calc(var(--switch-diff) * -1)",
      },
    },
    thumb: {
      position: "absolute",
      transitionProperty: "translate",
      transitionDuration: "fast",
      borderRadius: "2xl",
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      width: "var(--switch-height)",
      height: "var(--switch-height)",
      backgroundColor: "core.icon",

      _disabled: {
        backgroundColor: "icon.disabled",
        _checked: {
          backgroundColor: "icon.disabled",
        },
      },
      _checked: {
        translate: "var(--switch-x) 0",
        backgroundColor: "brand.icon",
      },
    },

    label: {
      display: "block",
      textAlign: "start",
      marginEnd: 3,
      opacity: 1,
      bottom: 4,
      _disabled: {
        opacity: "0.5",
      },
    },
    control: {
      boxSizing: "content-box",
      padding: 0.5,

      display: "inline-flex",
      gap: 1.5,
      flexShrink: 0,
      justifyContent: "flex-start",
      cursor: "switch",
      borderRadius: "xl",
      position: "relative",
      width: "var(--switch-width)",
      height: "var(--switch-height)",
      transitionProperty: "common",
      transitionDuration: "fast",
      outline: "2px solid",
      outlineColor: "core.outline",
      _hover: {
        outline: "2px solid",
        outlineColor: "core.outline.hover",
        _checked: {
          outlineColor: "transparent",
          backgroundColor: "brand.surface.hover",
        },
      },

      _focusVisible: {
        outlineWidth: "2px",
        outlineColor: "outline.focus",
        outlineStyle: "solid",
      },

      _checked: {
        backgroundColor: "brand.surface",
        _focusVisible: {
          outlineStyle: "double",
          outlineWidth: `calc(3 * ${tokens.size.stroke.md})`, // space for double outline
        },
      },
      _disabled: {
        pointerEvents: "none",
        outlineColor: "outline.disabled",

        _checked: {
          backgroundColor: "icon.disabled",
          outlineColor: "transparent",
        },
      },
      _invalid: {
        outline: "2px solid",
        outlineColor: "outline.error",
        outlineOffset: "2px",
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--switch-width": "3.3rem",
          "--switch-height": "1.5rem",
        },
        control: {
          borderRadius: "lg",
          padding: "0.12rem",
        },
      },
      md: {
        root: {
          "--switch-width": "4.1rem",
          "--switch-height": "1.8rem",
        },
        control: {
          borderRadius: "xl",
          padding: 0.5,
        },
      },
      lg: {
        root: {
          "--switch-width": "4.8rem",
          "--switch-height": "2.25rem",
        },
        control: {
          borderRadius: "2xl",
          padding: 0.5,
        },
      },
    },
  },
});
