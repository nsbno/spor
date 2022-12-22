import { defineStyleConfig } from "@chakra-ui/react";

const config = defineStyleConfig({
  baseStyle: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    maxWidth: "60ch",
    minWidth: "40ch",
    paddingX: 2,
    paddingY: 1.5,
    boxShadow: "sm",
    borderRadius: "sm",
  },
  variants: {
    success: {
      backgroundColor: "seaMist",
    },
    info: {
      backgroundColor: "lightBlue",
    },
    error: {
      backgroundColor: "lightRed",
    },
  },
});

export default config;
