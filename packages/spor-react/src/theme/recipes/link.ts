import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  base: {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    backgroundImage: "linear-gradient(currentColor, currentColor)",
    backgroundSize: "100% 1px",
    backgroundPosition: "0 100%",
    backgroundRepeat: "no-repeat",
    borderRadius: "none",
    paddingX: "2px",
    paddingY: "0",
    color: "inherit",
    display: "inline-flex",
    alignItems: "center",
    gap: "0",
    position: "relative",
    boxDecorationBreak: "clone",
    textUnderlineOffset: "0",

    "&:focus, &:focus-visible, &:active, &:hover": {
      backgroundImage: "none",
      backgroundSize: "100%",
      outline: "none",
      borderRadius: "xs",
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
