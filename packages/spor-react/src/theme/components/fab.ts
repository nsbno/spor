import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
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
    brand: (props) => ({
      container: {
        backgroundColor: mode("darkTeal", "mint")(props),
        color: mode("white", "darkTeal")(props),
        _active: { backgroundColor: mode("pine", "white")(props) },
        _hover: {
          backgroundColor: mode("night", "seaMist")(props),
        },
        ...focusVisible({
          focus: {
            boxShadow: mode(
              `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.darkTeal}, inset 0 0 0 6px ${props.theme.colors.white}`,
              `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.mint}, inset 0 0 0 6px ${props.theme.colors.darkTeal}`,
            )(props),
            outline: "none",
          },
          notFocus: {
            boxShadow: "md",
          },
        }),
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
        ...focusVisible({
          focus: {
            boxShadow: mode(
              `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.white}, inset 0 0 0 6px ${props.theme.colors.darkGrey}`,
              `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.brightRed}, inset 0 0 0 6px ${props.theme.colors.white}`,
            )(props),
            outline: "none",
          },
          notFocus: {
            boxShadow: "md",
          },
        }),
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
        ...focusVisible({
          focus: {
            boxShadow: mode(
              `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.mint}, inset 0 0 0 6px ${props.theme.colors.azure}`,
              `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.pine}, inset 0 0 0 6px ${props.theme.colors.azure}`,
            )(props),
            outline: "none",
          },
          notFocus: {
            boxShadow: "md",
          },
        }),
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
