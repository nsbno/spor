import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreBorder } from "../utils/core-utils";
import { brandBackground } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const switchSlotRecipe = defineSlotRecipe({
  slots: ["root", "track", "thumb"],
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
    track: {
      transitionProperty: "common",
      transitionDuration: "fast",
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
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--switch-width": "54px",
          "--switch-height": "24px",
        },
        track: {
          borderRadius: "24px",
          padding: "2px",
        },
      },
      md: {
        root: {
          "--switch-width": "66px",
          "--switch-height": "30px",
        },
        track: {
          borderRadius: "30px",
          padding: "3px",
        },
      },
      lg: {
        root: {
          "--switch-width": "78px",
          "--switch-height": "36px",
        },
        track: {
          borderRadius: "36px",
          padding: "3px",
        },
      },
    },
  },
});
