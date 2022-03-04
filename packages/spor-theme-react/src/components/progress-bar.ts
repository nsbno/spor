import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";

const parts = anatomy("progress-bar").parts(
  "root",
  "container",
  "title",
  "stepContainer",
  "stepNumber",
  "stepTitle",
  "closeButton"
);

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: {
    backgroundColor: getRootBackgroundColor(props.colorScheme),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: ["48px", "60px"],
  },
  stepContainer: {
    display: "flex",
    alignItems: "center",
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
  },
});

const variantCompleted: PartsStyleFunction<typeof parts> = (props) => ({
  stepContainer: {
    color: getColor(props.colorScheme),
    _hover: {
      // TODO: Implement hover state
    },
    _focus: {
// TODO: Implement active state
    },
    _active: {
// TODO: Implement active state
    }
  },
});

const variantActive: PartsStyleFunction<typeof parts> = (props) => ({
  stepContainer: {
    pointerEvents: "none",
    color: getColor(props.colorScheme),
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
    pointerEvents: "none",
    color: getDisabledColor(props.colorScheme),
  },
});

const getRootBackgroundColor = (colorScheme: string) => {
  switch (colorScheme) {
    case ""
  }
  if (colorScheme === "green") {
    return "alias.mint";
  }
  if (colorScheme === "light") {
    return "alias.white";
  }
  return "alias.darkTeal";
};

const getColor = (colorScheme: string) => {
  if (colorScheme === "green") {
    return "alias.darkTeal";
  }
  if (colorScheme === "light") {
    return "alias.darkGrey";
  }
  if (colorScheme === "dark") {
    return "alias.white";
  }
};

const getStepNumberColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return "alias.darkTeal";
    default:
      return "alias.white";
  }
};

const getDisabledColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return "palette.whiteAlpha.400";
    default:
      return "alias.osloGrey";
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
