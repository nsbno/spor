import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

export const accordionSlotRecipe = defineSlotRecipe({
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
      width: "100%",
      alignItems: "center",
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
      color: "text",
      _icon: {
        fontSize: "1.25em",
      },
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "slow",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "slow",
      },
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      color: "fg.subtle",
      _open: {
        rotate: "180deg",
      },
      _icon: {
        width: "1.2em",
        height: "1.2em",
      },
    },
  },
  variants: {
    variant: {
      ghost: {
        root: {
          outline: "none",
        },
        itemTrigger: {
          _hover: {
            ...ghostBackground("hover"),
          },
          _active: {
            ...ghostBackground("active"),
          },
          _pressed: {
            ...ghostBackground("active"),
          },
        },
      },
      default: {
        itemTrigger: {
          ...baseBorder("default"),
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
        itemTrigger: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",
          _expanded: {
            borderBottomRadius: "none",
          },
          _hover: {
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
          },
          _active: {
            ...ghostBackground("active"),
            ...floatingBorder("default"),
          },
        },
      },
    },
  },
});