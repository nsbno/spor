import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-util";

const parts = anatomy("fab").parts("container", "icon", "text");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "flex",
      alignItems: "center",
      paddingY: 2,
      paddingLeft: 2,
      paddingRight: props.isTextVisible ? 3 : 2,
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
      ...focusVisibleStyles(props),
      _hover: {
        backgroundColor: "seaMist",
      },
      zIndex: "sticky",
    },
    icon: {
      marginRight: props.isTextVisible ? 1 : 0,
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
    brand: (props) => ({
      container: {
        backgroundColor: mode("darkTeal", "mint")(props),
        color: mode("white", "darkTeal")(props),
        _active: { backgroundColor: mode("pine", "white")(props) },
        _hover: {
          backgroundColor: mode("night", "seaMist")(props),
        },
      },
    }),
    base: (props) => ({
      container: {
        backgroundColor: mode("white", "whiteAlpha.100")(props),
        color: mode("darkGrey", "white")(props),
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.100")(props),
          color: mode("darkGrey", "white")(props),
        },
        _hover: {
          backgroundColor: mode("white", "transparent")(props),
          boxShadow: mode(
            `inset 0 0 0 2px ${props.theme.colors.darkGrey}`,
            `inset 0 0 0 2px ${props.theme.colors.white}`,
          )(props),
          color: mode("darkGrey", "white")(props),
        },
      },
    }),
    accent: (props) => ({
      container: {
        backgroundColor: mode("mint", "pine")(props),
        color: mode("darkTeal", "white")(props),
        _active: {
          backgroundColor: mode("seaMist", "whiteAlpha.100")(props),
          color: mode("darkTeal", "white")(props),
        },
        _hover: {
          backgroundColor: mode("coralGreen", "whiteAlpha.200")(props),
          color: mode("darkTeal", "white")(props),
        },
      },
    }),
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
