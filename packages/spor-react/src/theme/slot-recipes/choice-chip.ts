import { defineSlotRecipe } from "@chakra-ui/react";
import { accentBackground, accentText } from "../utils/accent-utils";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
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
          ...coreText("selected"),
          outlineColor: "transparent",
        },
        _active: {
          ...coreText("selected"),
          ...brandBackground("active"),
        },
      },
      _disabled: {
        pointerEvents: "none",
        boxShadow: "none",
        ...coreText("disabled"),
        ...coreBackground("disabled"),
        _hover: {
          ...coreBackground("disabled"),
          boxShadow: "none",
          ...coreText("disabled"),
        },
        _checked: {
          cursor: "not-allowed",
          boxShadow: "none",
          ...coreText("disabled"),
          ...coreBackground("disabled"),
          _hover: {
            ...coreBackground("disabled"),
            boxShadow: "none",
            ...coreText("disabled"),
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
      core: {
        root: {
          ...coreBorder("default"),
          ...coreText("default"),
          _hover: {
            ...coreText("default"),
            ...coreBorder("hover"),
          },
          _active: {
            ...coreBackground("active"),
            ...coreBorder("default"),
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
          ...coreText("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",
          _hover: {
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
            ...coreText("default"),
            boxShadow: "md",
          },
          _active: {
            ...floatingBackground("active"),
            ...floatingBorder("active"),
            ...coreText("default"),
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
    variant: "core",
    size: "sm",
  },
});
