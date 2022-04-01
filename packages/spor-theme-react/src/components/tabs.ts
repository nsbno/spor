import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleInterpolation,
  PartsStyleObject,
  StyleFunctionProps,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleRoot: SystemStyleFunction = (props) => {
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
    _focus: {
      zIndex: 1,
      boxShadow: "outline",
    },
    ...getTabColorSchemeProps(props)
  };
};

const getTabColorSchemeProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        _selected: { backgroundColor: "alias.white", color: "alias.darkTeal" },
        _hover: { backgroundColor: "alias.pine", color: "alias.white" },
        _focus: { backgroundColor: "alias.darkTeal", color: "alias.white", borderColor: "alias.white" },
        _pressed: { backgroundColor: "alias.celadon", color: "alias.white" },
        _disabled: { backgroundColor: "alias.darkTeal", color: "alias.white", opacity: "20%" },
      };
    case "light":
      return {
        _selected: { backgroundColor: "alias.darkTeal", color: "alias.white" },
        _hover: { backgroundColor: "alias.silver", color: "alias.darkGrey" },
        _focus: { backgroundColor: "alias.white", color: "alias.darkGrey", borderColor: "alias.greenHaze" },
        _pressed: { backgroundColor: "alias.mint", color: "alias.darkGrey" },
        _disabled: { backgroundColor: "alias.white", color: "alias.silver" },
      };
    case "green":
      return {
        _selected: { backgroundColor: "alias.darkTeal", color: "alias.white" },
        _hover: { backgroundColor: "alias.coralGreen", color: "alias.darkTeal" },
        _focus: { backgroundColor: "alias.mint", color: "alias.darkTeal", borderColor: "alias.greenHaze" },
        _pressed: { backgroundColor: "alias.seaMist", color: "alias.darkTeal" },
        _disabled: { backgroundColor: "alias.mint", color: "alias.coralGreen" },
      };
    case "grey":
      return {
        _selected: { backgroundColor: "alias.darkTeal", color: "alias.white" },
        _hover: { backgroundColor: "alias.silver", color: "alias.darkGrey" },
        _focus: { backgroundColor: "alias.platinum", color: "alias.darkGrey", borderColor: "alias.greenHaze" },
        _pressed: { backgroundColor: "alias.lightGrey", color: "alias.darkGrey" },
        _disabled: { backgroundColor: "alias.platinum", color: "alias.steel" },
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
      return { backgroundColor: "alias.white", color: "alias.darkGrey" };
    case "green":
      return { backgroundColor: "alias.mint", color: "alias.darkTeal" };
    case "grey":
      return { backgroundColor: "alias.platinum", color: "alias.darkGrey" };
    default:
      return {};
  }
};

const baseStyleTabpanel: SystemStyleObject = {
  p: 4,
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    tablist: {
      height: "30px",
      p: '2px',
    },
    tab: {
      height: "26px",
      px: 2,
      py: 3,
    },
  },
  md: {
    tablist: {
      height: "36px",
      p: 0.5,
    },
    tab: {
      height: "30px",
      px: 2,
      py: 3,
    },
  },
  lg: {
    tablist: {
      height: "42px",
      p: 0.5,
    },
    tab: {
      height: "36px",
      px: 2,
      py: 3,
    },
  },
  xl: {
    tablist: {
      height: "54px",
      p: '4px',
    },
    tab: {
      height: "46px",
      p: 3,
    },
  },
};

const variantRoundDynamic: PartsStyleInterpolation<typeof parts> = {
    tablist: {
      borderRadius: "42px",
    },
    tab: {
      flexGrow: 1,
      borderRadius: "xl",
    },
};

const variantRoundCompact: PartsStyleInterpolation<typeof parts> = {
  tablist: {
    width: "fit-content",
    justifyContent: "center",
    borderRadius: "42px",
  },
  tab: {
    flexGrow: 0,
    borderRadius: "xl",
  },
};

const variantSquareDynamic: PartsStyleInterpolation<typeof parts> = {
  tablist: {
    borderRadius: "sm",
  },
  tab: {
    flexGrow: 1,
    borderRadius: "9px",
  },
};

const variantSquareCompact: PartsStyleInterpolation<typeof parts> = {
  tablist: {
    width: "fit-content",
    justifyContent: "center",
    borderRadius: "sm",
  },
  tab: {
    flexGrow: 0,
    borderRadius: "9px",
  },
};

const variants: Record<string, PartsStyleInterpolation<typeof parts>> = {
  "round-dynamic": variantRoundDynamic,
  "round-compact": variantRoundCompact ,
  "square-dynamic": variantSquareDynamic,
  "square-compact": variantSquareCompact,
};

const defaultProps = {
  size: "md",
  variant: "round-dynamic",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
