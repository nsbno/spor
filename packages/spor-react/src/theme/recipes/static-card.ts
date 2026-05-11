import { defineRecipe } from "@chakra-ui/react";

export const staticCardRecipe = defineRecipe({
  base: {
    borderRadius: "md",
  },
  variants: {
    colorPalette: {
      neutral: {
        backgroundColor: "surface",
        color: "text",
      },
      grey: {
        backgroundColor: "surface.neutral",
      },
      yellow: {
        backgroundColor: "surface.warning",
      },
      darkYellow: {
        backgroundColor: "surface.notice",
      },
      red: {
        backgroundColor: "surface.critical",
      },
      green: {
        backgroundColor: "surface.success",
      },
      blue: {
        backgroundColor: "surface.info",
      },
      orange: {
        backgroundColor: "surface.caution",
      },
    },
  },
  defaultVariants: {
    // @ts-expect-error Chakra gir feilmelding fordi "neutral" ikke eksisterer i built-in ColorPalette-typen
    colorPalette: "neutral",
  },
});
