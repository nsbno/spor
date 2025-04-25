import { defineSlotRecipe } from "@chakra-ui/react";
import { alertSlotRecipe } from "./alert";
import { focusVisibleStyles } from "../utils/focus-utils";
import { alertExpandableAnatomy } from "./anatomy";
import tokens from "@vygruppen/spor-design-tokens";

export const alertExpandableSlotRecipe = defineSlotRecipe({
  className: "spor-alert-expandable",
  slots: alertExpandableAnatomy.keys(),
  base: {
    itemTrigger: {
      paddingX: "2 !important",
      _expanded: {
        borderBottomRadius: "none",
      },
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
        outlineOffset: "-1px",
      },
      _hover: {
        outlineWidth: tokens.size.stroke.sm,
        outlineStyle: "solid",
        outlineOffset: "0px",
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
          _hover: {
            bg: "alert.important.surface.hover",
            outlineColor: "alert.important.outline.hover",
            _active: {
              bg: "alert.important.surface.active",
            },
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
          _hover: {
            bg: "alert.success.surface.hover",
            outlineColor: "alert.success.outline.hover",
            _active: {
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
          _hover: {
            bg: "alert.alt.surface.hover",
            outlineColor: "alert.alt.outline.hover",
            _active: {
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
          _hover: {
            bg: "alert.info.surface.hover",
            outlineColor: "alert.info.outline.hover",
            _active: {
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
          _hover: {
            bg: "alert.error.surface.hover",
            outlineColor: "alert.error.outline.hover",
            _active: {
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
