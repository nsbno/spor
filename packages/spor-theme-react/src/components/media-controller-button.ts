import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("media-controller-button").parts("container", "icon");
const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: {
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
      color: "darkTeal",
    },
    icon: {
      flex: "0 0 auto",
      display: "block",
      width: "1em",
      height: "1em",
    },
  },
  variants: {
    play: {
      container: {
        padding: 0,
        _hover: {
          color: "night",
        },
        _active: {
          color: "primaryGreen",
        },
        ...focusVisible({
          focus: {
            position: "relative",
            outline: "none",
            _after: {
              content: '""',
              display: "block",
              zIndex: 2,
              margin: 0.5,
              borderRadius: "round",
              borderWidth: 2,
              borderColor: "white",
              borderStyle: "solid",
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              outline: "none",
            },
          },
          notFocus: {
            _after: {
              display: "none",
            },
          },
        }),
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
        ...focusVisible({
          focus: {
            boxShadow: getBoxShadowString({
              borderColor: "greenHaze",
              borderWidth: 2,
            }),
            outline: "none",
          },
          notFocus: {
            boxShadow: "none",
          },
        }),
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
