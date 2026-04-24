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
        backgroundColor: "surface.success",
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
        backgroundColor: {
          _light: "darkBlue",
          _dark: "lightBlue",
        },
        color: {
          _light: "icyBlue",
          _dark: "royal",
        },
        "& svg": {
          color: {
            _light: "royal",
            _dark: "icyBlue",
          },
        },
      },
    },
    {
      colorPalette: "green",
      inverted: true,
      css: {
        backgroundColor: {
          _light: "darkTeal",
          _dark: "seaMist",
        },
        color: {
          _light: "mint",
          _dark: "jungle",
        },
        "& svg": {
          color: {
            _light: "mint",
            _dark: "jungle",
          },
        },
      },
    },
    {
      colorPalette: "grey",
      inverted: true,
      css: {
        backgroundColor: {
          _light: "carbon",
          _dark: "platinum",
        },
        color: {
          _light: "white",
          _dark: "darkGrey",
        },
        "& svg": {
          color: {
            _light: "white",
            _dark: "darkGrey",
          },
        },
      },
    },
    {
      // @ts-expect-error Chakra gir feilmelding fordi "cream" ikke eksisterer i built-in ColorPalette-typen
      colorPalette: "cream",
      inverted: true,
      css: {
        backgroundColor: {
          _light: "coffee",
          _dark: "blonde",
        },
        color: {
          _light: "cornsilk",
          _dark: "coffee",
        },
        "& svg": {
          color: {
            _light: "cornsilk",
            _dark: "coffee",
          },
        },
      },
    },
    {
      colorPalette: "yellow",
      inverted: true,
      css: {
        backgroundColor: {
          _light: "bronze",
          _dark: "banana",
        },
        color: {
          _light: "cornsilk",
          _dark: "coffee",
        },
        "& svg": {
          color: {
            _light: "cornsilk",
            _dark: "coffee",
          },
        },
      },
    },
    {
      colorPalette: "orange",
      inverted: true,
      css: {
        backgroundColor: {
          _light: "wood",
          _dark: "champagne",
        },
        color: {
          _light: "bisque",
          _dark: "wood",
        },
        "& svg": {
          color: {
            _light: "bisque",
            _dark: "wood",
          },
        },
      },
    },
    {
      colorPalette: "red",
      inverted: true,
      css: {
        backgroundColor: {
          _light: "burgundy",
          _dark: "lightRed",
        },
        color: {
          _light: "pink",
          _dark: "maroon",
        },
        "& svg": {
          color: {
            _light: "pink",
            _dark: "maroon",
          },
        },
      },
    },
    {
      // @ts-expect-error Chakra gir feilmelding fordi "neutral" ikke eksisterer i built-in typen
      colorPalette: "neutral",
      inverted: true,
      css: {
        backgroundColor: {
          _light: "ink",
          _dark: "white",
        },
        color: {
          _light: "white",
          _dark: "darkGrey",
        },
        "& svg": {
          color: {
            _light: "white",
            _dark: "darkGrey",
          },
        },
      },
    },
  ],
});
