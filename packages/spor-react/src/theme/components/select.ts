import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { baseText } from "../utils/base-utils";
import { default as Input } from "./input";

const parts = selectAnatomy.extend("root");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    root: {
      width: "100%",
      height: "fit-content",
      position: "relative",
      "& + label": {
        fontSize: ["mobile.sm", "desktop.sm"],
        top: "2px",
        left: 3,
        zIndex: 2,
        position: "absolute",
        marginY: 2,
        transformOrigin: "top left",
        transform: [
          "scale(0.825) translateY(-12px)",
          "scale(0.825) translateY(-14px)",
        ],
      },
    },
    field: {
      ...Input.baseStyle!(props).field,
      appearance: "none",
      paddingTop: "1rem",
      "option, optgroup": {},
    },
    icon: {
      width: 5,
      height: 5,
      insetEnd: "0.5rem",
      position: "relative",
      color: "currentColor",
      strokeLinecap: "round",
      fontSize: "sm",
      _disabled: {
        ...baseText("disabled", props),
      },
    },
  }),
});

export default config;
