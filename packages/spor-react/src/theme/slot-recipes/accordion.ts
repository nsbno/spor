import { defineSlotRecipe } from "@chakra-ui/react";

import { coreBorder, coreText } from "../utils/core-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { accordionAnatomy } from "./anatomy";

export const accordionSlotRecipe = defineSlotRecipe({
  className: "spor-accordion",
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      borderRadius: "sm",
    },
    item: {
      borderRadius: "sm",
      overflowAnchor: "none",
    },
    itemTrigger: {
      borderRadius: "sm",
      display: "flex",
      justifyContent: "space-between",
      ...coreText("default"),
      textAlign: "left",
      width: "full",
      alignItems: "center",
      fontSize: ["mobile.sm", null, "desktop.sm"],
      fontFamily: "body",
      fontWeight: "bold",
      outlineOffset: "-2px",
      paddingX: [2, null, 3],
      paddingY: [1, null, 1.5],
      minHeight: [6, null, 7],
      cursor: "pointer",
      _disabled: {
        pointerEvents: "none",
        opacity: 0.4,
      },
    },
    itemContent: {
      borderBottomRadius: "sm",
      fontSize: ["mobile.sm", null, "desktop.sm"],
      color: "text",
      height: "auto",
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
      },
    },
    itemBody: {
      paddingY: 2,
      paddingX: [2, null, 3],
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",

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
          "&:hover": {
            ...ghostBackground("hover"),
          },
          "&:active": {
            ...ghostBackground("active"),
          },
        },
      },
      core: {
        item: {
          ...coreBorder("default"),
        },
        itemTrigger: {
          _expanded: {
            borderBottomRadius: "none",
          },
          "&:hover": {
            ...coreBorder("hover"),
            outlineOffset: 0,
          },
          "&:active": {
            backgroundColor: "core.surface.active",
            ...coreBorder("default"),
          },
        },
      },
      floating: {
        item: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",
        },
        itemTrigger: {
          _expanded: {
            borderBottomRadius: "none",
          },
          "&:hover": {
            outlineOffset: 1,
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
            "&:active": {
              backgroundColor: "floating.surface.active",
              ...floatingBorder("default"),
            },
          },
          "&:active": {
            backgroundColor: "floating.surface.active",
            ...floatingBorder("default"),
          },
        },
      },
    },
  },
});
