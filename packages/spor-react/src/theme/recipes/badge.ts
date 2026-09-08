import { defineRecipe } from "@chakra-ui/react";

export const badgeRecipie = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    gap: "0.5",
    backgroundColor: "surface.neutral",
    color: "text.core",
    outline: "1px solid",
    outlineColor: "outline.core",
  },
  variants: {
    size: {
      sm: {
        fontSize: "desktop.2xs",
        paddingX: "0.5",
        paddingY: "0",
        fontWeight: "normal",
        borderRadius: "xxs",
      },
      md: {
        fontSize: "desktop.2xs",
        paddingX: "1",
        paddingY: "0.5",
        fontWeight: "bold",
        borderRadius: "xs",
      },
      lg: {
        fontSize: "desktop.xs",
        paddingX: "1.5",
        paddingY: "0.5",
        fontWeight: "bold",
        borderRadius: "xs",
      },
    },
    attached: { true: { borderBottomRadius: "none" } },
    inverted: {
      true: {
        "&[data-color='critical']": {
          backgroundColor: { _light: "burgundy", _dark: "lightRed" },
          color: { _light: "pink", _dark: "maroon" },
          "& svg": { color: { _light: "pink", _dark: "maroon" } },
        },
        "&[data-color='info']": {
          backgroundColor: { _light: "darkBlue", _dark: "lightBlue" },
          color: { _light: "icyBlue", _dark: "royal" },
          "& svg": { color: { _light: "royal", _dark: "icyBlue" } },
        },
        "&[data-color='success']": {
          backgroundColor: { _light: "darkTeal", _dark: "seaMist" },
          color: { _light: "mint", _dark: "jungle" },
          "& svg": { color: { _light: "mint", _dark: "jungle" } },
        },
        "&[data-color='warning']": {
          backgroundColor: { _light: "coffee", _dark: "blonde" },
          color: { _light: "cornsilk", _dark: "coffee" },
          "& svg": { color: { _light: "cornsilk", _dark: "coffee" } },
        },
        "&[data-color='notice']": {
          backgroundColor: { _light: "wood", _dark: "champagne" },
          color: { _light: "bisque", _dark: "wood" },
          "& svg": { color: { _light: "bisque", _dark: "wood" } },
        },
        "&[data-color='caution']": {
          backgroundColor: { _light: "wood", _dark: "champagne" },
          color: { _light: "bisque", _dark: "wood" },
          "& svg": { color: { _light: "bisque", _dark: "wood" } },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    attached: false,
    inverted: false,
  },
});
