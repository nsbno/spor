import { defineStyleConfig } from "@chakra-ui/react";
import Input from "./input";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    ...Input.baseStyle!(props).field,
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
});

export default config;
