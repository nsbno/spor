import { defineSlotRecipe } from "@chakra-ui/react";
import { accentBackground, accentText } from "../utils/accent-utils";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { surface } from "../utils/surface-utils";

export const floatingActionButtonSlotRecipe = defineSlotRecipe({
  slots: ["root", "icon", "text"],
  className: "spor-floating-action-button",
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      paddingY: 2,
      paddingLeft: 2,
      paddingRight: 2,
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
        ...baseText("disabled"),
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
      paddingLeft: 3,
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
      base: {
        root: {
          ...baseBackground("default"),
          ...baseBorder("default"),
          ...baseText("default"),
          _hover: {
            ...baseBackground("hover"),
            ...baseBorder("hover"),
          },
          _active: {
            ...baseBorder("default"),
            ...baseBackground("active"),
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

export default floatingActionButtonSlotRecipe;
