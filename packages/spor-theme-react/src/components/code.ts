import { defineStyleConfig } from "@chakra-ui/react";
import Badge from "./badge";

const { variants, defaultProps } = Badge;

const config = defineStyleConfig({
  baseStyle: {
    fontFamily: "monospace",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xs",
    px: 1,
  },
  variants,
  defaultProps,
});

export default config;
