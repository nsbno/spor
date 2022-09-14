import type {
  PartsStyleInterpolation,
  PartsStyleObject,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";

const parts = anatomy("travel-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description",
  "deviationIcon"
);

const getDeviationContainerStyle = ({ deviationLevel }: StyleFunctionProps) => {
  switch (deviationLevel) {
    case "critical":
      return {
        border: "1px solid",
        borderColor: "alias.brightRed",
      };
    case "major":
      return {
        border: "1px solid",
        borderColor: "alias.golden",
      };
    default:
      return {};
  }
};

const getDeviationIconStyle = ({ deviationLevel }: StyleFunctionProps) => {
  return {
    position: "absolute",
    top: "-7px",
    right: "-7px",
    stroke: "white",
    color: deviationLevel === "info" ? "alias.ocean" : "inherit",
  };
};

const baseStyle: PartsStyleInterpolation<typeof parts> = (args) => ({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: 0.5,
    width: "fit-content",
    ...getDeviationContainerStyle(args),
    _disabled: {
      backgroundColor: "alias.silver",
    },
  },
  iconContainer: {
    padding: 0.5,
    "[aria-disabled=true] &": {
      backgroundColor: "alias.osloGrey",
      color: "alias.white",
    },
  },
  textContainer: {
    color: "alias.darkGrey",
    paddingRight: 0.5,
    "[aria-disabled=true] &": {
      color: "alias.dimGrey",
    },
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    fontWeight: "normal",
  },
  deviationIcon: {
    ...getDeviationIconStyle(args),
  },
});

const variants: Record<string, PartsStyleInterpolation<typeof parts>> = {
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
      backgroundColor: "alias.white",
      _disabled: {
        backgroundColor: "alias.white",
      },
    },
    iconContainer: {
      border: "none",
      position: "relative",
      left: -1,
      "[aria-disabled=true] &": {
        backgroundColor: "transparent",
        color: "alias.osloGrey",
      },
    },
    textContainer: {
      position: "absolute",
      left: 2,
      bottom: -0.5,
      "[aria-disabled=true] &": {
        color: "alias.osloGrey",
      },
    },
    title: {
      fontSize: "mobile.xs",
      fontWeight: "normal",
    },
    description: {
      display: "none",
    },
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
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
};

const defaultProps = {
  size: "md",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
