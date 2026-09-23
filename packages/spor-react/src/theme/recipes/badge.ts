import { defineRecipe } from "@chakra-ui/react";

export const badgeRecipie = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    gap: "0.5",
    backgroundColor: "surface",
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
        "&[data-color='critical'], [data-color='critical'] &": {
          backgroundColor: {
            _light: "burgundy",
            _dark: "lightRed",
          },
          color: { _light: "pink", _dark: "maroon" },
          outlineColor: { _light: "crimson", _dark: "salmon" },
          "& svg": { color: { _light: "pink", _dark: "maroon" } },
        },
        "&[data-color='info'], [data-color='info'] &": {
          backgroundColor: { _light: "darkBlue", _dark: "lightBlue" },
          color: { _light: "icyBlue", _dark: "royal" },
          outlineColor: { _light: "ocean", _dark: "cloudy" },
          "& svg": { color: { _light: "royal", _dark: "icyBlue" } },
        },
        "&[data-color='success'], [data-color='success'] &": {
          backgroundColor: { _light: "darkTeal", _dark: "seaMist" },
          color: { _light: "mint", _dark: "jungle" },
          outlineColor: { _light: "greenHaze", _dark: "coralGreen" },
          "& svg": { color: { _light: "mint", _dark: "jungle" } },
        },
        "&[data-color='warning'], [data-color='warning'] &": {
          backgroundColor: { _light: "coffee", _dark: "blonde" },
          color: { _light: "cornsilk", _dark: "coffee" },
          outlineColor: { _light: "bronze", _dark: "banana" },
          "& svg": { color: { _light: "cornsilk", _dark: "coffee" } },
        },
        "&[data-color='notice'], [data-color='notice'] &": {
          backgroundColor: { _light: "wood", _dark: "champagne" },
          color: { _light: "bisque", _dark: "wood" },
          outlineColor: { _light: "golden", _dark: "banana" },
          "& svg": { color: { _light: "bisque", _dark: "wood" } },
        },
        "&[data-color='caution'], [data-color='caution'] &": {
          backgroundColor: { _light: "wood", _dark: "champagne" },
          color: { _light: "bisque", _dark: "wood" },
          outlineColor: { _light: "russet", _dark: "saffron" },
          "& svg": { color: { _light: "bisque", _dark: "wood" } },
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: "surface.disabled",
        color: "text.disabled",
        outlineColor: "outline.disabled",
      },
    },
  },
  compoundVariants: [
    {
      inverted: true,
      disabled: true,
      css: {
        backgroundColor: "surface.disabled",
        color: "text.disabled",
        outlineColor: "outline.disabled",
        "& svg": { color: "text.disabled" },
        "&&[data-color], [data-color] &&": {
          backgroundColor: "surface.disabled",
          color: "text.disabled",
          outlineColor: "outline.disabled",
          "& svg": { color: "text.disabled" },
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    attached: false,
    inverted: false,
    disabled: false,
  },
});
