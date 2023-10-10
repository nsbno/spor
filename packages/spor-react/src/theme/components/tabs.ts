import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    tablist: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      width: props.isFitted ? "fit-content" : "100%",
      ...getTablistColorSchemeProps(props),
    },
    tab: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: props.isFitted ? "fit-content" : "100%",
      height: "100%",
      whiteSpace: "nowrap",
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
    },
    tabpanel: {},
  }),
  variants: {
    round: {
      tablist: {
        borderRadius: "42px",
      },
      tab: {
        borderRadius: "xl",
      },
    },
    square: {
      tablist: {
        borderRadius: "sm",
      },
      tab: {
        borderRadius: "9px",
      },
    },
  },
  sizes: {
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
  },
  defaultProps: {
    size: "md",
    variant: "round",
  },
});

export default config;

const getTabColorSchemeProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        color: "white",
      };
    case "light":
      return {
        color: "darkGrey",
      };
    case "green":
      return {
        color: "darkTeal",
      };
    case "grey":
      return {
        color: "darkGrey",
      };
    case "default":
      return {
        color: mode("darkGrey", "white")(props),
      };
    case "accent":
      return {
        color: mode("darkTeal", "white")(props),
      };
    default:
      return {};
  }
};

const getTabColorSchemeSelectedProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "white",
        color: "darkTeal",
        _focus: {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.greenHaze}`,
        },
        "&:focus:not(:focus-visible)": {
          boxShadow: "none",
        },
        _focusVisible: {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.greenHaze}`,
        },
        _hover: {
          backgroundColor: "white",
          color: "darkTeal",
        },
        _active: {
          backgroundColor: "white",
          color: "darkTeal",
        },
      };
    case "default":
      return {
        backgroundColor: "pine",
        color: "white",
        _hover: {
          backgroundColor: "darkTeal",
          color: "white",
        },
        _active: {
          backgroundColor: "darkTeal",
          color: "white",
        },
      }
    case "accent":
      return {
        backgroundColor: "pine",
        color: "white",
        _hover: {
          backgroundColor: "darkTeal",
          color: "white",
        },
        _active: {
          backgroundColor: "darkTeal",
          color: "white",
        },
      }
    default:
      return {
        backgroundColor: "darkTeal",
        color: "white",
        _hover: {
          backgroundColor: "darkTeal",
          color: "white",
        },
        _active: {
          backgroundColor: "darkTeal",
          color: "white",
        },
      };
  }
};

const getTabColorSchemeFocusProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.white}`,
      };
    case "default":
      return {
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.azure}`,
      } 
    case "accent":
      return {
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.azure}`,
      } 
    default:
      return {
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.greenHaze}`,
      };
  }
};

const getTabColorSchemeHoverProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "pine",
      };
    case "light":
      return {
        backgroundColor: "silver",
      };
    case "green":
      return {
        backgroundColor: "coralGreen",
      };
    case "grey":
      return {
        backgroundColor: "silver",
      };
    case "default":
      return {
        boxShadow: mode(`inset 0 0 0 2px ${props.theme.colors.darkGrey}`, `inset 0 0 0 2px ${props.theme.colors.white}`)(props),
        color: mode("darkGrey", "white")(props)
      };
    case "accent":
      return {
        backgroundColor: mode("seaMist", "whiteAlpha.200")(props),
        color: mode("darkTeal", "white")(props)
      };
    default:
      return {};
  }
};

const getTabColorSchemeActiveProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "celadon",
        color: "white",
      };
    case "light":
      return {
        backgroundColor: "mint",
        color: "darkGrey",
      };
    case "green":
      return {
        backgroundColor: "seaMist",
        color: "darkTeal",
      };
    case "grey":
      return {
        backgroundColor: "lightGrey",
        color: "darkGrey",
      };
    case "default":
      return {
        backgroundColor: mode("mint", "whiteAlpha.100")(props),
        color: mode("darkGrey", "white")(props),
      };
    case "accent":
      return {
        backgroundColor: mode("seaMist", "whiteAlpha.100")(props),
        color: mode("darkTeal", "white")(props),
      };
    default:
      return {};
  }
};

const getTabColorSchemeDisabledProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        color: "lightAlpha.200",
      };
    case "light":
      return {
        color: "silver",
      };
    case "green":
      return {
        color: "coralGreen",
      };
    case "grey":
      return {
        color: "steel",
      };
    case "default":
    return {
      color: mode("blackAlpha.400", "whiteAlpha.400")(props),
    };
  case "accent":
    return {
      color: mode("blackAlpha.400", "whiteAlpha.400")(props),
    };
    default:
      return {};
  }
};

const getTablistColorSchemeProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return { backgroundColor: "darkTeal", color: "white" };
    case "light":
      return {
        backgroundColor: "white",
        color: "darkGrey",
        boxShadow: `inset 0 0 0 1px ${props.theme.colors.blackAlpha["400"]}`,
      };
    case "green":
      return { backgroundColor: "mint", color: "darkTeal" };
    case "grey":
      return {
        backgroundColor: "platinum",
        color: "darkGrey",
      };
    case "default":
      return {
        backgroundColor: mode("white", "transparent")(props),
        color: "darkGrey",
        boxShadow: mode(`inset 0 0 0 1px ${props.theme.colors.blackAlpha["400"]}`, `inset 0 0 0 1px ${props.theme.colors.whiteAlpha["400"]}`)(props),
      };
    case "accent":
      return { 
        backgroundColor: mode("mint", "whiteAlpha.100")(props), 
        color: "darkTeal" 
      };
    default:
      return {};
  }
};
