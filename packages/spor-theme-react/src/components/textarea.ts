import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import Input from "./input";

const baseStyle: SystemStyleFunction = (props) => ({
  ...Input.baseStyle(props).field,
  minHeight: "80px",
  lineHeight: "short",
  py: 3,
  verticalAlign: "top",
  appearance: "none",
});

export default {
  baseStyle,
};
