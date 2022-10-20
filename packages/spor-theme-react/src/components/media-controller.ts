import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, StyleFunctionProps } from "@chakra-ui/theme-tools";

const parts = anatomy("media-controller").parts(
  "container",
  "iconContainer",
  "icon"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "inline-flex",
      color: "darkTeal",
      alignItems: "center",
      whiteSpace: "nowrap",
      px: 1,
      _focus: {
        boxShadow: 0,
        outline: 0,
      },
      _hover: {
        _disabled: {
          background: "silver",
        },
      },
      _active: {
        backgroundColor: "pine",
      },
    },
    iconContainer: {
      padding: 0.5,
      border: "none",
      position: "relative",
      "[aria-diasabled=true] &": {
        backgroundColor: "transparent",
      },
      color: getColor(props),
    },
    icon: {
      color: "white",
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
        borderRadius: "sm",
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

const getColor = (props: StyleFunctionProps) => {
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
