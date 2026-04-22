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
        backgroundColor: "surface",
        color: "text",
        "& svg": {
          color: "icon",
        },
      },
      grey: {
        backgroundColor: "surface.neutral",
        color: "text.neutral",
        "& svg": {
          color: "icon.neutral",
        },
      },
      green: {
        backgroundColor: "surface.subtle",
        color: "text.success",
        "& svg": {
          color: "icon.success",
        },
      },
      blue: {
        backgroundColor: "surface.info",
        color: "text.info",
        "& svg": {
          color: "icon.info",
        },
      },
      cream: {
        backgroundColor: "surface.warning",
        color: "text.warning",
        "& svg": {
          color: "icon.warning",
        },
      },
      yellow: {
        backgroundColor: "surface.notice",
        color: "text.notice",
        "& svg": {
          color: "icon.notice",
        },
      },
      orange: {
        backgroundColor: "surface.caution",
        color: "text.caution",
        "& svg": {
          color: "icon.caution",
        },
      },
      red: {
        backgroundColor: "surface.critical",
        color: "text.critical",
        "& svg": {
          color: "icon.critical",
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
      // @ts-expect-error Chakra gir feilmelding fordi "cream" ikke eksisterer i built-in ColorPalette-typen
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
      // @ts-expect-error Chakra gir feilmelding fordi "neutral" ikke eksisterer i built-in typen
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
