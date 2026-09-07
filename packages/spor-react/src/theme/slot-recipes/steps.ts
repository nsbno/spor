import { defineSlotRecipe } from "@chakra-ui/react";

import { stepsAnatomy } from "./anatomy";

export const stepsSlotRecipe = defineSlotRecipe({
  slots: stepsAnatomy.keys(),
  className: "spor-stepper",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    list: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
      "&:not([aria-current='step'])": {
        display: { base: "none", md: "flex" },
      },
    },
    trigger: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      fontSize: ["mobile.sm", "desktop.xs"],
      paddingX: 2,
      paddingY: 1,
      borderRadius: "2xl",
      "&[aria-selected='true']": {
        fontWeight: "bold",
        backgroundColor: { base: "none", md: "surface.brand" },
        color: { base: "text", md: "text.brand" },
      },
      "&[data-incomplete]": {
        color: "text.subtle",
        "& svg": {
          color: "icon.disabled",
        },
      },
      "&[data-complete]": {
        fontWeight: "bold",
      },
    },
    indicator: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      width: "1.5rem",
      height: "1.5rem",
      backgroundColor: "surface",
      outline: "1px solid",
      outlineColor: "outline",
      fontSize: "xs",
      fontWeight: "normal",
      flexShrink: 0,
      "&[data-current]": {
        color: "text",
      },
      "&[data-incomplete]": {
        backgroundColor: "surface.disabled",
        color: "text.disabled",
      },
      "&[data-complete]": {
        "& svg": {
          width: "1.125rem",
          height: "1.125rem",
        },
      },
    },
  },
  variants: {
    variant: {
      core: {
        list: {
          backgroundColor: "transparent",
        },
        stepCounter: {
          color: "text",
        },
      },
      accent: {
        list: {
          backgroundColor: "bg.accent",
          color: "text.accent",
        },
        trigger: {
          "&[aria-selected='true']": {
            fontWeight: "bold",
            backgroundColor: { base: "none", md: "surface.brand" },
            color: { base: "text.accent", md: "text.brand" },
          },
        },
        stepCounter: {
          color: "text.accent",
        },
      },
    },
    size: {
      md: {
        list: {
          paddingY: 0.5,
        },
        item: { marginRight: 2 },
      },
      lg: {
        list: {
          paddingY: 1.5,
        },
        item: {
          marginRight: 5,
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
    size: "md",
  },
});
