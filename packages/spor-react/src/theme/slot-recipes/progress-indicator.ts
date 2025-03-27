import { defineSlotRecipe } from "@chakra-ui/react";

export const progressIndicatorRecipe = defineSlotRecipe({
  slots: ["root", "container", "progressDot", "circle"],
  base: {
    root: {},
    container: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      justifyContent: ["space-between", "center"],
    },
    progressDot: {
      height: 1,
      width: 1,
      fill: "icon.disabled",
      "&[aria-current='step']": {
        fill: "brand.surface",
      },
    },
  },
});
