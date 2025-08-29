import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    color: "text",
    cursor: "pointer",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    gap: "0.5",
    textDecorationColor: "text",
    borderRadius: "xs",
    paddingX: "0.5",

    _hover: {
      textDecoration: "none",
    },

    "& svg": {
      display: "inline-block",
      width: "1.125em",
      height: "1.125em",
      position: "relative",
      bottom: "1px",
      scale: "0.8",
      marginRight: "-2px",
    },
  },
  variants: {
    variant: {
      primary: {
        color: "core.text",
        _hover: {
          color: "text.default",
          _active: {
            color: "text.disabled",
          },
        },
      },
      secondary: {
        color: "text.hightlight",
        padding: "2px",
        _hover: {
          color: "text.hightlight",
          _active: {
            color: "text.disabled",
          },
        },
      },
    },
    size: {
      xs: {
        fontSize: { base: "mobile.xs", sm: "desktop.xs" },
      },
      sm: {
        fontSize: { base: "mobile.sm", sm: "desktop.sm" },
      },
      md: {
        fontSize: { base: "mobile.md", sm: "desktop.md" },
      },
      lg: {
        fontSize: { base: "mobile.lg", sm: "desktop.lg" },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
