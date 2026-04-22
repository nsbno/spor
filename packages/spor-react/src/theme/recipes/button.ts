import { defineRecipe } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const buttonRecipe = defineRecipe({
  className: "spor-button",
  base: {
    border: 0,
    borderRadius: "xl",
    display: "flex",
    gap: "1",
    alignItems: "center",
    justifyContent: "center",
    transitionProperty: "common",
    transitionDuration: "normal",
    cursor: "pointer",
    textWrap: "wrap",
    width: "fit-content",
    _disabled: {
      cursor: "not-allowed",
      pointerEvents: "none",
      boxShadow: "none",
      color: "text.disabled",
      background: "surface.disabled",
    },
    _focus: {
      outlineOffset: tokens.size.stroke.md,
    },
  },
  variants: {
    variant: {
      primary: {
        background: "surface.brand",
        color: "text.brand",
        fontWeight: "bold",
        _hover: {
          background: "surface.brand.hover",
          _active: {
            background: "surface.brand.active",
          },
        },
      },
      secondary: {
        background: "surface.accent",
        color: "text.accent",
        fontWeight: "bold",
        _hover: {
          background: "surface.accent.hover",
          _active: {
            background: "surface.accent.active",
          },
        },
      },
      tertiary: {
        color: "text.core",
        outline: "solid",
        fontWeight: "normal",
        outlineWidth: tokens.size.stroke.sm,
        outlineColor: "outline.core",
        _hover: {
          outlineWidth: tokens.size.stroke.md,
          outlineColor: "outline.core.hover",
          _active: {
            background: "surface.core.active",
            outlineWidth: tokens.size.stroke.sm,
            outlineColor: "outline.core",
          },
        },
        _focus: {
          outlineWidth: tokens.size.stroke.sm,
        },
      },
      ghost: {
        color: "text.ghost",
        fontWeight: "bold",
        _hover: {
          background: "surface.ghost.hover",
          _active: {
            background: "surface.ghost.active",
          },
        },
      },
      floating: {
        color: "text.floating",
        background: "surface.floating",
        fontWeight: "bold",
        border: "sm",
        borderColor: "outline.floating",
        boxShadow:
          "0px 1px 3px 0px var(--spor-colors-surface-disabled, rgba(0, 0, 0, 0.10))",
        _hover: {
          borderColor: "outline.floating.hover",

          _active: {
            background: "surface.core.active",
            boxShadow: "none",
            borderColor: "outline.floating",
          },
        },
      },
    },
    size: {
      xs: {
        minHeight: 5,
        minWidth: 5,
        paddingX: 1.5,
        fontSize: "mobile.xs",
      },
      sm: {
        minHeight: 6,
        minWidth: 6,
        paddingX: 2,
        fontSize: "mobile.sm",
      },
      md: {
        minHeight: 7,
        minWidth: 7,
        fontSize: "mobile.md",
        paddingX: 3,
      },
      lg: {
        minHeight: 8,
        minWidth: 8,
        fontSize: "mobile.md",
        paddingX: 3,
      },
    },
  },
  compoundVariants: [
    {
      variant: ["ghost", "floating"],
      size: ["sm", "xs"],
      css: {
        fontWeight: "normal",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
