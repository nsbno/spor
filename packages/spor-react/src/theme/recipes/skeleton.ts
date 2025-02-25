import { defineRecipe } from "@chakra-ui/react";

export const skeletonRecipe = defineRecipe({
  className: "chakra-skeleton",
  variants: {
    loading: {
      true: {
        borderRadius: "xs",
        boxShadow: "none",
        backgroundClip: "padding-box",
        cursor: "default",
        color: "transparent",
        pointerEvents: "none",
        userSelect: "none",
        flexShrink: "0",
        "&::before, &::after, *": {
          visibility: "hidden",
        },
      },
      false: {
        background: "unset",
        animation: "fade-in var(--fade-duration, 0.1s) ease-out !important",
      },
    },
    variant: {
      pulse: {
        background: {
          _light: "silver",
          _dark: "darkGrey",
        },
        animation: "pulse",
        animationDuration: "var(--duration, 1.2s)",
      },
      shine: {
        "--animate-from": "200%",
        "--animate-to": "-200%",
        "--start-color": {
          _light: "colors.lightGrey",
          _dark: "colors.dimGrey",
        },

        "--end-color": {
          _light: "colors.platinum",
          _dark: "colors.darkGrey",
        },
        backgroundImage:
          "linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))",
        backgroundSize: "400% 100%",
        animation: "bg-position var(--duration, 5s) ease-in-out infinite",
      },
      none: {
        animation: "none",
        background: "steel",
      },
    },
  },
});
