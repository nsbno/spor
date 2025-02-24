import { defineSlotRecipe } from "@chakra-ui/react";
import { alertSlotRecipe } from "./alert";
import { focusVisibleStyles } from "../utils/focus-utils";

const commonTriggerStyles = {
  border: "1px solid",
  borderBottom: "none",
};

const commonContentStyles = {
  border: "1px solid",
  borderTop: "none",
  borderBottomRadius: "sm",
};

const commonTriggerHoverStyles = {
  outline: "1px solid",
  outlineOffset: "-1px",
};

export const alertExpandableSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "itemTrigger",
    "itemContent",
    "indicator",
    "title",
    "item",
    "itemIndicator",
  ],
  className: "spor-alert-expandable",
  base: {
    root: {},
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
  },
  variants: {
    variant: {
      info: {
        root: {
          outlineColor: "alert.info.outline",
          background: "alert.info.surface",
        },
        itemTrigger: {
          ...commonTriggerStyles,
          borderColor: "alert.info.outline",
          background: "alert.info.surface",
          "&:hover": {
            ...commonTriggerHoverStyles,
            background: "alert.info.surface.hover",
            outlineColor: "alert.info.outline.hover",
          },
          "&:active": {
            outline: "1px solid",
            backgroundColor: "alert.info.surface.active",
            outlineColor: "alert.info.surface.active",
          },
        },
        itemContent: {
          ...commonContentStyles,
          borderColor: "alert.info.outline",
        },
        indicator: {
          ...alertSlotRecipe.variants?.variant.info.indicator,
        },
      },
      success: {
        root: {
          outlineColor: "alert.success.outline",
          background: "alert.success.surface",
        },
        itemTrigger: {
          ...commonTriggerStyles,
          borderColor: "alert.success.outline",
          background: "alert.success.surface",
          "&:hover": {
            ...commonTriggerHoverStyles,
            background: "alert.success.surface.hover",
            outlineColor: "alert.success.outline.hover",
          },
          "&:active": {
            outline: "1px solid",
            background: "alert.success.surface.active",
            outlineColor: "alert.success.surface.active",
          },
        },
        itemContent: {
          ...commonContentStyles,
          borderColor: "alert.success.outline",
        },
        indicator: {
          ...alertSlotRecipe.variants?.variant.success.indicator,
        },
      },
      important: {
        root: {
          outlineColor: "alert.important.outline",
          background: "alert.important.surface",
        },
        itemTrigger: {
          ...commonTriggerStyles,
          borderColor: "alert.important.outline",
          background: "alert.important.surface",
          "&:hover": {
            ...commonTriggerHoverStyles,
            backgroundColor: "alert.important.surface.hover",
            outlineColor: "alert.important.outline.hover",
          },
          "&:active": {
            outline: "1px solid",
            backgroundColor: "alert.important.surface.active",
            outlineColor: "alert.important.surface.active",
          },
        },
        itemContent: {
          ...commonContentStyles,
          borderColor: "alert.important.outline",
        },
        indicator: {
          ...alertSlotRecipe.variants?.variant.important.indicator,
        },
      },
      "alt-transport": {
        root: {
          outlineColor: "alert.alt.outline",
          background: "alert.alt.surface",
        },
        itemTrigger: {
          ...commonTriggerStyles,
          borderColor: "alert.alt.outline",
          background: "alert.alt.surface",
          "&:hover": {
            ...commonTriggerHoverStyles,
            backgroundColor: "alert.alt.surface.hover",
            outlineColor: "alert.alt.outline.hover",
          },
          "&:active": {
            outline: "1px solid",
            backgroundColor: "alert.alt.surface.active",
            outlineColor: "alert.alt.surface.active",
          },
        },
        itemContent: {
          ...commonContentStyles,
          borderColor: "alert.alt.outline",
        },
        indicator: {
          ...alertSlotRecipe.variants?.variant["alt-transport"].indicator,
        },
      },
      error: {
        root: {
          outlineColor: "alert.error.outline",
          background: "alert.error.surface",
        },
        itemTrigger: {
          ...commonTriggerStyles,
          borderColor: "alert.error.outline",
          background: "alert.error.surface",
          "&:hover": {
            ...commonTriggerHoverStyles,
            backgroundColor: "alert.error.surface.hover",
            outlineColor: "alert.error.outline.hover",
          },
          "&:active": {
            outline: "1px solid",
            backgroundColor: "alert.error.surface.active",
            outlineColor: "alert.error.surface.active",
          },
        },
        itemContent: {
          ...commonContentStyles,
          borderColor: "alert.error.outline",
        },
        indicator: {
          ...alertSlotRecipe.variants?.variant.error.indicator,
        },
      },
      service: {
        root: {
          outlineColor: "alert.service.outline",
          background: "alert.service.surface",
        },
        itemTrigger: {
          ...commonTriggerStyles,
          borderColor: "alert.service.outline",
          background: "alert.service.surface",
          color: "text.inverted",
          "&:hover": {
            ...commonTriggerHoverStyles,
            backgroundColor: "alert.service.surface.hover",
            outlineColor: "alert.service.outline.hover",
          },
          "&:active": {
            outline: "1px solid",
            backgroundColor: "alert.service.surface.active",
            outlineColor: "alert.service.surface.active",
          },
        },
        itemContent: {
          ...commonContentStyles,
          borderColor: "alert.service.outline",
          color: "text.inverted",
        },
        indicator: {
          ...alertSlotRecipe.variants?.variant.service.indicator,
        },
      },
    },
  },
});
