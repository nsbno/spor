import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  base: {
    display: "inline",
    color: "inherit",
    cursor: "pointer",
    textDecorationLine: "underline",
    textDecorationSkipInk: "none",
    textUnderlineOffset: "auto",
    textUnderlinePosition: "from-font",

    gap: "0.5",
    borderRadius: "xs",
    paddingX: "0.5",
    whiteSpace: "normal",
    wordBreak: "break-word",

    _hover: {
      textDecoration: "none",
    },

    "& svg": {
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
        fontSize: "mobile.xs",
      },
      sm: {
        fontSize: "mobile.sm",
      },
      md: {
        fontSize: "mobile.md",
      },
      lg: {
        fontSize: "mobile.lg",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
