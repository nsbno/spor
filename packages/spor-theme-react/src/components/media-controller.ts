import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("media-controller").parts(
  "root",
  "container",
  "iconContainer",
  "jumpButton",
  "playPauseButton",
  "skipButton"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      backgroundColor: getRootBackgroundColor(props),
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      transitionDuration: "fast",
      transitionProperty: "common",
      position: "fixed",
      boxShadow: "md",
      borderRadius: "xl",
      _disabled: {
        backgroundColor: "silver",
        color: "white",
      },
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
            baseShadow: "md",
          }),
        },
        notFocus: {
          boxShadow: "md",
        },
      }),
      _hover: {
        backgroundColor: "banana",
      },
    },
    skipButton: {
      px: 0,
      width: "auto",
      minWidth: "auto",
      color: "darkTeal",
      _active: getActiveStyles(props),
    },
    jumpButton: {
      px: 0,
      width: "auto",
      minWidth: "auto",
      color: "darkTeal",
      _active: getActiveStyles(props),
    },
  }),
  
  sizes: {
    md: {
      container: {
        borderRadius: "sm",
      },
      iconContainer: {
        borderRadius: "sm",
      },
    },
    lg: {
      container: {
        borderRadius: "md",
      },
      iconContainer: {
        borderRadius: "0.5625rem", // 9px
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});

export default config;

const getRootBackgroundColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return "white";
    case "dark":
      return "darkTeal";
    case "green":
    default:
      return "mint";
  }
};

/* const getColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return mode("darkGrey", "white")(props);
    case "dark":
      return "white";
    case "green":
    default:
      return mode("darkTeal", "white")(props);
  }
}; */

const getActiveStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return { backgroundColor: "mint" };
    case "dark":
      return { backgroundColor: "banana" };
    case "green":
    default:
      return { color: "darkTeal", backgroundColor: "transparent" };
  }
};
