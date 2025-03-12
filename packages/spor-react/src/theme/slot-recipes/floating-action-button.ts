import { defineSlotRecipe } from "@chakra-ui/react";
import { accentBackground, accentText } from "../utils/accent-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { surface } from "../utils/surface-utils";
import { floatingActionButtonAnatomy } from "./anatomy";

export const floatingActionButtonSlotRecipe = defineSlotRecipe({
  slots: floatingActionButtonAnatomy.keys(),
  className: "spor-floating-action-button",
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      paddingY: 2,
      paddingX: 2,
      cursor: "pointer",
      overflowX: "hidden",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      boxShadow: "md",
      transitionDuration: "fast",
      transitionProperty: "common",
      position: "fixed",
      zIndex: "sticky",
      ...focusVisibleStyles(),
      _disabled: {
        ...surface("disabled"),
        ...coreText("disabled"),
        pointerEvents: "none",
      },
    },
    icon: {},
    text: {
      display: "flex",
      flex: "none",
      alignItems: "center",
      fontWeight: "bold",
      textStyle: "sm",
      marginRight: 1,
    },
  },
  variants: {
    variant: {
      brand: {
        root: {
          ...brandBackground("default"),
          ...brandText("default"),
          _hover: {
            ...brandBackground("hover"),
          },
          _active: {
            ...brandBackground("active"),
          },
        },
      },
      core: {
        root: {
          ...coreBackground("default"),
          ...coreBorder("default"),
          ...coreText("default"),
          _hover: {
            ...coreBackground("hover"),
            ...coreBorder("hover"),
          },
          _active: {
            ...coreBorder("default"),
            ...coreBackground("active"),
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
            ...accentBackground("active"),
          },
        },
      },
    },
    placement: {
      "top left": {
        root: {
          top: "1em",
          left: "1em",
        },
      },
      "top right": {
        root: {
          top: "1em",
          right: "1em",
        },
      },
      "bottom left": {
        root: {
          bottom: "1em",
          left: "1em",
        },
      },
      "bottom right": {
        root: {
          bottom: "1em",
          right: "1em",
        },
      },
    },
  },
  defaultVariants: {
    variant: "brand",
  },
});
