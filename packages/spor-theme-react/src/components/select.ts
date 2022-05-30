import { selectAnatomy } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { default as Input } from "./input";

const parts = selectAnatomy.extend("root");

const baseStyleRoot: SystemStyleObject = {
  width: "100%",
  height: "fit-content",
  position: "relative",
  "& + label": {
    fontSize: ["mobile.sm", "desktop.sm"],
    top: "2px",
    left: 3,
    zIndex: 2,
    position: "absolute",
    my: 2,
    transformOrigin: "top left",
    transform: [
      "scale(0.825) translateY(-12px)",
      "scale(0.825) translateY(-14px)",
    ],
  },
};

const baseStyleField: SystemStyleFunction = (props) => ({
  ...Input.baseStyle(props).field,
  appearance: "none",
  pt: "16px",
  "option, optgroup": {
    background: "alias.white",
  },
});
const baseStyleIcon: SystemStyleObject = {
  width: "30px",
  height: "30px",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  strokeLinecap: "round",
  fontSize: "18px",
  _disabled: {
    opacity: 0.5,
  },
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot,
  field: baseStyleField(props),
  icon: baseStyleIcon,
});

export default {
  parts: parts.keys,
  baseStyle,
};
