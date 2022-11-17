import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("alert").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "inline-flex",
      alignItems: "center",
      width: "fit-content",
      justifyContent: "center",
      transitionDuration: "fast",
      transitionProperty: "common",
      fontSize: ["mobile.sm", "desktop.sm"],
      borderRadius: "sm",
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 1.5,
      paddingBottom: 1.5,
      padding: 0.5,
      position: "relative",
      _focus: {
        backgroundColor: "blonde",
        outline: "2px solid",
        outlineColor: "darkGrey",
      },
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "darkGrey",
    },
    textContainer: {
      color: "darkGrey",
      whiteSpace: "nowrap",
    },
  }),
  variants: {
    warning: {
      container: {
        backgroundColor: "banana",
      },
      _hover: {
        backgroundColor: "primerose",
      },
      _active: {
        backgroundColor: "cornsilk",
      },
    },
    allTransport: {
      container: {
        backgroundColor: "blonde",
      },
    },
    error: {
      container: {
        backgroundColor: "lightRed",
      },
    },
    success: {
      container: {
        backgroundColor: "seaMist",
      },
    },
    info: {
      container: {
        backgroundColor: "lightBlue",
      },
    },
  },
});

export default config;
