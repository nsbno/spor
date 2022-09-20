import type { PartsStyleObject } from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";

const parts = anatomy("line-tag").parts("iconContainer", "icon");

const baseStyle: PartsStyleObject<typeof parts> = {
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
};

const variants = {
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
    icon: {
      color: "darkGrey",
      "[aria-disabled=true] &": {
        color: "osloGrey",
      },
    },
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
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
};

const defaultProps = {
  size: "md",
};

export default {
  parts: parts.keys,
  defaultProps,
  baseStyle,
  variants,
  sizes,
};
