import { formAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyleRequiredIndicator: SystemStyleFunction = (props) => {
  return {
    marginStart: 1,
    color: mode("error.brightRed", "error.lightRed")(props),
  };
};

const baseStyleHelperText: SystemStyleFunction = (props) => {
  return {
    mt: 2,
    color: mode("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm",
  };
};

const baseStyleContainer: SystemStyleFunction = () => {
  return {
    width: "100%",
    position: "relative",
    transition: ".1s ease-out",
    fontSize: "18px",

    "input, textarea": {
      width: "100%",
      outline: "none",
      backgroundColor: "transparent",
      border: 0,
      borderRadius: "sm",
      transition: ".1s ease-out",
      position: "relative",
      px: "16px",
    },
    input: {
      height: "54px",
    },
    "input + label": {
      top: "6px",
      left: "16px",
      zIndex: 2,
      position: "absolute",
      mx: 0,
      px: 0,
      my: 2,
      transition: ".1s ease-out",
    },
    "input:not(:placeholder-shown) + label": {
      transform: "scale(0.825) translateY(-14px) translateX(-7px)",
    },
    "input:not(:placeholder-shown)": {
      pt: "16px",
    },
    textarea: {
      minHeight: "100px",
      py: 3,
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: baseStyleContainer(props),
  requiredIndicator: baseStyleRequiredIndicator(props),
  helperText: baseStyleHelperText(props),
});

export default {
  parts: parts.keys,
  baseStyle,
  variants: {},
};
