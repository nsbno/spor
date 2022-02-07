import type { SystemStyleObject } from "@chakra-ui/theme-tools";
import Badge from "./badge";

const { variants, defaultProps } = Badge;

const baseStyle: SystemStyleObject = {
  fontFamily: "monospace",
  fontSize: "xs",
  borderRadius: "xs",
  px: 1,
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
