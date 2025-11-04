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
        background: "brand.surface",
        color: "brand.text",
        fontWeight: "bold",
        _hover: {
          background: "brand.surface.hover",
          _active: {
            background: "brand.surface.active",
          },
        },
      },
      secondary: {
        background: "accent.surface",
        color: "accent.text",
        fontWeight: "bold",
        _hover: {
          background: "accent.surface.hover",
          _active: {
            background: "accent.surface.active",
          },
        },
      },
      tertiary: {
        color: "core.text",
        outline: "solid",
        fontWeight: "normal",
        outlineWidth: tokens.size.stroke.sm,
        outlineColor: "core.outline",
        _hover: {
          outlineWidth: tokens.size.stroke.md,
          outlineColor: "core.outline.hover",
          _active: {
            background: "core.surface.active",
            outlineWidth: tokens.size.stroke.sm,
            outlineColor: "core.outline",
          },
        },
        _focus: {
          outlineWidth: tokens.size.stroke.sm,
        },
      },
      ghost: {
        color: "ghost.text",
        fontWeight: "bold",
        _hover: {
          background: "ghost.surface.hover",
          _active: {
            background: "ghost.surface.active",
          },
        },
      },
      floating: {
        color: "floating.text",
        background: "floating.surface",
        fontWeight: "bold",
        border: "sm",
        borderColor: "floating.outline",
        boxShadow:
          "0px 1px 3px 0px var(--spor-colors-surface-disabled, rgba(0, 0, 0, 0.10))",
        _hover: {
          borderColor: "floating.outline.hover",

          _active: {
            background: "core.surface.active",
            boxShadow: "none",
            borderColor: "floating.outline",
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
