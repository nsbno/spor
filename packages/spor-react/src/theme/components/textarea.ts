import { defineStyleConfig } from "@chakra-ui/react";
import { inputBaseStyle, inputVariant } from "../utils/input-utils";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    ...inputBaseStyle(props).field,
    minHeight: "calc(var(--label-height) + 5rem)",
    verticalAlign: "top",
    appearance: "none",
    borderTop: "0.8rem solid transparent",
    "&:not(:placeholder-shown)": {
      "&:has(+ label)": {
        borderTop: "calc(var(--label-height)) solid transparent", // use border in stead of padding to avoid problems with scrolling
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
