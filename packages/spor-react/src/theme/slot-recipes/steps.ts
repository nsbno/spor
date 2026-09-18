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
      paddingX: 3,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    },
    trigger: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      fontSize: ["mobile.sm", "desktop.xs"],
      paddingX: { base: 0, md: 2 },
      paddingY: { base: 0, md: 1 },
      borderRadius: { base: "9px", md: "2xl" },
      "&[aria-selected='true']": {
        fontWeight: "bold",
        color: { base: "text", md: "text.brand" },
      },
      "&[data-incomplete]": {
        _hover: {
          backgroundColor: "surface.ghost.hover",
        },
        "& svg": {
          color: "icon.disabled",
        },
      },
      "&[data-complete]": {
        fontWeight: { base: "normal", md: "bold" },
        _hover: {
          backgroundColor: "surface.ghost.hover",
        },
      },
      "[data-linear] &": {
        color: "text.subtle",
        _hover: {
          backgroundColor: "transparent",
        },
        "&[aria-selected='true']": {
          color: { base: "text", md: "text.brand" },
          _hover: {
            backgroundColor: "surface.brand",
          },
        },
      },
    },
    indicator: {
      display: { base: "none", md: "flex" },
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
      marginLeft: -1,
      "&[data-current]": {
        color: "text",
      },
      "&[data-incomplete]": {
        "[data-linear] &": {
          backgroundColor: "surface.disabled",
          color: "text.disabled",
        },
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
          color: { base: "text", md: "text.accent" },
        },
        trigger: {
          "&[aria-selected='true']": {
            fontWeight: "bold",
            backgroundColor: { base: "none", md: "surface.brand" },
            color: { base: "text", md: "text.brand" },
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
