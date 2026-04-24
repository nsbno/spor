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
  },
  defaultVariants: {
    colorPalette: "grey",
    size: "md",
    attached: false,
  },
});
