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
        opacity: "0.5",
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
      color: "white",
      borderWidth: "2px",
      borderColor: "brand.surface",
      borderRadius: "xl",
      width: 4,
      height: 4,

      _checked: {
        color: "brand.surface",
        borderColor: "currentColor",
      },
      _hover: {
        color: "brand.surface.hover",
        borderColor: "currentColor",
        "& .dot": {
          backgroundColor: "brand.surface.hover",
        },
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "brand.surface",
        outlineOffset: "2px",
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
        height: "100%",
        width: "100%",
        borderRadius: "xl",
        background: "brand.surface",
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
