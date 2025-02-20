import { defineSlotRecipe } from "@chakra-ui/react";
import { alertSlotRecipe } from "./alert";
import { focusVisibleStyles } from "../utils/focus-utils";

export const alertExpandableSlotRecipe = defineSlotRecipe({
  slots: ["root", "itemTrigger", "itemContent", "indicator", "title"],
  className: "spor-alert-expandable",
  base: {
    root: {
      fontSize: "inherit",
      transitionProperty: "outline, border-radius",
      transitionDuration: "fast",
      outline: "1px solid",
      borderRadius: "sm",
    },
    itemTrigger: {
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
        outlineOffset: "1px",
      },
      _expanded: {
        borderBottomRadius: "none",
      },
    },
    itemContent: {
      paddingX: "2",
      paddingY: "3"
    },
  },
  variants: {
    variant: {
      info: {
        itemTrigger: {
          outlineColor: "cloudy",
        },
        root: {
          ...alertSlotRecipe.variants?.variant.info.root,
          ...alertSlotRecipe.variants?.variant.info.indicator,
          outlineColor: "alert.info.outline",
          "&:hover": {
            outlineColor: "alert.info.outline.hover",
          },
          "&:active": {
            backgroundColor: "icyBlue",
          },
        },
      },
      success: {
        itemTrigger: {
          "&:hover": {
            backgroundColor: "alert.success.surface.hover",
            outlineColor: "alert.success.outline.hover",
          },
          "&:active": {
            backgroundColor: "alert.success.surface.active",
            outlineColor: "alert.success.surface.active",
            outlineOffset: "2px",
          },
        },
        root: {
          ...alertSlotRecipe.variants?.variant.success.root,
          ...alertSlotRecipe.variants?.variant.success.indicator,
          outlineColor: "alert.success.outline",
        },
      },
      warning: {
        itemTrigger: {
          outlineColor: "primrose",
        },
        root: {
          _hover: {
            outlineColor: "sunshine",
          },
          _active: {
            backgroundColor: "cornSilk",
          },
        },
      },
      "alt-transport": {
        itemTrigger: {
          outlineColor: "burntYellow",
        },
        root: {
          _hover: {
            outlineColor: "golden",
          },
          _active: {
            backgroundColor: "sunshine",
          },
        },
      },
      error: {
        itemTrigger: {
          outlineColor: "salmon",
        },
        root: {
          _hover: {
            outlineColor: "apricot",
          },
          _active: {
            backgroundColor: "pink",
          },
        },
      },
      service: {
        root: {
          _hover: {
            outlineColor: "blueGreen",
          },
          _active: {
            backgroundColor: "pine",
          },
        },
      },
    },
  },
});
