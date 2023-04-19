import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
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
        my: 2,
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
      paddingTop: "16px",
      "option, optgroup": {
        background: "white",
      },
    },
    icon: {
      width: "30px",
      height: "30px",
      insetEnd: "0.5rem",
      position: "relative",
      color: "currentColor",
      strokeLinecap: "round",
      fontSize: "1.125rem",
      _disabled: {
        opacity: 0.5,
      },
    },
  }),
});

export default config;
