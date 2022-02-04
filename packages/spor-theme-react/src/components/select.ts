import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import Input from "./input";

const baseStyleField: SystemStyleObject = {
  ...Input.baseStyle.field,
  appearance: "none",
  pb: "1px",
  pt: "16px",
  "option, optgroup": {
    background: "alias.white",
  },
};

const baseStyleIcon: SystemStyleObject = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  strokeLinecap: "round",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5,
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  field: baseStyleField,
  icon: baseStyleIcon,
};

export default {
  parts: parts.keys,
  baseStyle,
};
