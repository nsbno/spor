import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleInterpolation,
  PartsStyleObject,
  StyleFunctionProps,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";

const baseStyleRoot: SystemStyleFunction = () => {
  return {
    display: "flex",
    flexDirection: "column",
  };
};

const baseStyleTablist: SystemStyleFunction = (props) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    width: props.isFitted ? "fit-content" : "100%",
    ...getTablistColorSchemeProps(props),
  };
};

const baseStyleTab: SystemStyleFunction = (props) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: props.isFitted ? "fit-content" : "100%",
    height: "100%",
    ...getTabColorSchemeProps(props),

    _selected: {
      boxShadow: "md",
      pointerEvents: "none",
      ...getTabColorSchemeSelectedProps(props),
    },
    _focus: getTabColorSchemeFocusProps(props),
    ":focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    _focusVisible: getTabColorSchemeFocusProps(props),
    _hover: getTabColorSchemeHoverProps(props),
    _active: getTabColorSchemeActiveProps(props),
    _disabled: getTabColorSchemeDisabledProps(props),
  };
};

const getTabColorSchemeProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        color: "alias.white",
      };
    case "light":
      return {
        color: "alias.darkGrey",
      };
    case "green":
      return {
        color: "alias.darkTeal",
      };
    case "grey":
      return {
        color: "alias.darkGrey",
      };
    default:
      return {};
  }
};

const getTabColorSchemeSelectedProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "alias.white",
        color: "alias.darkTeal",
        _focus: {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.greenHaze}`,
        },
        "&:focus:not(:focus-visible)": {
          boxShadow: "none",
        },
        _focusVisible: {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.greenHaze}`,
        },
        _hover: {
          backgroundColor: "alias.white",
          color: "alias.darkTeal",
        },
        _active: {
          backgroundColor: "alias.white",
          color: "alias.darkTeal",
        },
      };
    default:
      return {
        backgroundColor: "alias.darkTeal",
        color: "alias.white",
        _hover: {
          backgroundColor: "alias.darkTeal",
          color: "alias.white",
        },
        _active: {
          backgroundColor: "alias.darkTeal",
          color: "alias.white",
        },
      };
  }
};

const getTabColorSchemeFocusProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.white}`,
      };
    default:
      return {
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.greenHaze}`,
      };
  }
};

const getTabColorSchemeHoverProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "alias.pine",
      };
    case "light":
      return {
        backgroundColor: "alias.silver",
      };
    case "green":
      return {
        backgroundColor: "alias.coralGreen",
      };
    case "grey":
      return {
        backgroundColor: "alias.silver",
      };
    default:
      return {};
  }
};

const getTabColorSchemeActiveProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "alias.celadon",
        color: "alias.white",
      };
    case "light":
      return {
        backgroundColor: "alias.mint",
        color: "alias.darkGrey",
      };
    case "green":
      return {
        backgroundColor: "alias.seaMist",
        color: "alias.darkTeal",
      };
    case "grey":
      return {
        backgroundColor: "alias.lightGrey",
        color: "alias.darkGrey",
      };
    default:
      return {};
  }
};

const getTabColorSchemeDisabledProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        color: "palette.lightAlpha.200",
      };
    case "light":
      return {
        color: "alias.silver",
      };
    case "green":
      return {
        color: "alias.coralGreen",
      };
    case "grey":
      return {
        color: "alias.steel",
      };
    default:
      return {};
  }
};

const getTablistColorSchemeProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return { backgroundColor: "alias.darkTeal", color: "alias.white" };
    case "light":
      return {
        backgroundColor: "alias.white",
        color: "alias.darkGrey",
        boxShadow: `inset 0 0 0 1px ${props.theme.colors.alias.darkGrey}`,
      };
    case "green":
      return { backgroundColor: "alias.mint", color: "alias.darkTeal" };
    case "grey":
      return {
        backgroundColor: "alias.platinum",
        color: "alias.darkGrey",
      };
    default:
      return {};
  }
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot(props),
  tablist: baseStyleTablist(props),
  tab: baseStyleTab(props),
  tabpanel: {},
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    tablist: {
      height: "30px",
      p: "2px",
    },
    tab: {
      px: 2,
      py: 0,
    },
  },
  md: {
    tablist: {
      height: "36px",
      p: 0.5,
    },
    tab: {
      px: 2,
    },
  },
  lg: {
    tablist: {
      height: "42px",
      p: 0.5,
    },
    tab: {
      fontWeight: "bold",
      px: 2,
    },
  },
  xl: {
    tablist: {
      height: "54px",
      p: "4px",
    },
    tab: {
      fontWeight: "bold",
      px: 3,
    },
  },
};

const variantRound: PartsStyleInterpolation<typeof parts> = (props) => ({
  tablist: {
    borderRadius: "42px",
  },
  tab: {
    borderRadius: "xl",
  },
});

const variantSquare: PartsStyleInterpolation<typeof parts> = {
  tablist: {
    borderRadius: "sm",
  },
  tab: {
    borderRadius: "9px",
  },
};

const variants: Record<string, PartsStyleInterpolation<typeof parts>> = {
  round: variantRound,
  square: variantSquare,
};

const defaultProps = {
  size: "md",
  variant: "round",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
