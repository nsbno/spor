import { defineSlotRecipe } from "@chakra-ui/react";

import { toastAnatomy } from "./anatomy";

export const toastSlotRecipe = defineSlotRecipe({
  slots: toastAnatomy.keys(),
  className: "chakra-toast",
  base: {
    root: {
      width: "full",
      display: "flex",
      position: "relative",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.563rem 0.75rem",
      translate: "var(--x) var(--y)",
      opacity: "var(--opacity)",
      willChange: "translate, opacity, scale",
      outline: "1px solid",

      borderRadius: "sm",
      transition:
        "translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",
      transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
      _closed: {
        transition: "translate 400ms, scale 400ms, opacity 200ms",
        transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)",
      },
      boxShadow: "sm",

      color: "text",
      "&[data-type=success]": {
        backgroundColor: "surface.success",
        outlineColor: "outline.success",
      },
      "&[data-type=error]": {
        backgroundColor: "surface.critical",
        outlineColor: "outline.critical",
      },

      "&[data-type=info]": {
        backgroundColor: "surface.info",
        outlineColor: "outline.info",
      },
      "&[data-inverted][data-type=success]": {
        backgroundColor: { _light: "darkTeal", _dark: "seaMist" },
        color: { _light: "mint", _dark: "jungle" },
        outlineColor: { _light: "greenHaze", _dark: "coralGreen" },
        "& path:first-of-type": {
          fill: { _light: "mint", _dark: "jungle" },
        },
        "& path:not(:first-of-type)": {
          fill: { _light: "darkTeal", _dark: "seaMist" },
        },
      },
      "&[data-inverted][data-type=error]": {
        backgroundColor: { _light: "burgundy", _dark: "lightRed" },
        color: { _light: "pink", _dark: "maroon" },
        outlineColor: { _light: "crimson", _dark: "salmon" },
        "& path:first-of-type": {
          fill: { _light: "pink", _dark: "maroon" },
        },
        "& path:not(:first-of-type)": {
          fill: { _light: "burgundy", _dark: "lightRed" },
        },
      },
      "&[data-inverted][data-type=info]": {
        backgroundColor: { _light: "darkBlue", _dark: "lightBlue" },
        color: { _light: "icyBlue", _dark: "royal" },
        outlineColor: { _light: "ocean", _dark: "cloudy" },
        "& path:first-of-type": {
          fill: { _light: "icyBlue", _dark: "navy" },
        },
        "& path:not(:first-of-type)": {
          fill: { _light: "darkBlue", _dark: "lightBlue" },
        },
      },
    },

    title: {
      textStyle: "sm",
      marginEnd: "2",
    },
  },
});
