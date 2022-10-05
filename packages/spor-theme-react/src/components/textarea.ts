import { defineStyleConfig } from "@chakra-ui/react";
import Input from "./input";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    ...Input.baseStyle!(props).field,
    minHeight: "5rem",
    py: 3,
    verticalAlign: "top",
    appearance: "none",
  }),
});

export default config;
