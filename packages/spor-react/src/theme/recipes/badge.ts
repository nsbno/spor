import { defineRecipe } from "@chakra-ui/react";

export const badgeRecipie = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    gap: "0.5",
  },
  variants: {
    colorPalette: {
      neutral: {
        backgroundColor: "badge.surface",
        color: "badge.text",
        "& svg": {
          color: "badge.icon",
        },
      },
      grey: {
        backgroundColor: "badge.grey.surface",
        color: "badge.grey.text",
        "& svg": {
          color: "badge.grey.icon",
        },
      },
      green: {
        backgroundColor: "badge.green.surface",
        color: "badge.green.text",
        "& svg": {
          color: "badge.green.icon",
        },
      },
      blue: {
        backgroundColor: "badge.blue.surface",
        color: "badge.blue.text",
        "& svg": {
          color: "badge.blue.icon",
        },
      },
      cream: {
        backgroundColor: "badge.cream.surface",
        color: "badge.cream.text",
        "& svg": {
          color: "badge.cream.icon",
        },
      },
      yellow: {
        backgroundColor: "badge.yellow.surface",
        color: "badge.yellow.text",
        "& svg": {
          color: "badge.yellow.icon",
        },
      },
      orange: {
        backgroundColor: "badge.orange.surface",
        color: "badge.orange.text",
        "& svg": {
          color: "badge.orange.icon",
        },
      },
      red: {
        backgroundColor: "badge.red.surface",
        color: "badge.red.text",
        "& svg": {
          color: "badge.red.icon",
        },
      },
    },
    size: {
      sm: {
        fontSize: "desktop.xs",
        paddingX: "0.5",
        paddingY: "0",
        fontWeight: "normal",
        borderRadius: "xxs",
      },
      md: {
        fontSize: "desktop.xs",
        paddingX: "1",
        paddingY: "0.5",
        fontWeight: "bold",
        borderRadius: "xs",
      },
      lg: {
        fontSize: "desktop.sm",
        paddingX: "1.5",
        paddingY: "0.5",
        fontWeight: "bold",
        borderRadius: "xs",
      },
    },
    attached: {
      true: {
        borderBottomRadius: "none",
      },
    },
    inverted: { true: {} },
  },
  defaultVariants: {
    colorPalette: "grey",
    size: "md",
    attached: false,
    inverted: false,
  },
  compoundVariants: [
    {
      colorPalette: "blue",
      inverted: true,
      css: {
        backgroundColor: "badge.blue.surface.inverted",
        color: "badge.blue.text.inverted",
        "& svg": {
          color: "badge.blue.icon.inverted",
        },
      },
    },
    {
      colorPalette: "green",
      inverted: true,
      css: {
        backgroundColor: "badge.green.surface.inverted",
        color: "badge.green.text.inverted",
        "& svg": {
          color: "badge.green.icon.inverted",
        },
      },
    },
    {
      colorPalette: "grey",
      inverted: true,
      css: {
        backgroundColor: "badge.grey.surface.inverted",
        color: "badge.grey.text.inverted",
        "& svg": {
          color: "badge.grey.icon.inverted",
        },
      },
    },
    {
      colorPalette: "cream",
      inverted: true,
      css: {
        backgroundColor: "badge.cream.surface.inverted",
        color: "badge.cream.text.inverted",
        "& svg": {
          color: "badge.cream.icon.inverted",
        },
      },
    },
    {
      colorPalette: "yellow",
      inverted: true,
      css: {
        backgroundColor: "badge.yellow.surface.inverted",
        color: "badge.yellow.text.inverted",
        "& svg": {
          color: "badge.yellow.icon.inverted",
        },
      },
    },
    {
      colorPalette: "orange",
      inverted: true,
      css: {
        backgroundColor: "badge.orange.surface.inverted",
        color: "badge.orange.text.inverted",
        "& svg": {
          color: "badge.orange.icon.inverted",
        },
      },
    },
    {
      colorPalette: "red",
      inverted: true,
      css: {
        backgroundColor: "badge.red.surface.inverted",
        color: "badge.red.text.inverted",
        "& svg": {
          color: "badge.red.icon.inverted",
        },
      },
    },
    {
      colorPalette: "neutral",
      inverted: true,
      css: {
        backgroundColor: "badge.surface.inverted",
        color: "badge.text.inverted",
        "& svg": {
          color: "badge.icon.inverted",
        },
      },
    },
  ],
});
