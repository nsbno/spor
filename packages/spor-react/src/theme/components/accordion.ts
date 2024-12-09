import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

const accordionSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "itemTrigger",
    "item",
    "itemBody",
    "itemContent",
    "itemIndicator",
  ],
  className: "spor-accordion",
  base: {
    root: {
      borderRadius: "sm",
    },
    itemTrigger: {
      transitionProperty:
        "background-color, color, border-radius, box-shadow, opacity",
      transitionDuration: "fast",
      borderRadius: "sm",
      display: "flex",
      justifyContent: "space-between",
      ...baseText("default"),
      textAlign: "left",
      fontSize: ["mobile.sm", null, "desktop.sm"],
      fontFamily: "body",
      fontWeight: "bold",
      outlineOffset: "-2px",
      paddingX: [2, null, 3],
      paddingY: [1, null, 1.5],
      minHeight: [6, null, 7],
      ...focusVisibleStyles(),
      _disabled: {
        pointerEvents: "none",
        opacity: 0.4,
      },
    },
    itemContent: {
      paddingY: 2,
      paddingX: [2, null, 3],
      borderBottomRadius: "sm",
      fontSize: ["mobile.sm", null, "desktop.sm"],
      _icon: {
        fontSize: "1.25em",
      },
    },
  },
  variants: {
    variant: {
      ghost: {
        itemTrigger: {
          _hover: {
            ...ghostBackground("hover"),
          },
          _active: {
            ...ghostBackground("active"),
          },
        },
      },
      base: {
        root: {
          ...baseBorder("default"),
        },
        itemTrigger: {
          _expanded: {
            borderBottomRadius: "none",
          },
          _hover: {
            ...baseBorder("hover"),
            outlineOffset: 0,
          },
          _active: {
            ...baseBackground("active"),
            ...baseBorder("default"),
          },
        },
      },
      floating: {
        root: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",
        },
        itemTrigger: {
          _expanded: {
            borderBottomRadius: "none",
          },
          _hover: {
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
            outlineOffset: 1,
          },
          _active: {
            ...ghostBackground("active"),
            ...floatingBorder("default"),
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export default accordionSlotRecipe;
