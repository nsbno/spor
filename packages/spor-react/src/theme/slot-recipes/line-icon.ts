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
        backgroundColor: "surface.disabled",
      },
    },
    icon: {
      color: "white",
      "[aria-disabled=true] &": {
        color: "icon.disabled",
      },
    },
    title: {
      color: "darkGrey",
      "[aria-disabled=true] &": {
        color: "text.disabled",
      },
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
        title: {
          color: "text",
        },
        icon: {
          color: "linjetag.walkLight",
          "[aria-disabled=true] &": {
            color: "icon.disabled",
          },
        },
        _disabled: {
          icon: {
            color: "text.disabled",
          },
          title: {
            color: "text.disabled",
          },
        },
      },
      custom: {
        iconContainer: {
          _disabled: {
            backgroundColor: "surface.disabled",
          },
        },
      },
    },
    size: {
      sm: {
        iconContainer: {
          borderRadius: "0.5625rem",
        },
      },
      md: {
        iconContainer: {
          borderRadius: "0.5625rem",
        },
      },
      lg: {
        iconContainer: {
          borderRadius: "sm",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
