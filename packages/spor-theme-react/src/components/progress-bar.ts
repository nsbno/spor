import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";

const parts = anatomy("progress-bar").parts(
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
    backgroundColor: getRootBackgroundColor(props.colorScheme),
    display: "flex",
    alignItems: "center",
    justifyContent: ["space-between", "center"],
    height: ["48px", "60px"],
  },
  container: {
    px: [2, 2, 0],
    maxWidth: "container.lg",
    mx: "auto",
    width: "100%",
  },
  innerContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: ["flex", "none"],
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    borderRadius: "xs",
    px: 0,
    width: "auto",
    minWidth: "auto",
  },
  title: {
    textOverflow: "ellipsis",
    fontWeight: "bold",
  },
  stepCounter: {
    whiteSpace: "nowrap",
  },
  stepContainer: {
    display: ["none", "flex"],
    alignItems: "center",
  },
  stepButton: {
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
    color: getColor(props.colorScheme),
  },
  stepButton: {
    _hover: getHoverStyles(props.colorScheme),
    _focus: getFocusStyles(props.colorScheme, props.theme),
    "&:focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    _focusVisible: getFocusStyles(props.colorScheme, props.theme),
    _active: getActiveStyles(props.colorScheme),
  },
});

const variantActive: PartsStyleFunction<typeof parts> = (props) => ({
  stepContainer: {
    color: getColor(props.colorScheme),
  },
  stepButton: {
    pointerEvents: "none",
  },
  stepNumber: {
    backgroundColor: getColor(props.colorScheme),
    color: getStepNumberColor(props.colorScheme),
  },
  stepTitle: {
    fontWeight: "bold",
  },
});

const variantDisabled: PartsStyleFunction<typeof parts> = (props) => ({
  stepContainer: {
    color: getDisabledColor(props.colorScheme),
  },
  stepButton: {
    pointerEvents: "none",
  },
});

const getRootBackgroundColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "light":
      return "alias.white";
    case "dark":
      return "alias.darkTeal";
    case "green":
    default:
      return "alias.mint";
  }
};

const getColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "light":
      return "alias.darkGrey";
    case "dark":
      return "alias.white";
    case "green":
    default:
      return "alias.darkTeal";
  }
};

const getStepNumberColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return "alias.darkTeal";
    case "light":
    case "green":
    default:
      return "alias.white";
  }
};

const getDisabledColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return "palette.whiteAlpha.400";
    case "light":
    case "green":
    default:
      return "alias.osloGrey";
  }
};

const getHoverStyles = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return { backgroundColor: "alias.pine" };
    case "light":
    case "green":
    default:
      return { backgroundColor: "alias.seaMist" };
  }
};

const getFocusStyles = (colorScheme: string, theme: any) => {
  switch (colorScheme) {
    case "dark":
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${theme.colors.alias.white}`,
      };
    case "light":
    case "green":
    default:
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${theme.colors.alias.greenHaze}`,
      };
  }
};

const getActiveStyles = (colorScheme: string) => {
  switch (colorScheme) {
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
