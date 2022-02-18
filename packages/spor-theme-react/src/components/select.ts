import { selectAnatomy } from "@chakra-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import Input from "./input";

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
  root: baseStyleRoot,
  field: baseStyleField,
  icon: baseStyleIcon,
};

export default {
  parts: parts.keys,
  baseStyle,
};
