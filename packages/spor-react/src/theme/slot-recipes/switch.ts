import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreBorder } from "../utils/core-utils";
import { brandBackground } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const switchSlotRecipe = defineSlotRecipe({
  slots: ["root", "track", "thumb", "control", "label"],
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
      borderRadius: "50%",
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      width: "var(--switch-height)",
      height: "var(--switch-height)",
      backgroundColor: "core.icon",

      _disabled: {
        backgroundColor: "icon.disabled",
      },
      _checked: {
        translate: "var(--switch-x) 0",
        backgroundColor: "white", //Do this in a better way?
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
      padding: "3px",
      display: "inline-flex",
      gap: "0.5rem",
      flexShrink: 0,
      justifyContent: "flex-start",
      cursor: "switch",
      borderRadius: "30px",
      position: "relative",
      width: "var(--switch-width)",
      height: "var(--switch-height)",
      transitionProperty: "common",
      transitionDuration: "fast",
      outlineStyle: "solid",
      outlineWidth: "1px",
      ...coreBorder("default"),
      ...focusVisibleStyles(),
      ...coreBackground("default"),
      _hover: {
        ...coreBorder("hover"),
      },
      _checked: {
        ...brandBackground("default"),
        outlineColor: "transparent",

        _hover: {
          ...coreBackground("default"),
          ...brandBackground("hover"),
        },
      },
      _disabled: {
        pointerEvents: "none",
        ...coreBackground("default"),
        ...coreBorder("disabled"),
        _checked: {
          ...coreBackground("disabled"),
          ...coreBorder("disabled"),
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
          "--switch-width": "54px",
          "--switch-height": "24px",
        },
        control: {
          borderRadius: "24px",
          padding: "2px",
        },
      },
      md: {
        root: {
          "--switch-width": "66px",
          "--switch-height": "30px",
        },
        control: {
          borderRadius: "30px",
          padding: "3px",
        },
      },
      lg: {
        root: {
          "--switch-width": "78px",
          "--switch-height": "36px",
        },
        control: {
          borderRadius: "36px",
          padding: "3px",
        },
      },
    },
  },
});
