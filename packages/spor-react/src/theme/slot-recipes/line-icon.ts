import { defineSlotRecipe } from "@chakra-ui/react";
import { linjetagAnatomy } from "./anatomy";

export const lineIconSlotRecipe = defineSlotRecipe({
  slots: linjetagAnatomy.keys(),
  className: "spor-line-icon",
  base: {
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "[aria-disabled=true] &": {
        backgroundColor: "silver",
      },
    },
    icon: {
      color: "white",
      "[aria-disabled=true] &": {
        color: "osloGrey",
      },
    },
    title: {
      color: "black",
    },
  },
  variants: {
    variant: {
      "local-train": {
        iconContainer: {
          backgroundColor: "linjetag.lokaltog",
        },
      },
      "region-train": {
        iconContainer: {
          backgroundColor: "linjetag.regiontog",
        },
      },
      "region-express-train": {
        iconContainer: {
          backgroundColor: "linjetag.regionEkspress",
        },
      },
      "long-distance-train": {
        iconContainer: {
          backgroundColor: "linjetag.fjerntog",
        },
      },
      "airport-express-train": {
        iconContainer: {
          backgroundColor: "linjetag.flytog",
        },
      },
      "vy-bus": {
        iconContainer: {
          backgroundColor: "linjetag.vyBuss",
        },
      },
      "local-bus": {
        iconContainer: {
          backgroundColor: "linjetag.lokalbuss",
        },
      },
      ferry: {
        iconContainer: {
          backgroundColor: "linjetag.ferge",
        },
      },
      subway: {
        iconContainer: {
          backgroundColor: "linjetag.tbane",
        },
      },
      tram: {
        iconContainer: {
          backgroundColor: "linjetag.trikk",
        },
      },
      "alt-transport": {
        iconContainer: {
          backgroundColor: "linjetag.altTransport",
        },
        icon: {
          color: "darkGrey",
          "[aria-disabled=true] &": {
            color: "white",
          },
        },
      },
      walk: {
        iconContainer: {
          backgroundColor: "white",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "blackAlpha.200",
        },
        title: {
          color: "black",
        },
        icon: {
          color: "black",
          "[aria-disabled=true] &": {
            color: "osloGrey",
          },
        },
      },
      custom: {
        iconContainer: {
          _disabled: {
            backgroundColor: "silver !important",
          },
        },
      },
    },
    size: {
      sm: {
        iconContainer: {
          borderRadius: "0.5625rem",
          padding: 1,
        },
      },
      md: {
        iconContainer: {
          borderRadius: "0.5625rem",
          padding: 1,
        },
      },
      lg: {
        iconContainer: {
          borderRadius: "sm",
          padding: 1,
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
