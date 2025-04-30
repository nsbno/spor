import { defineSlotRecipe } from "@chakra-ui/react";

import { radioAnatomy } from "./anatomy";

export const radioGroupSlotRecipe = defineSlotRecipe({
  className: "spor-radio",
  slots: radioAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: 2,
    },
    item: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      gap: "1.5",
      cursor: "pointer",
      _disabled: {
        cursor: "disabled",
      },
    },
    label: {
      userSelect: "none",
      _disabled: {
        color: "text.disabled",
      },
    },
    itemText: {
      _disabled: {
        color: "text.disabled",
      },
    },
    itemControl: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      borderWidth: "2px",
      borderColor: "core.outline",
      borderRadius: "xl",
      width: 4,
      height: 4,

      _checked: {
        borderColor: "brand.surface",
      },
      _hover: {
        borderColor: "brand.surface.hover",
        "& .dot": {
          backgroundColor: "brand.surface.hover",
        },
      },

      _disabled: {
        pointerEvents: "none",
        backgroundColor: "surface.disabled",
        borderColor: "outline.disabled",
        "& .dot": {
          backgroundColor: "outline.disabled",
        },
      },
      "& .dot": {
        height: "full",
        width: "full",
        borderRadius: "xl",
        backgroundColor: "brand.surface",
        scale: "0.5",
      },
    },
  },
  variants: {
    orientation: {
      vertical: {
        root: {
          flexDirection: "column",
        },
      },
    },
  },
});
