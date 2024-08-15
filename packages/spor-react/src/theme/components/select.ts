import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { baseText } from "../utils/base-utils";
import { default as Input } from "./input";
import { inputBaseStyle, inputVariant } from "../utils/input-utils";

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
        top: "0.2rem",
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
      ...inputBaseStyle(props).field,
      appearance: "none",
      paddingTop: "1rem",
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
  variants: {
    base: (props) => ({
      field: {
        ...inputVariant("base", props),
      },
    }),
    floating: (props) => ({
      field: {
        ...inputVariant("floating", props),
      },
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default config;
