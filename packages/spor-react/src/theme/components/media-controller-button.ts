import { defineSlotRecipe } from "@chakra-ui/react";
import { baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { surface } from "../utils/surface-utils";

export const mediaControllerSlotRecipe = defineSlotRecipe({
  slots: ["root", "icon"],
  className: "spor-media-controller-button",
  base: {
    root: {
      fontSize: 30,
      transitionProperty: "common",
      transitionDuration: "fast",
      borderRadius: "round",
      appearance: "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      padding: 1,
      alignSelf: "center",
      // The SVG icon color is set to the brand background color, due to how SVGs work
      color: brandBackground("default").backgroundColor,
      ...focusVisibleStyles(),
    },
    icon: {
      flex: "0 0 auto",
      display: "block",
      width: "1em",
      height: "1em",
    },
  },
  variants: {
    variant: {
      play: {
        root: {
          padding: 0,
          ...brandText("default"),
          ...brandBackground("default"),
          _hover: {
            ...brandText("default"),
            ...brandBackground("hover"),
          },
          _active: {
            ...brandText("default"),
            ...brandBackground("active"),
          },

          _disabled: {
            pointerEvents: "none",
            color: "icon.disabled",
            ...surface("disabled"),
          },
        },
      },
      jumpSkip: {
        root: {
          _hover: {
            ...ghostBackground("hover"),
          },
          _active: {
            ...ghostBackground("active"),
          },
          _disabled: {
            pointerEvents: "none",
            ...surface("disabled"),
            ...baseText("disabled"),
          },
        },
        icon: {
          width: "0.71em",
          height: "0.71em",
        },
      },
    },
    size: {
      sm: {
        root: {
          fontSize: 42,
        },
      },
      lg: {
        root: {
          fontSize: 60,
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "play",
      size: "sm",
      css: {
        root: {
          fontSize: 24,
          width: "2.625rem",
          height: "2.625rem",
        },
      },
    },
    {
      variant: "play",
      size: "lg",
      css: {
        root: {
          fontSize: 38,
          width: "3.75rem",
          height: "3.75rem",
        },
      },
    },
  ],
});
