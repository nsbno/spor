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
    color: mode("osloGrey", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm",
  };
};

const baseStyleContainer: SystemStyleFunction = () => {
  return {
    width: "100%",
    position: "relative",
    transitionProperty: "common",
    transitionDuration: "fast",
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
};
