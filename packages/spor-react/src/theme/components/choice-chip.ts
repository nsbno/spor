import { defineSlotRecipe } from "@chakra-ui/react";
import { accentBackground, accentText } from "../utils/accent-utils";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground } from "../utils/brand-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const choiceChipSlotRecipe = defineSlotRecipe({
  slots: ["root", "icon", "label"],
  className: "spor-choice-chip",
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "xs",
      cursor: "pointer",
      transitionProperty: "all",
      borderRadius: "xl",
      transitionDuration: "fast",
      _checked: {
        outlineColor: "transparent",
        ...accentText("selected"),
        ...accentBackground("selected"),
        _hover: {
          ...brandBackground("hover"),
          ...baseText("selected"),
          outlineColor: "transparent",
        },
        _active: {
          ...baseText("selected"),
          ...brandBackground("active"),
        },
      },
      _disabled: {
        pointerEvents: "none",
        boxShadow: "none",
        ...baseText("disabled"),
        ...baseBackground("disabled"),
        _hover: {
          ...baseBackground("disabled"),
          boxShadow: "none",
          ...baseText("disabled"),
        },
        _checked: {
          cursor: "not-allowed",
          boxShadow: "none",
          ...baseText("disabled"),
          ...baseBackground("disabled"),
          _hover: {
            ...baseBackground("disabled"),
            boxShadow: "none",
            ...baseText("disabled"),
          },
        },
      },
      "input:focus-visible + &": focusVisibleStyles()._focusVisible,
    },
    icon: {},
    label: {
      marginLeft: 1,
    },
  },
  variants: {
    variant: {
      base: {
        root: {
          ...baseBorder("default"),
          ...baseText("default"),
          _hover: {
            ...baseText("default"),
            ...baseBorder("hover"),
          },
          _active: {
            ...baseBackground("active"),
            ...baseBorder("default"),
          },
        },
      },
      accent: {
        root: {
          ...accentBackground("default"),
          ...accentText("default"),
          _hover: {
            ...accentBackground("hover"),
            ...accentText("default"),
          },
          _active: {
            ...accentText("default"),
            ...accentBackground("active"),
          },
        },
        _active: {
          ...accentText("default"),
          ...accentBackground("active"),
        },
      },
      floating: {
        root: {
          ...floatingBackground("default"),
          ...baseText("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",
          _hover: {
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
            ...baseText("default"),
            boxShadow: "md",
          },
          _active: {
            ...floatingBackground("active"),
            ...floatingBorder("active"),
            ...baseText("default"),
          },
        },
      },
    },
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
  },
  defaultVariants: {
    variant: "base",
    size: "sm",
  },
});
