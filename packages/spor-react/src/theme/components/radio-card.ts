import { defineSlotRecipe } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { outlineBorder } from "../utils/outline-utils";

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
    root: {
      overflow: "hidden",
      fontSize: "inherit",
      display: "block",
      cursor: "pointer",
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",

      _disabled: {
        pointerEvents: "none",
        ...baseBackground("disabled"),
        ...baseBorder("disabled"),
        ...baseText("disabled"),
      },
      _checked: {
        outline: "2px solid",
        ...outlineBorder("focus"),
        ...floatingBackground("active"),
      },
    },
  },
  variants: {
    variant: {
      base: {
        root: {
          ...baseText("default"),
          ...baseBackground("default"),
          ...baseBorder("default"),
          _hover: {
            ...baseBackground("hover"),
            ...baseBorder("hover"),
          },
          _active: {
            ...baseBackground("active"),
            ...baseBorder("active"),
          },
        },
        _checked: {
          _hover: {
            ...baseBorder("hover"),
          },
          _active: {
            ...baseBackground("active"),
            ...baseBorder("active"),
          },
        },
        _focusedChecked: {
          outline: "4px solid",
          outlineStyle: "double",
          ...outlineBorder("focus"),
          outlineOffset: "-1px",
        },
        _focused: {
          outline: "2px solid",
          ...outlineBorder("focus"),
          outlineOffset: "1px",
          boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.40)`,
          _hover: {
            ...baseBorder("hover"),
            boxShadow: "none",
            outlineOffset: "0px",
          },
        },
      },
      floating: {
        root: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",
          _hover: {
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
            boxShadow: "md",
          },
          _active: {
            ...floatingBackground("active"),
            ...floatingBorder("active"),
          },
        },
        _checked: {
          _hover: {
            ...floatingBorder("hover"),
            boxShadow: "md",
          },
          _active: {
            ...floatingBackground("active"),
            ...floatingBorder("active"),
          },
        },
        _focusedChecked: {
          outline: "4px solid",
          outlineStyle: "double",
          ...outlineBorder("focus"),
          outlineOffset: "-1px",
        },
        _focused: {
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
});
