import { defineSlotRecipe } from "@chakra-ui/react";

import { alertAnatomy } from "./anatomy";

const createVariant = (variant: string) => ({
  root: {
    borderColor: `outline.${variant}`,
    background: `surface.${variant}`,
  },
  description: {
    color: `text.${variant}.subtle`,
  },
  title: {
    color: `text.${variant}`,
  },
  closeButton: {
    color: `text.${variant}`,
    _hover: {
      bg: `surface.${variant}.hover`,
      _active: {
        bg: `surface.${variant}.active`,
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
      justifyContent: "space-between",
      alignItems: "flex-start",
      position: "relative",
      textStyle: "sm",
      border: "sm",
    },
    description: {
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
    closeButton: {},
  },
  variants: {
    variant: {
      important: createVariant("warning"),
      alt: createVariant("notice"),
      error: createVariant("critical"),
      success: createVariant("success"),
      info: createVariant("info"),
      neutral: createVariant("neutral"),
      "error-secondary": createVariant("caution"),
      service: createVariant("service"),
    },
  },
  defaultVariants: {
    variant: "info",
  },
});
