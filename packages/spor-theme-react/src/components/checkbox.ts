import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseContainer: SystemStyleObject = {
  _hover: {
    "input:enabled:not([aria-invalid]) + .chakra-checkbox__control": {
      backgroundColor: "alias.white",
      borderColor: "alias.greenHaze",
    },
    "input:enabled[aria-invalid] + .chakra-checkbox__control": {
      backgroundColor: "alias.white",
      borderColor: "alias.lightRed",
    },
    "input:enabled:checked:not([aria-invalid]) + .chakra-checkbox__control": {
      backgroundColor: "alias.primaryGreen",
      borderColor: "alias.primaryGreen",
    },
    "input:enabled:checked[aria-invalid] + .chakra-checkbox__control": {
      backgroundColor: "alias.lightRed",
      borderColor: "alias.lightRed",
    },
  },
};

const baseStyleControl: SystemStyleFunction = () => {
  return {
    width: 4,
    height: 4,
    transitionProperty: "background, border-color",
    transitionDuration: "normal",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "alias.darkGrey",
    borderRadius: "xs",
    color: "white",

    _checked: {
      backgroundColor: "alias.primaryGreen",
      borderColor: "alias.primaryGreen",
      color: "alias.white",

      _focus: {
        backgroundColor: "alias.greenHaze",
        borderColor: "alias.blueGreen",
      },

      _disabled: {
        backgroundColor: "alias.white",
        borderColor: "alias.steel",
        color: "alias.steel",
      },

      _invalid: {
        backgroundColor: "alias.brightRed",
        borderColor: "alias.brightRed",
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

    _invalid: {
      backgroundColor: "alias.white",
      borderColor: "alias.brightRed",
    },
  };
};

const baseStyleLabel: SystemStyleObject = {
  userSelect: "none",
  _disabled: { opacity: 0.4 },
};

const baseStyleIcon: SystemStyleObject = {
  fontSize: "1em",
  transitionProperty: "transform",
  transitionDuration: "normal",
  strokeWidth: "1.5px !important", // Required to make the default icon look correct
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: baseContainer,
  icon: baseStyleIcon,
  control: baseStyleControl(props),
  label: baseStyleLabel,
});

export default {
  parts: parts.keys,
  baseStyle,
};
