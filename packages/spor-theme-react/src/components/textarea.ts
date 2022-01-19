import type { SystemStyleObject } from "@chakra-ui/theme-tools";
import Input from "./input";

const baseStyle: SystemStyleObject = {
  ...Input.baseStyle.field,
  minHeight: "80px",
  lineHeight: "short",
  py: 3,
  verticalAlign: "top",
};

export default {
  baseStyle,
  variants: {},
  sizes: {},
  defaultProps: {},
};
