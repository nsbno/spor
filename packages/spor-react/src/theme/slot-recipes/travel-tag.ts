import { defineSlotRecipe } from "@chakra-ui/react";

import { travelTagAnatomy } from "./anatomy";

export const travelTagSlotRecipe = defineSlotRecipe({
  slots: travelTagAnatomy.keys(),
  className: "spor-travel-tag",
  base: {
    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: 0.5,
      backgroundColor: "surface.disabled",

      width: "fit-content",
      transitionDuration: "fast",
      transitionProperty: "common",
      "button&, a&": {
        boxShadow: "sm",
        _hover: {
          boxShadow: "md",
        },
        _active: {
          opacity: 0.5,
          boxShadow: "none",
        },
      },
    },
    textContainer: {
      color: "text",
      paddingRight: 0.5,
      whiteSpace: "nowrap",
    },
    title: {
      fontWeight: "bold",
      color: "text",
      "[aria-disabled=true] &": {
        color: "text.disabled",
      },
    },
    description: {
      fontWeight: "normal",
      "[aria-disabled=true] &": {
        color: "text.disabled",
      },
    },
    deviationIcon: {
      position: "absolute",
      top: "0",
      right: "0",
      transform: "translate(50%, -50%)",
      zIndex: "docked",
    },
  },
  variants: {
    deviationLevel: {
      critical: {
        container: {
          border: "1px solid",
          borderColor: "outline.error",
        },
        deviationIcon: {
          color: "outline.error",
        },
      },
      major: {
        container: {
          border: "1px solid",
          // eslint-disable-next-line spor/use-semantic-tokens
          borderColor: "golden",
        },
      },
      minor: {},
      info: {},
      none: {},
    },
    variant: {
      walk: {
        container: {
          backgroundColor: "none",
        },
        textContainer: {
          position: "absolute",
          left: "0.875rem",
          bottom: 0,
        },

        title: {
          fontSize: "mobile.xs",
          fontWeight: "normal",
          color: "text",
        },
        description: {
          display: "none",
        },
      },
    },
    size: {
      sm: {
        container: {
          borderRadius: "sm",
        },
        iconContainer: {
          borderRadius: "xs",
        },
        textContainer: {
          marginLeft: 1,
          fontSize: "mobile.sm",
        },
      },
      md: {
        container: {
          borderRadius: "sm",
        },
        iconContainer: {
          borderRadius: "0.5625rem", // 9px
        },
        textContainer: {
          marginLeft: 1.5,
          fontSize: "mobile.sm",
        },
      },
      lg: {
        container: {
          borderRadius: "sm",
        },
        iconContainer: {
          borderRadius: "0.5625rem", // 9px
        },
        textContainer: {
          marginLeft: 2,
          fontSize: "mobile.md",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
