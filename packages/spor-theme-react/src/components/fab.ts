import {
  anatomy,
  PartsStyleFunction,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";

const parts = anatomy("fab").parts("container", "icon", "text");

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
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
    _focus: {
      outline: "none",
      boxShadow: `${props.theme.shadows.md}, inset 0 0 0 2px ${props.theme.colors.greenHaze}`,
    },
    "&:focus:not(:focus-visible)": {
      boxShadow: "md",
    },
    _focusVisible: {
      outline: "none",
      boxShadow: `${props.theme.shadows.md}, inset 0 0 0 2px ${props.theme.colors.greenHaze}`,
    },
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
});

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

const variants: Record<string, PartsStyleFunction<typeof parts>> = {
  dark: (props) => ({
    container: {
      backgroundColor: "darkTeal",
      color: "white",
      _active: { backgroundColor: "pine" },
      _hover: {
        backgroundColor: "night",
      },
      _focus: {
        boxShadow: `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.darkTeal}, inset 0 0 0 6px ${props.theme.colors.white}`,
        outline: "none",
      },
      "&:focus:not(:focus-visible)": {
        boxShadow: "md",
      },
      _focusVisible: {
        boxShadow: `${props.theme.shadows.md}, inset 0 0 0 4px ${props.theme.colors.darkTeal}, inset 0 0 0 6px ${props.theme.colors.white}`,
        outline: "none",
      },
    },
  }),
  light: () => ({
    container: {
      backgroundColor: "white",
      color: "darkGrey",
      _active: { backgroundColor: "mint" },
    },
  }),
  green: () => ({
    container: {
      backgroundColor: "mint",
      color: "darkTeal",
      _active: { color: "darkTeal", backgroundColor: "lightGrey" },
    },
  }),
};

const defaultProps = {
  variant: "dark",
};

export default {
  baseStyle,
  defaultProps,
  variants,
};
