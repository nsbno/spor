import { defineSlotRecipe } from "@chakra-ui/react";

import { tagAnatomy } from "./anatomy";

export const inputChipSlotRecipe = defineSlotRecipe({
  slots: tagAnatomy.keys(),
  className: "chakra-tag",
  base: {
    root: {
      display: "flex",
      direction: "row",
      width: "fit-content",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      outline: "none",
      "&:focus": {
        outline: "2px solid",
        outlineColor: "outline.focus",
      },
    },
  },
  variants: {
    variant: {
      core: {
        root: {
          backgroundColor: "surface",
          border: "1px solid",
          borderColor: "outline",
          "&:hover": {
            outline: "2px solid",
            outlineColor: "outline.core.hover",
          },
          "&:active": {
            outline: "none",
            backgroundColor: "surface.core.active",
          },
        },
      },
      accent: {
        root: {
          backgroundColor: "surface.accent",
          color: "text.highlight",
          "& svg": {
            color: "icon.highlight",
          },
          "&:hover": {
            backgroundColor: "surface.accent.hover",
          },
          "&:active": {
            backgroundColor: "surface.accent.active",
            outline: "none",
          },
        },
      },
      brand: {
        root: {
          backgroundColor: "surface.brand",
          color: "text.brand",
          "& svg": {
            color: "icon.brand",
          },
          "&:hover": {
            backgroundColor: "surface.brand.hover",
          },
          "&:active": {
            backgroundColor: "surface.brand.active",
            outline: "none",
          },
        },
      },
    },
    size: {
      xs: {
        root: {
          fontSize: "desktop.xs",
          paddingX: "1.5",
          height: 5,
          fontWeight: "normal",
          borderRadius: "xs",
        },
      },
      sm: {
        root: {
          fontSize: "desktop.sm",
          paddingX: "2",
          height: 6,
          fontWeight: "bold",
          borderRadius: "9px",
        },
      },
      md: {
        root: {
          fontSize: "desktop.md",
          paddingX: "2",
          height: 7,
          fontWeight: "bold",
          borderRadius: "sm",
        },
      },
      lg: {
        root: {
          fontSize: "desktop.md",
          paddingX: "2",
          height: "8",
          fontWeight: "bold",
          borderRadius: "md",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
    size: "sm",
  },
});
