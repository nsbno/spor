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
    },
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      "&:last-of-type": {
        marginRight: 0,
        "& [data-part=separator]": {
          display: "none",
        },
      },
    },
    trigger: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      fontSize: ["mobile.xs", "desktop.xs"],
      paddingX: 2,
      paddingY: 1,
      borderRadius: "2xl",
      "&[aria-selected='true']": {
        fontWeight: "bold",
        backgroundColor: "surface.brand",
        color: "text.brand",
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
      },
      accent: {
        list: {
          backgroundColor: "bg.accent",
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
