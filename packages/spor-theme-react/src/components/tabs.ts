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
    _selected: {
      backgroundColor: "salmon",
    },
  };
};

const baseStyleTablist: SystemStyleFunction = (props) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...getColorSchemeProps(props),
  };
};

const getColorSchemeProps = (props: StyleFunctionProps) => {
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
    tab: {
      height: "26px",
      px: 2,
    },
  },
  md: {
    tab: {
      height: "30px",
      px: 2,
    },
  },
  lg: {
    tab: {
      height: "36px",
      px: 2,
    },
  },
  xl: {
    tab: {
      height: "46px",
      px: 3,
    },
  },
};

const variantRound: PartsStyleInterpolation<typeof parts> = (props) => ({
  tablist: {
    borderRadius: "2xl",
  },
  tab: {
    borderRadius: "50%",
  },
});
const variantSquare: PartsStyleInterpolation<typeof parts> = (props) => ({
  tablist: {
    borderRadius: "12px",
  },
  tab: {
    borderRadius: "9px",
  },
});

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
