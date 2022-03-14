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
    pr: 3,
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
      backgroundColor: "palette.whiteAlpha.400",
      color: "alias.white",
    },
    _focus: {
      outline: "none",
      boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.greenHaze}`,
    },
    "&:focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    _focusVisible: {
      outline: "none",
      boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.greenHaze}`,
    },
    _hover: {
      backgroundColor: "alias.seaMist",
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
      backgroundColor: "alias.darkTeal",
      color: "alias.white",
      _active: { backgroundColor: "alias.pine" },
      _hover: {
        backgroundColor: "alias.night",
      },
      _focus: {
        boxShadow: `inset 0 0 0 4px ${props.theme.colors.alias.darkTeal}, inset 0 0 0 6px ${props.theme.colors.alias.white}`,
        outline: "none",
      },
      "&:focus:not(:focus-visible)": {
        boxShadow: "none",
      },
      _focusVisible: {
        boxShadow: `inset 0 0 0 4px ${props.theme.colors.alias.darkTeal}, inset 0 0 0 6px ${props.theme.colors.alias.white}`,
        outline: "none",
      },
    },
  }),
  light: () => ({
    container: {
      backgroundColor: "alias.white",
      color: "alias.darkGrey",
      _active: { backgroundColor: "alias.mint" },
    },
  }),
  green: () => ({
    container: {
      backgroundColor: "alias.mint",
      color: "alias.darkTeal",
      _active: { color: "alias.darkTeal", backgroundColor: "alias.lightGrey" },
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
