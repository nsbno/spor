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
      color: "darkGrey",
      paddingRight: 0.5,
      whiteSpace: "nowrap",
    },
    title: {
      fontWeight: "bold",
      color: "brand.text.inverted",
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
          borderColor: "error.text",
        },
        deviationIcon: {
          color: "brightRed",
        },
      },
      major: {
        container: {
          border: "1px solid",
          borderColor: "golden",
        },
      },
      minor: {},
      info: {
        deviationIcon: {
          color: "ocean",
        },
      },
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
        textContainer: {
          position: "absolute",
          left: "1.3rem",
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
