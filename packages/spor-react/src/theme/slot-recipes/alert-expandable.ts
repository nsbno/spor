import { defineSlotRecipe } from "@chakra-ui/react";

import tokens from "@vygruppen/spor-design-tokens";

import { alertSlotRecipe } from "./alert";

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
          color: "alert.important.text.secondary",
        },
        itemTrigger: {
          "&:hover": {
            bg: "alert.important.surface.hover",
            outline: "1px solid",
            outlineColor: "alert.important.outline.hover",
            outlineOffset: "0px",
          },
          "&:active": {
            bg: "alert.important.surface.active",
          },
        },
        root: {
          borderColor: "alert.important.outline",
          bg: "alert.important.surface",
        },
        title: {
          color: "alert.important.text",
        },
      },
      success: {
        itemContent: {
          color: "alert.success.text.secondary",
        },
        itemTrigger: {
          "&:hover": {
            bg: "alert.success.surface.hover",
            outline: "1px solid",
            outlineOffset: "0px",
            outlineColor: "alert.success.outline.hover",
            "&:active": {
              bg: "alert.success.surface.active",
            },
          },
        },
        root: {
          borderColor: "alert.success.outline",
          bg: "alert.success.surface",
        },
        title: {
          color: "alert.success.text",
        },
      },
      alt: {
        itemContent: {
          color: "alert.alt.text.secondary",
        },
        itemTrigger: {
          "&:hover": {
            bg: "alert.alt.surface.hover",
            outlineOffset: "0px",
            outline: "1px solid",
            outlineColor: "alert.alt.outline.hover",
            "&:active": {
              bg: "alert.alt.surface.active",
            },
          },
        },
        root: {
          borderColor: "alert.alt.outline",
          bg: "alert.alt.surface",
        },
        title: {
          color: "alert.alt.text",
        },
      },
      info: {
        itemContent: {
          color: "alert.info.text.secondary",
        },
        itemTrigger: {
          "&:hover": {
            bg: "alert.info.surface.hover",
            outlineOffset: "0px",
            outline: "1px solid",
            outlineColor: "alert.info.outline.hover",
            "&:active": {
              bg: "alert.info.surface.active",
            },
          },
        },
        root: {
          borderColor: "alert.info.outline",
          bg: "alert.info.surface",
        },
        title: {
          color: "alert.info.text",
        },
      },
      error: {
        itemContent: {
          color: "alert.error.text.secondary",
        },
        itemTrigger: {
          "&:hover": {
            bg: "alert.error.surface.hover",
            outlineOffset: "0px",
            outline: "1px solid",
            outlineColor: "alert.error.outline.hover",
            "&:active": {
              bg: "alert.error.surface.active",
            },
          },
        },
        root: {
          borderColor: "alert.error.outline",
          bg: "alert.error.surface",
        },
        title: {
          color: "alert.error.text",
        },
      },
    },
  },
});
