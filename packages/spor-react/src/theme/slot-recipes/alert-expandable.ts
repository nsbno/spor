import { defineSlotRecipe } from "@chakra-ui/react";

import { alertExpandableAnatomy } from "./anatomy";

export const alertExpandableSlotRecipe = defineSlotRecipe({
  className: "spor-alert-expandable",
  slots: alertExpandableAnatomy.keys(),
  base: {
    itemTrigger: {
      paddingX: "2 !important",
      _expanded: {
        borderBottomRadius: "none",
      },
    },
    itemContent: {
      fontSize: "xs !important",
      paddingTop: "1 !important",
    },
    root: {
      border: "sm",
    },
  },
  variants: {
    variant: {
      important: {
        itemContent: {
          color: "text.warning.subtle",
        },
        itemTrigger: {
          "&:hover": {
            bg: "surface.warning.hover",
            outline: "1px solid",
            outlineColor: "outline.warning.hover",
            outlineOffset: "0px",
          },
          "&:active": {
            bg: "surface.warning.active",
          },
        },
        root: {
          borderColor: "outline.warning",
          bg: "surface.warning",
        },
        title: {
          color: "text.warning",
        },
      },
      success: {
        itemContent: {
          color: "text.success.subtle",
        },
        itemTrigger: {
          "&:hover": {
            bg: "surface.success.hover",
            outline: "1px solid",
            outlineOffset: "0px",
            outlineColor: "outline.success.hover",
            "&:active": {
              bg: "surface.success.active",
            },
          },
        },
        root: {
          borderColor: "outline.success",
          bg: "surface.success",
        },
        title: {
          color: "text.success",
        },
      },
      alt: {
        itemContent: {
          color: "text.notice.subtle",
        },
        itemTrigger: {
          "&:hover": {
            bg: "surface.notice.hover",
            outlineOffset: "0px",
            outline: "1px solid",
            outlineColor: "outline.notice.hover",
            "&:active": {
              bg: "surface.notice.active",
            },
          },
        },
        root: {
          borderColor: "outline.notice",
          bg: "surface.notice",
        },
        title: {
          color: "text.notice",
        },
      },
      info: {
        itemContent: {
          color: "alert.info.text.secondary",
        },
        itemTrigger: {
          "&:hover": {
            bg: "surface.Info.hover",
            outlineOffset: "0px",
            outline: "1px solid",
            outlineColor: "alert.info.outline.hover",
            "&:active": {
              bg: "surface.info.active",
            },
          },
        },
        root: {
          borderColor: "alert.info.outline",
          bg: "surface.info",
        },
        title: {
          color: "alert.info.text",
        },
      },
      error: {
        itemContent: {
          color: "text.critical.subtle",
        },
        itemTrigger: {
          "&:hover": {
            bg: "surface.critical.hover",
            outlineOffset: "0px",
            outline: "1px solid",
            outlineColor: "outline.critical.hover",
            "&:active": {
              bg: "surface.critical.active",
            },
          },
        },
        root: {
          borderColor: "outline.critical",
          bg: "surface.critical",
        },
        title: {
          color: "text.critical",
        },
      },
    },
  },
});
