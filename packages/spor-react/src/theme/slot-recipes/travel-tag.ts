import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";

export const travelTagSlotRecipe = defineSlotRecipe({
  slots: [
    "container",
    "iconContainer",
    "icon",
    "textContainer",
    "title",
    "description",
    "deviationIcon",
  ],
  className: "spor-travel-tag",
  base: {
    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: 0.5,
      width: "fit-content",
      transitionDuration: "fast",
      transitionProperty: "common",
      _disabled: {
        backgroundColor: "silver",
      },
      "button&, a&": {
        boxShadow: "sm",
        _hover: {
          boxShadow: "md",
        },
        ...focusVisibleStyles(),
        _active: {
          opacity: 0.5,
          boxShadow: "none",
        },
      },
    },
    iconContainer: {
      padding: 0.5,
      "[aria-disabled=true] &": {
        backgroundColor: "osloGrey",
        color: "white",
      },
    },
    textContainer: {
      color: "darkGrey",
      paddingRight: 0.5,
      whiteSpace: "nowrap",
      "[aria-disabled=true] &": {
        color: "dimGrey",
      },
    },
    title: {
      fontWeight: "bold",
    },
    description: {
      fontWeight: "normal",
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
          borderColor: "brightRed",
        },
      },
      major: {
        container: {
          border: "1px solid",
          borderColor: "golden",
        },
      },
      minor: {},
      info: {},
      none: {},
    },
    variant: {
      "local-train": {
        container: {
          backgroundColor: "linjetag.lokaltogLight",
        },
      },
      "region-train": {
        container: {
          backgroundColor: "linjetag.regiontogLight",
        },
      },
      "region-express-train": {
        container: {
          backgroundColor: "linjetag.regionEkspressLight",
        },
      },
      "long-distance-train": {
        container: {
          backgroundColor: "linjetag.fjerntogLight",
        },
      },
      "airport-express-train": {
        container: {
          backgroundColor: "linjetag.flytogLight",
        },
      },
      "vy-bus": {
        container: {
          backgroundColor: "linjetag.vyBussLight",
        },
      },
      "local-bus": {
        container: {
          backgroundColor: "linjetag.lokalbussLight",
        },
      },
      ferry: {
        container: {
          backgroundColor: "linjetag.fergeLight",
        },
      },
      subway: {
        container: {
          backgroundColor: "linjetag.tbaneLight",
        },
      },
      tram: {
        container: {
          backgroundColor: "linjetag.trikkLight",
        },
      },
      "alt-transport": {
        container: {
          backgroundColor: "linjetag.altTransportLight",
        },
      },
      walk: {
        container: {
          backgroundColor: "white",
          _disabled: {
            backgroundColor: "white",
          },
        },
        iconContainer: {
          border: "none",
          position: "relative",
          left: -1,
          backgroundColor: "white",
          "[aria-disabled=true] &": {
            backgroundColor: "transparent",
            color: "osloGrey",
          },
        },
        textContainer: {
          position: "absolute",
          left: 2,
          bottom: -0.5,
          "[aria-disabled=true] &": {
            color: "osloGrey",
          },
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