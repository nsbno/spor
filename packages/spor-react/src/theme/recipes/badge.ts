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
        color: "alert.neutral.text",
        "& svg": {
          color: "alert.neutral.icon",
        },
      },
      grey: {
        backgroundColor: "surface.color.grey",
        color: "alert.neutral.text",
        "& svg": {
          color: "alert.neutral.icon",
        },
      },
      green: {
        backgroundColor: "surface.color.green",
        color: "alert.success.text",
        "& svg": {
          color: "alert.success.icon",
        },
      },
      blue: {
        backgroundColor: "surface.color.blue",
        color: "alert.info.text",
        "& svg": {
          color: "alert.info.icon",
        },
      },
      cream: {
        backgroundColor: "surface.color.cream",
        color: "alert.important.text",
        "& svg": {
          color: "alert.important.icon",
        },
      },
      yellow: {
        backgroundColor: "surface.color.yellow",
        color: "alert.alt.text",
        "& svg": {
          color: "alert.alt.icon",
        },
      },
      orange: {
        backgroundColor: "surface.color.orange",
        color: "alert.error.text.secondary",
        "& svg": {
          color: "alert.error.icon.secondary",
        },
      },
      red: {
        backgroundColor: "surface.color.red",
        color: "alert.error.text",
        "& svg": {
          color: "alert.error.icon",
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
  },
  defaultVariants: {
    colorPalette: "grey",
    size: "md",
    attached: false,
  },
});
