import { defineStyleConfig } from "@chakra-ui/react";
import { inputBaseStyle, inputVariant } from "../utils/input-utils";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    ...inputBaseStyle(props).field,
    minHeight: "5rem",
    verticalAlign: "top",
    appearance: "none",
    paddingTop: 2,
    "&:not(:placeholder-shown)": {
      "&:has(+ label)": {
        paddingTop: 4,
      },
      "& + label": {
        transform: "scale(0.825) translateY(-10px)",
      },
    },
  }),
  variants: {
    base: (props) => ({
      ...inputVariant("base", props),
    }),
    floating: (props) => ({
      ...inputVariant("floating", props),
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default config;
