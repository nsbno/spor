import { defineSlotRecipe } from "@chakra-ui/react";

import { mediaControllerAnatomy } from "./anatomy";

export const mediaControllerSlotRecipe = defineSlotRecipe({
  slots: mediaControllerAnatomy.keys(),
  className: "spor-media-controller-button",
  base: {
    root: {
      fontSize: 30,
      transitionProperty: "common",
      transitionDuration: "fast",
      borderRadius: "50%",
      appearance: "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      padding: 1,
      alignSelf: "center",
      color: "brand.surface",
      outlineOffset: "2px",
    },
    icon: {
      flex: "0 0 auto",
      display: "block",
    },
  },
  variants: {
    variant: {
      play: {
        root: {
          padding: 0,
          color: "brand.text",
          backgroundColor: "brand.surface",
          _hover: {
            color: "brand.text",
            backgroundColor: "brand.surface.hover",
            _active: {
              color: "brand.text",
              backgroundColor: "brand.surface.active",
            },
          },
          _disabled: {
            pointerEvents: "none",
            color: "icon.disabled",
            backgroundColor: "surface.disabled",
          },
        },
      },
      jumpSkip: {
        root: {
          _hover: {
            backgroundColor: "ghost.surface.hover",
            _active: {
              backgroundColor: "ghost.surface.active",
            },
          },
          _disabled: {
            pointerEvents: "none",
            backgroundColor: "surface.disabled",
            color: "text.disabled",
          },
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
        icon: {
          transform: "scale(1.55)",
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
        icon: {
          transform: "scale(1.55)",
        },
      },
    },
    {
      variant: "jumpSkip",
      size: "sm",
      css: {
        root: {
          fontSize: 24,
        },
      },
    },
    {
      variant: "jumpSkip",
      size: "lg",
      css: {
        root: {
          fontSize: 38,
        },
        icon: {
          margin: 1,
          transform: "scale(1.4)",
        },
      },
    },
  ],
});
