import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { anatomy, mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("travel-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description",
  "deviationIcon",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: 0.5,
      width: "fit-content",
      ...getDeviationContainerStyle(props),
      transitionDuration: "fast",
      transitionProperty: "common",
      _disabled: {
        backgroundColor: "silver",
      },
      "button&, a&": {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: props.theme.colors.blackAlpha[100],
            baseShadow: "sm",
          }),
        },
        ...focusVisible({
          focus: {
            outline: "none",
            borderColor: "transparent",
            boxShadow: getBoxShadowString({
              borderWidth: 2,
              borderColor: "darkGrey",
            }),
          },
          notFocus: {
            boxShadow: "none",
            borderColor: getDeviationBorderColor(props),
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
      ...getDeviationIconStyle(props),
    },
  }),
  variants: {
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
    walk: (props) => ({
      container: {
        backgroundColor: mode("white", "transparent")(props),
        _disabled: {
          backgroundColor: "white",
        },
      },
      iconContainer: {
        border: "none",
        position: "relative",
        left: -1,
        backgroundColor: mode("white", "transparent")(props),
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
        color: mode("black", "white")(props),
      },
      description: {
        display: "none",
      },
    }),
    custom: (props) => ({
      container: {
        backgroundColor: props.foregroundColor,
      },
    }),
  },
  sizes: {
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
  defaultProps: {
    size: "md",
  },
});

export default config;

const getDeviationContainerStyle = (props: StyleFunctionProps) => {
  switch (props.deviationLevel) {
    case "critical":
      return {
        border: "1px solid",
        borderColor: getDeviationBorderColor(props),
      };
    case "major":
      return {
        border: "1px solid",
        borderColor: getDeviationBorderColor(props),
      };
    default:
      return {};
  }
};

const getDeviationBorderColor = (props: StyleFunctionProps) => {
  switch (props.deviationLevel) {
    case "critical":
      return "brightRed";
    case "major":
      return "golden";
    default:
      return "transparent";
  }
};

const getDeviationIconStyle = (props: StyleFunctionProps) => {
  return {
    position: "absolute",
    top: "0",
    right: "0",
    transform: "translate(50%, -50%)",
    zIndex: "banner",
    stroke: "white",
    color:
      deviationIconColor[
        props.deviationLevel as keyof typeof deviationIconColor
      ] || "inherit",
  };
};

const deviationIconColor = {
  critical: "brightRed",
  major: "golden",
  minor: "golden",
  info: "ocean",
} as const;
