import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import Checkbox from "./checkbox";

const baseStyleContainer: SystemStyleObject = {
  _hover: {
    "input:enabled + .chakra-radio__control": {
      backgroundColor: "white",
      borderColor: "primaryGreen",
    },
    "input:enabled:checked + .chakra-radio__control": {
      color: "darkTeal",
    },
  },
};

const baseStyleControl: SystemStyleFunction = (props) => {
  return {
    width: 4,
    height: 4,
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "primaryGreen",
    borderRadius: "50%",

    _focus: {
      backgroundColor: "seaMist",
      borderColor: "azure",
    },
    _disabled: {
      backgroundColor: "lightGrey",
      borderColor: "steel",
    },
    _checked: {
      borderColor: "currentColor",
      color: "primaryGreen",
      _before: {
        content: `""`,
        display: "inline-block",
        position: "relative",
        width: "50%",
        height: "50%",
        borderRadius: "50%",
        background: "currentColor",
      },

      _focus: {
        backgroundColor: "seaMist",
        color: "azure",
      },
      _disabled: {
        backgroundColor: "lightGrey",
        borderColor: "steel",
      },
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: baseStyleContainer,
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
