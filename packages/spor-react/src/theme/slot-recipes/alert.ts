import { defineSlotRecipe } from "@chakra-ui/react";
import { alertAnatomy } from "./anatomy";

const createVariant = (variant: string) => ({
  root: {
    borderColor: `alert.${variant}.outline`,
    background: `alert.${variant}.surface`,
  },
  description: {
    color: `alert.${variant}.text.secondary`,
  },
  title: {
    color: `alert.${variant}.text`,
  },
  closeButton: {
    color: `alert.${variant}.text`,
    _hover: {
      bg: `alert.${variant}.surface.hover`,
      _active: {
        bg: `alert.${variant}.surface.active`,
      },
    },
  },
});

export const alertSlotRecipe = defineSlotRecipe({
  className: "spor-alert",
  slots: alertAnatomy.keys(),
  base: {
    root: {
      borderRadius: "sm",
      padding: 2,
      display: "flex",
      maxWidth: "300px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      position: "relative",
      textStyle: "sm",
      border: "sm",
    },
    description: {
      display: "flex",
      alignItems: "flex-start",
      gap: 1.5,
      color: "text",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
      alignItems: "flex-start",
    },
    title: {
      fontWeight: "bold",
    },
  },
  variants: {
    variant: {
      important: createVariant("important"),
      alt: createVariant("alt"),
      error: createVariant("error"),
      success: createVariant("success"),
      info: createVariant("info"),
      neutral: createVariant("neutral"),
      "error-secondary": createVariant("error-secondary"),
      service: createVariant("service"),
    },
  },
  defaultVariants: {
    variant: "info",
  },
});
