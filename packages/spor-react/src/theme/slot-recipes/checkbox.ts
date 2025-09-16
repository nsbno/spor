import { defineSlotRecipe } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

import { checkboxAnatomy } from "./anatomy";

export const checkboxSlotRecipe = defineSlotRecipe({
  className: "spor-checkbox",
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      whiteSpace: "normal",
      wordBreak: "break-word",
      display: "flex",
      gap: 1.5,
      _hover: {
        "& > input:enabled:not([aria-invalid]) + .spor-checkbox__control": {
          borderColor: "core.outline.hover",
        },
        "& > input:enabled:checked:not([aria-invalid]) + .spor-checkbox__control":
          {
            background: "brand.surface.hover",
          },
      },
    },
    indicator: {
      width: "100%",
      height: "100%",
      marginTop: -1,
      transform: "scale(1)",
      opacity: 0,
      _checked: {
        opacity: 1,
        transition: "opacity 300ms cubic-bezier(0.65, 0.25, 0.56, 0.96)",
      },
    },
    control: {
      width: 4,
      height: 4,
      flexShrink: 0,
      transitionProperty: "background, border-color",
      transitionDuration: "moderate",
      border: "2px solid",
      borderColor: "core.outline",
      borderRadius: "xs",

      _checked: {
        color: "brand.icon",
        borderColor: "brand.surface",
        background: "brand.surface",
        _focus: {
          borderColor: "brand.surface.active",
        },

        _disabled: {
          background: "surface.disabled",
          color: "text.disabled",
          borderColor: "currentColor",
        },

        _invalid: {
          backgroundColor: "outline.error",
          borderColor: "outline.error",
        },
      },
      _disabled: {
        // borderColor: coreText("disabled").color,
        borderColor: "text.disabled",
      },
      _invalid: {
        borderColor: "outline.error",
      },
      _focus: {
        outlineStyle: "solid",
        outlineColor: "outline.focus",
        outlineOffset: tokens.size.stroke.md,
        outlineWidth: tokens.size.stroke.md,
        borderColor: "core.outline",
        borderWidth: tokens.size.stroke.md,
      },
    },
    label: {
      _disabled: { opacity: 0.4 },
    },
  },
});
