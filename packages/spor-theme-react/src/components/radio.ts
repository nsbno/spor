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
      backgroundColor: "alias.white",
      borderColor: "alias.primaryGreen",
    },
    "input:enabled:checked + .chakra-radio__control": {
      color: "alias.darkTeal",
    },
  },
};

const baseStyleControl: SystemStyleFunction = (props) => {
  return {
    width: 4,
    height: 4,
    backgroundColor: "alias.white",
    border: "2px solid",
    borderColor: "alias.osloGrey",
    borderRadius: "50%",

    _focus: {
      backgroundColor: "alias.seaMist",
      borderColor: "alias.primaryGreen",
    },
    _disabled: {
      backgroundColor: "alias.lightGrey",
      borderColor: "alias.steel",
    },
    _checked: {
      borderColor: "currentColor",
      color: "alias.primaryGreen",
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
        backgroundColor: "alias.seaMist",
        color: "alias.primaryGreen",
      },
      _disabled: {
        backgroundColor: "alias.lightGrey",
        borderColor: "alias.steel",
        color: "alias.osloGrey",
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
