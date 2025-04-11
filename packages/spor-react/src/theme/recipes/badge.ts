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
        backgroundColor: "surface.color.neutral",
        color: "detail.color.neutral",
      },
      grey: {
        backgroundColor: "surface.color.grey",
        color: "detail.color.grey",
      },
      green: {
        backgroundColor: "surface.color.green",
        color: "detail.color.green",
      },
      blue: {
        backgroundColor: "surface.color.blue",
        color: "detail.color.blue",
      },
      cream: {
        backgroundColor: "surface.color.cream",
        color: "detail.color.cream",
      },
      yellow: {
        backgroundColor: "surface.color.yellow",
        color: "detail.color.yellow",
      },
      orange: {
        backgroundColor: "surface.color.orange",
        color: "detail.color.orange",
      },
      red: {
        backgroundColor: "surface.color.red",
        color: "detail.color.red",
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
  },
  defaultVariants: {
    colorPalette: "grey",
    size: "md",
    attached: false,
  },
});
