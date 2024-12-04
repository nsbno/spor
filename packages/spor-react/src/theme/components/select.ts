import { defineSlotRecipe } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const selectSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "trigger",
    "indicatorGroup",
    "indicator",
    "content",
    "item",
    "control",
    "itemText",
    "itemGroup",
    "itemGroupLabel",
    "label",
    "valueText",
  ],
  className: "spor-select",
  base: {
    root: {},
    label: {
      position: "relative",
      fontSize: ["mobile.xs", "desktop.sm"],
      marginTop: 2,
    },
    trigger: {
      display: "flex",
      appearance: "none",
      width: "100%",
      height: 8,
      borderTopRadius: "sm",
      borderBottomRadius: "sm",
      paddingY: 1.5,
      paddingX: 3,
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "mobile.md",
      ...baseBorder("default"),
      _hover: {
        ...baseBorder("hover"),
      },
      ...focusVisibleStyles(),
      _disabled: {
        pointerEvents: "none",
        ...baseText("disabled"),
        ...baseBackground("disabled"),
      },
      _active: {
        ...baseBackground("active"),
      },
      _invalid: {
        ...baseBorder("invalid"),
      },
      _open: {
        borderBottomRadius: 0,
      },
    },
  },
  variants: {
    variant: {
      base: {},
      floating: {
        trigger: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          _hover: {
            ...floatingBorder("hover"),
            ...floatingBackground("hover"),
          },
          _active: {
            ...floatingBorder("active"),
            ...floatingBackground("active"),
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
