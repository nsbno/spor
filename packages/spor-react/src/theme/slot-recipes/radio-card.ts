import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { outlineBorder } from "../utils/outline-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const radioCardSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "item",
    "label",
    "itemText",
    "itemDescription",
    "itemContent",
  ],
  className: "spor-radio-card",
  base: {
    root: {},
    item: {
      flex: 1,
      overflow: "hidden",
      fontSize: "inherit",
      display: "block",
      cursor: "pointer",
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",

      _disabled: {
        pointerEvents: "none",
        ...coreBackground("disabled"),
        ...coreBorder("disabled"),
        ...coreText("disabled"),
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
      fontWeight: "bold",
      fontSize: "inherit",
    },
  },
  variants: {
    variant: {
      core: {
        item: {
          ...coreText("default"),
          ...coreBackground("default"),
          ...coreBorder("default"),
          _hover: {
            ...coreBackground("hover"),
            outline: "2px solid",
            outlineColor: "core.outline.hover",
            _active: {
              ...coreBackground("active"),
              ...coreBorder("active"),
            },
          },

          _checked: {
            backgroundColor: "core.surface.active",
            outline: "2px solid",
            outlineColor: "outline.focus",
            _hover: {
              outline: "2px solid",
              outlineColor: "core.outline.hover",
              ...coreBackground("active"),
            },
            _active: {
              ...coreBackground("active"),
              ...coreBorder("active"),
            },
            _focusVisible: {
              outline: "4px solid",
              outlineStyle: "double",
              ...outlineBorder("focus"),
              outlineOffset: "-1px",
            },
            _disabled: {
              pointerEvents: "none",
              ...coreBackground("disabled"),
              ...coreBorder("disabled"),
              ...coreText("disabled"),
            },
          },
          _focusVisible: {
            outline: "2px solid",
            ...outlineBorder("focus"),
            outlineOffset: "1px",
            boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.40)`,
            _hover: {
              ...coreBorder("hover"),
              boxShadow: "none",
              outlineOffset: "0px",
            },
          },
        },
      },
      floating: {
        item: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",
          _hover: {
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
            boxShadow: "md",
            _active: {
              ...floatingBackground("active"),
              ...floatingBorder("active"),
            },
          },
          _checked: {
            backgroundColor: "core.surface.active",
            outline: "2px solid",
            outlineColor: "outline.focus",
            _hover: {
              ...floatingBorder("hover"),
              boxShadow: "md",
            },
            _active: {
              ...floatingBackground("active"),
              ...floatingBorder("active"),
            },
            _focusVisible: {
              outline: "4px solid",
              outlineStyle: "double",
              ...outlineBorder("focus"),
              outlineOffset: "-1px",
            },
          },
          _focusVisible: {
            outline: "2px solid",
            ...outlineBorder("focus"),
            outlineOffset: "1px",
            boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.10)`,
            _hover: {
              ...floatingBorder("hover"),
              boxShadow: "md",
              outlineOffset: "0px",
            },
          },
        },
      },
    },
  },
});
