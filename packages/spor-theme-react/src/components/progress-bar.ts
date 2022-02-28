import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";

const parts = anatomy("progress-bar").parts(
  "root",
  "container",
  "title",
  "stepContainer",
  "stepNumber",
  "stepTitle",
  "chevron",
  "closeButton"
);

const baseStyleRoot: SystemStyleFunction = (props) => ({
  backgroundColor: getRootBackgroundColor(props.colorScheme),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: ["48px", "60px"],
});

const getRootBackgroundColor = (colorScheme: string) => {
  if (colorScheme === "green") {
    return "alias.mint";
  }
  if (colorScheme === "light") {
    return "alias.white";
  }
  return "alias.darkTeal";
};

const baseStyleCircle: SystemStyleFunction = () => ({
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
});

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot(props),
  circle: baseStyleCircle(props),
});

const defaultProps = {
  colorScheme: "green",
};

export default {
  parts: parts.keys,
  baseStyle,
  defaultProps,
};
