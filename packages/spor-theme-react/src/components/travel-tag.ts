import type {
  PartsStyleInterpolation,
  PartsStyleObject,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("travel-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description",
  "deviationIcon"
);

const getDeviationContainerStyle = (args: StyleFunctionProps) => {
  switch (args.deviationLevel) {
    case "critical":
      return {
        border: "1px solid",
        borderColor: getDeviationBorderColor(args),
      };
    case "major":
      return {
        border: "1px solid",
        borderColor: getDeviationBorderColor(args),
      };
    default:
      return {};
  }
};

const getDeviationBorderColor = ({ deviationLevel }: StyleFunctionProps) => {
  switch (deviationLevel) {
    case "critical":
      return "brightRed";
    case "major":
      return "golden";
    default:
      return "transparent";
  }
};

const getDeviationIconStyle = ({ deviationLevel }: StyleFunctionProps) => {
  return {
    position: "absolute",
    top: "-7px",
    right: "-7px",
    stroke: "white",
    color: deviationLevel === "info" ? "ocean" : "inherit",
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
    transitionDuration: "fast",
    transitionProperty: "common",
    _disabled: {
      backgroundColor: "silver",
    },
    "button&, a&": {
      _hover: {
        boxShadow: getBoxShadowString({
          borderColor: args.theme.colors.blackAlpha[100],
          baseShadow: "sm",
        }),
      },
      ...focusVisible({
        focus: {
          outline: "none",
          borderColor: "transparent",
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            borderColor: args.theme.colors.darkGrey,
          }),
        },
        notFocus: {
          boxShadow: "none",
          borderColor: getDeviationBorderColor(args),
        },
      }),
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
      backgroundColor: "white",
      _disabled: {
        backgroundColor: "white",
      },
    },
    iconContainer: {
      border: "none",
      position: "relative",
      left: -1,
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
