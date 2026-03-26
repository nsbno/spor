import { defineSlotRecipe } from "@chakra-ui/react";

import { tagAnatomy } from "./anatomy";

export const tagSlotRecipe = defineSlotRecipe({
  slots: tagAnatomy.keys(),
  className: "tag",
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
            outlineColor: "core.outline.hover",
          },
          "&:active": {
            outline: "none",
            backgroundColor: "core.surface.active",
          },
        },
      },
      accent: {
        root: {
          backgroundColor: "accent.surface",
          color: "text.highlight",
          "& svg": {
            color: "icon.highlight",
          },
          "&:hover": {
            backgroundColor: "accent.surface.hover",
          },
          "&:active": {
            backgroundColor: "accent.surface.active",
            outline: "none",
          },
        },
      },
      brand: {
        root: {
          backgroundColor: "brand.surface",
          color: "text.inverted",
          "& svg": {
            color: "icon.inverted",
          },
          "&:hover": {
            backgroundColor: "brand.surface.hover",
          },
          "&:active": {
            backgroundColor: "brand.surface.active",
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
          paddingY: "0",
          fontWeight: "normal",
          borderRadius: "xs",
        },
      },
      sm: {
        root: {
          fontSize: "desktop.sm",
          paddingX: "2",
          paddingY: "0.5",
          fontWeight: "bold",
          borderRadius: "9px",
        },
      },
      md: {
        root: {
          padding: 5,
          fontSize: "desktop.md",
          paddingX: "2",
          paddingY: "1",
          fontWeight: "bold",
          borderRadius: "sm",
        },
      },
      lg: {
        root: {
          fontSize: "desktop.md",
          paddingX: "2",
          paddingY: "3",
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
