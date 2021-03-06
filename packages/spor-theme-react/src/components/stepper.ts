import {
  anatomy,
  mode,
  PartsStyleFunction,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";

const parts = anatomy("stepper").parts(
  "root",
  "container",
  "innerContainer",
  "backButton",
  "title",
  "stepCounter",
  "stepContainer",
  "stepButton",
  "stepNumber",
  "stepTitle",
  "closeButton"
);

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: {
    backgroundColor: getRootBackgroundColor(props),
    display: "flex",
    alignItems: "center",
    justifyContent: ["space-between", "center"],
    minHeight: ["48px", "60px"],
    overflowX: "auto",
    width: "100%",
  },
  container: {
    px: [2, 2, 0],
    maxWidth: "container.lg",
    mx: "auto",
    width: "100%",
  },
  innerContainer: {
    overflow: "hidden",
    display: ["flex", "none"],
    alignItems: "center",
    justifyContent: "space-between",
    color: getColor(props),
  },
  backButton: {
    borderRadius: "xs",
    px: 0,
    width: "auto",
    minWidth: "auto",
  },
  title: {
    overflow: "hidden",
    fontWeight: "bold",
    WebkitLineClamp: 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    ml: 2,
    textAlign: "right",
  },
  stepCounter: {
    whiteSpace: "nowrap",
    textDecoration: "underline",
  },
  stepContainer: {
    display: "flex",
    alignItems: "center",
  },
  stepButton: {
    color: "inherit",
    display: "flex",
    alignItems: "center",
    padding: 1,
    borderRadius: "xs",
  },
  stepNumber: {
    borderRadius: "round",
    border: "sm",
    borderColor: "currentColor",
    width: 4,
    height: 4,
    mr: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ["mobile.xs", "desktop.xs"],
  },
  stepTitle: {
    textStyle: "sm",
    whiteSpace: "nowrap",
  },
});

const variantCompleted: PartsStyleFunction<typeof parts> = (props) => ({
  stepContainer: {
    color: getColor(props),
  },
  stepButton: {
    _hover: getHoverStyles(props),
    _focus: getFocusStyles(props),
    "&:focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    _focusVisible: getFocusStyles(props),
    _active: getActiveStyles(props),
  },
});

const variantActive: PartsStyleFunction<typeof parts> = (props) => ({
  stepContainer: {
    color: getColor(props),
  },
  stepButton: {
    pointerEvents: "none",
  },
  stepNumber: getStepNumberStyles(props),
  stepTitle: {
    fontWeight: "bold",
  },
});

const variantDisabled: PartsStyleFunction<typeof parts> = (props) => ({
  stepContainer: {
    color: getDisabledColor(props),
  },
  stepButton: {
    pointerEvents: "none",
  },
});

const getRootBackgroundColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return "alias.white";
    case "dark":
      return "alias.darkTeal";
    case "green":
    default:
      return "alias.mint";
  }
};

const getColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return mode("alias.darkGrey", "alias.white")(props);
    case "dark":
      return "alias.white";
    case "green":
    default:
      return mode("alias.darkTeal", "alias.white")(props);
  }
};

const getStepNumberStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "alias.white",
        color: "alias.darkTeal",
      };
    case "light":
    case "green":
    default:
      return {
        backgroundColor: mode("alias.darkTeal", "alias.white")(props),
        color: mode("alias.white", "alias.darkTeal")(props),
      };
  }
};

const getDisabledColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return "palette.whiteAlpha.400";
    case "light":
    case "green":
    default:
      return "alias.osloGrey";
  }
};

const getHoverStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return { backgroundColor: "alias.pine" };
    case "light":
    case "green":
    default:
      return {
        backgroundColor: mode("alias.seaMist", "alias.primaryGreen")(props),
      };
  }
};

const getFocusStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.white}`,
      };
    case "light":
    case "green":
    default:
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.alias.greenHaze}`,
      };
  }
};

const getActiveStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return { backgroundColor: "alias.mint" };
    case "dark":
      return { backgroundColor: "alias.celadon" };
    case "green":
    default:
      return { color: "alias.blueGreen", backgroundColor: "transparent" };
  }
};

type Variant = "completed" | "active" | "disabled";
const variants: Record<Variant, PartsStyleFunction<typeof parts>> = {
  completed: variantCompleted,
  active: variantActive,
  disabled: variantDisabled,
};

const defaultProps = {
  colorScheme: "green",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  defaultProps,
};
