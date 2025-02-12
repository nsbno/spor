import { defineRecipe } from "@chakra-ui/react";

export const radiomarkRecipe = defineRecipe({
  className: "spor-radiomark",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    verticalAlign: "top",
    color: "white",
    borderWidth: "2px",
    borderColor: "brand.surface",
    borderRadius: "xl",
    width: 4,
    height: 4,
    cursor: "radio",
    _checked: {
      color: "brand.surface",
      borderColor: "currentColor",
    },
    _hover: {
      color: "brand.surface.hover",
      borderColor: "currentColor",
      backgroundColor: "brand.surface.hover",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "brand.surface",
      outlineOffset: "2px",
    },
    _invalid: {
      colorPalette: "red",
      borderColor: "red.500",
    },
    _disabled: {
      opacity: "0.5",
      cursor: "disabled",
    },

    "& .dot": {
      height: "100%",
      width: "100%",
      borderRadius: "xl",
      background: "brand.surface",
      scale: "0.5",
    },
  },
});
