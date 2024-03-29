import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { baseText } from "../utils/base-utils";
import { brandBackground } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { surface } from "../utils/surface-utils";

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
      // The SVG icon color is set to the brand background color, due to how SVGs work
      color: brandBackground("default", props).backgroundColor,
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
    play: (props) => ({
      container: {
        padding: 0,
        _hover: {
          color: brandBackground("hover", props).backgroundColor,
        },
        _active: {
          color: brandBackground("active", props).backgroundColor,
        },

        _disabled: {
          pointerEvents: "none",
          color: surface("disabled", props).backgroundColor,
        },
      },
    }),
    jumpSkip: (props) => ({
      container: {
        _hover: {
          ...ghostBackground("hover", props),
        },
        _active: {
          ...ghostBackground("active", props),
        },
        _disabled: {
          pointerEvents: "none",
          ...surface("disabled", props),
          ...baseText("disabled", props),
        },
      },
      icon: {
        width: "0.71em",
        height: "0.71em",
      },
    }),
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
