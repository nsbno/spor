import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("fab").parts("container", "icon", "text");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "flex",
      alignItems: "center",
      py: 2,
      pl: 2,
      pr: props.isTextVisible ? 3 : 2,
      cursor: "pointer",
      overflowX: "hidden",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      boxShadow: "md",
      transitionDuration: "fast",
      transitionProperty: "common",
      position: "fixed",
      ...getPositionProps(props),
      _disabled: {
        backgroundColor: "whiteAlpha.400",
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
        backgroundColor: "seaMist",
      },
      zIndex: "sticky",
    },
    icon: {
      mr: props.isTextVisible ? 1 : 0,
    },
    text: {
      display: "flex",
      flex: "none",
      alignItems: "center",
      fontWeight: "bold",
      textStyle: "sm",
    },
  }),
  variants: {
    dark: (props) => ({
      container: {
        backgroundColor: "darkTeal",
        color: "white",
        _active: { backgroundColor: "pine" },
        _hover: {
          backgroundColor: "night",
        },
        ...focusVisible({
          focus: {
            boxShadow: `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.darkTeal}, inset 0 0 0 6px ${props.theme.colors.white}`,
            outline: "none",
          },
          notFocus: {
            boxShadow: "md",
          },
        }),
      },
    }),
    light: {
      container: {
        backgroundColor: "white",
        color: "darkGrey",
        _active: { backgroundColor: "mint" },
      },
    },
    green: {
      container: {
        backgroundColor: "mint",
        color: "darkTeal",
        _active: { color: "darkTeal", backgroundColor: "lightGrey" },
      },
    },
  },
  defaultProps: {
    variant: "dark",
  },
});

export default config;

const getPositionProps = (props: StyleFunctionProps) => {
  switch (props.placement) {
    case "top left":
      return { top: "1em", left: "1em" };
    case "top right":
      return { top: "1em", right: "1em" };
    case "bottom left":
      return { bottom: "1em", left: "1em" };
    case "bottom right":
      return { bottom: "1em", right: "1em" };
  }
};
