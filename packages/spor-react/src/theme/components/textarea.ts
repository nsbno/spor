import { defineStyleConfig } from "@chakra-ui/react";
import Input from "./input";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    ...Input.baseStyle!(props).field,
    minHeight: "5rem",
    verticalAlign: "top",
    appearance: "none",
  }),
  variants: {
    default: {
      py: 3,
    },
    floating: {
      pt: 2,
      "&:not(:placeholder-shown)": {
        pt: 4,
        "& + label": {
          transform: "scale(0.825) translateY(-10px)",
        },
      },
    },
  },
  defaultProps: {
    variant: "default",
  },
});

export default config;
