import { defineSlotRecipe } from "@chakra-ui/react";
import { accentBackground, accentText } from "../utils/accent-utils";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
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
    trigger: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transitionProperty: "common",
      transitionDuration: "normal",
      height: "100%",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      ...focusVisibleStyles(),
    },
  },
  variants: {
    variant: {
      core: {
        list: {
          ...coreBackground("default"),
          ...coreText("default"),
          ...coreBorder("default"),
        },
        trigger: {
          ...coreText("default"),
          _hover: {
            ...coreBorder("hover"),
            outlineOffset: "-2px",
          },
          _active: {
            ...coreBackground("active"),
          },
        },
      },
      accent: {
        list: {
          backgroundColor: "accent.bg",
          ...accentText("default"),
        },
        trigger: {
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
        trigger: {
          paddingX: 2,
          paddingY: 0,
        },
      },
      sm: {
        list: {
          height: 6,
          padding: 0.5,
        },
        trigger: {
          paddingX: 2,
        },
      },
      md: {
        list: {
          height: 7,
          padding: 0.5,
        },
        trigger: {
          fontWeight: "bold",
          paddingX: 2,
        },
      },
      lg: {
        list: {
          height: 8,
          padding: "4px",
        },
        trigger: {
          fontWeight: "bold",
          paddingX: 3,
        },
      },
    },
  },
});
