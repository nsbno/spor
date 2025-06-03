import { defineSlotRecipe } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

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
      color: "core.text",
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
        item: {
          outline: "none",
        },
        itemTrigger: {
          "&:hover": {
            background: "ghost.surface.hover",
          },
          "&:active": {
            backgroundColor: "ghost.surface.active",
          },
        },
      },
      core: {
        item: {
          outline: "solid",
          outlineWidth: tokens.size.stroke.sm,
          outlineColor: "core.outline",
        },
        itemTrigger: {
          _expanded: {
            borderBottomRadius: "none",
          },
          "&:hover": {
            outlineWidth: tokens.size.stroke.md,
            outlineColor: "core.outline.hover",
            outline: "solid",

            outlineOffset: 0,
          },
          "&:active": {
            backgroundColor: "core.surface.active",
            outlineWidth: tokens.size.stroke.sm,
            outlineColor: "core.outline.active",
            outline: "solid",
          },
        },
      },
      floating: {
        item: {
          outline: "solid",
          outlineWidth: tokens.size.stroke.sm,
          outlineColor: "core.outline",
        },
        itemTrigger: {
          _expanded: {
            borderBottomRadius: "none",
          },
          "&:hover": {
            outlineWidth: tokens.size.stroke.md,
            outlineColor: "floating.outline.hover",
            outline: "solid",

            outlineOffset: 0,
          },
          "&:active": {
            backgroundColor: "floating.surface.active",
            outlineWidth: tokens.size.stroke.sm,
            outlineColor: "floating.outline.active",
            outline: "solid",
          },
        },
      },
    },
  },
});
