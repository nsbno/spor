import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("alert").parts(
  "container",
  "iconContainer",
  "textContainer",
  "title"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "inline-flex",
      alignItems: "center",
      width: "fit-content",
      justifyContent: ["space-between", "center"],
      transitionDuration: "fast",
      transitionProperty: "common",
      fontSize: ["mobile.sm", "desktop.sm"],
      border: 0,
      whiteSpace: "nowrap",
      px: 1,
      borderRadius: "sm",
      padding: 0.5,
      position: "relative",
      ...focusVisible({
        focus: {
          color: "white",
          border: "2px solid",
          borderColor: "darkGrey",
        },
        notFocus: { boxShadow: "none" },
      }),
    },
    iconContainer: {
      padding: 1,
      color: "darkGrey",
    },
    textContainer: {
      color: "darkGrey",
      whiteSpace: "nowrap",
    },
    title: {
      WebkitBoxOrient: "vertical",
      fontWeight: "normal",
    },
  }),
  variants: {
    warning: {
      container: {
        backgroundColor: "blonde",
      },
      _hover: {
        backgroundColor: "primerose",
      },
      _active: {
        backgroundColor: "cornsilk",
      },
    },
    success: {
      container: {
        backgroundColor: "seaMist",
        _hover: {
          backgroundColor: "coralGreen",
        },
        _active: {
          backgroundColor: "mint",
        },
      },
    },
    info: {
      container: {
        backgroundColor: "lightBlue",
        _hover: {
          backgroundColor: "cloudy",
        },
        _active: {
          backgroundColor: "icyBlue",
        },
      },
    },
    allTransport: {
      container: {
        backgroundColor: "banana",
        _hover: {
          backgroundColor: "burntYellow",
        },
        _active: {
          backgroundColor: "primerose",
        },
      },
    },
    error: {
      container: {
        backgroundColor: "lightRed",
        _hover: {
          backgroundColor: "salmon",
        },
        _active: {
          backgroundColor: "pink",
        },
      },
    },
  },
});

export default config;
