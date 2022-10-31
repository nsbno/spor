import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("media-controller").parts("container", "iconContainer");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      backgroundColor: "darkTeal",
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      transitionDuration: "fast",
      transitionProperty: "common",
      position: "fixed",
      boxShadow: "md",
      borderRadius: "sm",
      opacity: "0",
      color: "white",
      _disabled: {
        backgroundColor: "silver",
        color: "white",
      },
      _active: { backgroundColor: "pine" },
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
        backgroundColor: "night",
      },
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
