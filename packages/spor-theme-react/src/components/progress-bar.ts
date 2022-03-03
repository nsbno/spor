import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
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
  "icon",
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

const baseStyleStepNumber: SystemStyleFunction = (props) => ({
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
  color: getColor(props.colorScheme),
});

const baseStyleStepTitle: SystemStyleFunction = (props) => ({
  color: getColor(props.colorScheme),
  textStyle: "sm",
});

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

const baseStyleChevron: SystemStyleFunction = (theme) => ({
  width: 4,
  height: 4,
  marginLeft: 4,
  mr: 6,
  transitionProperty: "background, border-color",
  transitionDuration: "normal",
  border: "2px solid",
  borderColor: "alias.darkGrey",
  borderRadius: "xs",

  _button: {
    backgroundColor: "alias.primaryGreen",
    borderColor: "alias.primaryGreen",

    _focus: {
      borderColor: "alias.mint",
    },

    _disabled: {
      backgroundColor: "alias.white",
      borderColor: "alias.steel",
      color: "alias.steel",
    },

    _hover: {
      backgroundColor: "alias.seaMist",
      borderRadius: "6px",
    },
  },

  _disabled: {
    backgroundColor: "alias.white",
    borderColor: "alias.steel",
  },

  _focus: {
    backgroundColor: "alias.white",
    borderColor: "alias.greenHaze",
  },
});

const baseStyleIcon: SystemStyleObject = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5,
  },
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot(props),
  stepNumber: baseStyleStepNumber(props),
  stepTitle: baseStyleStepTitle(props),
  chevron: baseStyleChevron(props),
  icon: baseStyleIcon,
});

const defaultProps = {
  colorScheme: "green",
};

export default {
  parts: parts.keys,
  baseStyle,
  defaultProps,
};
