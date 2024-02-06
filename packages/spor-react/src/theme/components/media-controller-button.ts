import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-util";

const parts = anatomy("media-controller-button").parts("container", "icon");
const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      fontSize: 30,
      transitionProperty: "common",
      transitionDuration: "fast",
      borderRadius: "round",
      appearance: "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      padding: 1,
      alignSelf: "center",
      color: "primaryGreen",
      ...focusVisibleStyles(props),
    },
    icon: {
      flex: "0 0 auto",
      display: "block",
      width: "1em",
      height: "1em",
    },
  }),
  variants: {
    play: {
      container: {
        padding: 0,
        _hover: {
          color: "pine",
        },
        _active: {
          color: "greenHaze",
        },

        _disabled: {
          color: "silver",
          _hover: {
            color: "silver",
          },
          _active: {
            color: "silver",
          },
        },
      },
    },
    jumpSkip: {
      container: {
        _hover: {
          backgroundColor: "seaMist",
        },
        _active: {
          backgroundColor: "mint",
        },
        _disabled: {
          backgroundColor: "platinum",
          color: "steel",
          _hover: {
            backgroundColor: "platinum",
          },
          _active: {
            backgroundColor: "platinum",
          },
        },
      },
      icon: {
        width: "0.71em",
        height: "0.71em",
      },
    },
  },
  sizes: {
    sm: {
      container: {
        fontSize: 42,
      },
    },
    lg: {
      container: {
        fontSize: 60,
      },
    },
  },
});

export default config;
