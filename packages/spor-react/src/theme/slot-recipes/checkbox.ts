import { coreBackground, coreText } from "../utils/core-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { defineSlotRecipe } from "@chakra-ui/react";
import { checkboxAnatomy } from "./anatomy";

export const checkboxSlotRecipe = defineSlotRecipe({
  className: "spor-checkbox",
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: 1.5,
      _hover: {
        "& > input:enabled:not([aria-invalid]) + .spor-checkbox__control": {
          ...coreBackground("hover"),
          borderColor: brandBackground("hover").backgroundColor,
        },
        "& > input:enabled:checked:not([aria-invalid]) + .spor-checkbox__control":
          {
            ...brandBackground("hover"),
            borderColor: brandBackground("hover").backgroundColor,
          },
      },
    },
    indicator: {
      width: "100%",
      height: "100%",
      borderColor: "white",
      marginTop: -1,
      transform: "scale(1)",
      opacity: 0,
      "& polyline": {
        fill: "none",
        transformOrigin: "50% 50%",
        strokeWidth: "3px",
        strokeDasharray: "22.771367900227325",
        stroke: "currentcolor",
      },
      _checked: {
        opacity: 1,
        transition: "opacity 300ms cubic-bezier(0.65, 0.25, 0.56, 0.96)",
        "& polyline": {
          animation: "dash-check",
        },
      },
    },
    control: {
      width: 4,
      height: 4,
      transitionProperty: "background, border-color",
      transitionDuration: "moderate",
      border: "2px solid",
      borderColor: "core.outline",
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
        borderColor: "outline.error",
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
  },
});
