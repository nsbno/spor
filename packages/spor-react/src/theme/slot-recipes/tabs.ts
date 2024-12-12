import { defineSlotRecipe } from "@chakra-ui/react";
import { accentBackground, accentText } from "../utils/accent-utils";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const tabsSlotRecipe = defineSlotRecipe({
  slots: ["root", "list", "trigger", "content", "indicator"],
  className: "spor-tabs",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    list: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      borderRadius: "xl",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transitionProperty: "common",
      transitionDuration: "normal",
      height: "100%",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      ...focusVisibleStyles(),
      _disabled: {
        ...baseBackground("disabled"),
        ...baseText("disabled"),
      },
      _selected: {
        pointerEvents: "none",
        ...brandBackground("default"),
        ...brandText("default"),
        _hover: {
          ...brandBackground("hover"),
          ...brandText("hover"),
        },
        _active: {
          ...brandBackground("active"),
          ...brandText("active"),
        },
      },
    },
  },
  variants: {
    variant: {
      base: {
        list: {
          ...baseBackground("default"),
          ...baseText("default"),
          ...baseBorder("default"),
        },
        content: {
          ...baseText("default"),
          _hover: {
            ...baseBorder("hover"),
            outlineOffset: "-2px",
          },
          _active: {
            ...baseBackground("active"),
          },
        },
      },
      accent: {
        list: {
          backgroundColor: "accent.bg",
          ...accentText("default"),
        },
        content: {
          ...accentText("default"),
          _hover: {
            ...accentBackground("hover"),
          },
          _active: {
            ...accentBackground("active"),
          },
        },
      },
    },
    size: {
      xs: {
        list: {
          height: 5,
          padding: "2px",
        },
        content: {
          paddingX: 2,
          paddingY: 0,
        },
      },
      sm: {
        list: {
          height: 6,
          padding: 0.5,
        },
        content: {
          paddingX: 2,
        },
      },
      md: {
        list: {
          height: 7,
          padding: 0.5,
        },
        content: {
          fontWeight: "bold",
          paddingX: 2,
        },
      },
      lg: {
        list: {
          height: 8,
          padding: "4px",
        },
        content: {
          fontWeight: "bold",
          paddingX: 3,
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "base",
  },
});
