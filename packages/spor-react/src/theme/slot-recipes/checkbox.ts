import { coreBackground, coreText } from "../utils/core-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

export const checkboxSlotRecipe = defineSlotRecipe({
  slots: ["control", "label", "root", "icon"],
  className: "spor-checkbox",
  base: {
    root: {
      _hover: {
        ...coreBackground("hover"),
        borderColor: brandBackground("hover").backgroundColor,
      },
      _invalid: {
        backgroundColor: "white",
        borderColor: "outline.error",
      },
      _checked: {
        borderColor: "outline.error",
        backgroundColor: "outline.error",
      },
    },
    icon: {
      fontSize: "1em",
      transitionProperty: "transform",
      transitionDuration: "normal",
      strokeWidth: "1.5px !important",
    },
    control: {
      width: 4,
      height: 4,
      transitionProperty: "background, border-color",
      transitionDuration: "normal",
      border: "2px solid",
      borderColor: "base.outline.default",
      borderRadius: "xs",
      ...coreBackground("default"),
      ...focusVisibleStyles(),

      _checked: {
        ...brandText("default"),
        ...brandBackground("default"),
        borderColor: brandBackground("default").backgroundColor,

        _disabled: {
          ...coreBackground("disabled"),
          ...coreText("disabled"),
          borderColor: "currentColor",
        },

        _invalid: {
          backgroundColor: "brightRed",
          borderColor: "brightRed",
        },
      },

      _disabled: {
        ...coreBackground("disabled"),
        borderColor: coreText("disabled").color,
      },
      _invalid: {
        ...coreBackground("default"),
        borderColor: "brightRed",
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
  },
});
