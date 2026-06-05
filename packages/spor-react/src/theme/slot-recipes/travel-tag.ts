import { defineSlotRecipe } from "@chakra-ui/react";

import { travelTagAnatomy } from "./anatomy";

//Todo: here
export const travelTagSlotRecipe = defineSlotRecipe({
  slots: travelTagAnatomy.keys(),
  className: "spor-travel-tag",
  base: {
    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: 0.5,

      _disabled: {
        background: "surface.disabled",
      },

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
      "local-train": {
        container: {
          backgroundColor: {
            _light: "linjetag.lokaltogLight",
            _dark: "surface.disabled",
          },
        },
      },
      "region-train": {
        container: {
          backgroundColor: {
            _light: "linjetag.regiontogLight",
            _dark: "surface.disabled",
          },
        },
      },
      "region-express-train": {
        container: {
          backgroundColor: {
            _light: "linjetag.regionEkspressLight",
            _dark: "surface.disabled",
          },
        },
      },
      "long-distance-train": {
        container: {
          backgroundColor: {
            _light: "linjetag.fjerntogLight",
            _dark: "surface.disabled",
          },
        },
      },
      "airport-express-train": {
        container: {
          backgroundColor: {
            _light: "linjetag.flytogLight",
            _dark: "surface.disabled",
          },
        },
      },
      "vy-bus": {
        container: {
          backgroundColor: {
            _light: "linjetag.vyBussLight",
            _dark: "surface.disabled",
          },
        },
      },
      "local-bus": {
        container: {
          backgroundColor: {
            _light: "linjetag.lokalbussLight",
            _dark: "surface.disabled",
          },
        },
      },
      ferry: {
        container: {
          backgroundColor: {
            _light: "linjetag.fergeLight",
            _dark: "surface.disabled",
          },
        },
      },
      subway: {
        container: {
          backgroundColor: {
            _light: "linjetag.tbaneLight",
            _dark: "surface.disabled",
          },
        },
      },
      tram: {
        container: {
          backgroundColor: {
            _light: "linjetag.trikkLight",
            _dark: "surface.disabled",
          },
        },
      },
      "alt-transport": {
        container: {
          backgroundColor: {
            _light: "linjetag.altTransportLight",
            _dark: "surface.disabled",
          },
        },
      },
      walk: {
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
