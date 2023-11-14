import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  container: {
    fontSize: ["mobile.sm", "desktop.sm"],
  },
  item: {
    fontFamily: "body",
  },
  icon: {
    marginEnd: "2",
    display: "inline",
    verticalAlign: "text-bottom",
  },
});

export default defineMultiStyleConfig({
  baseStyle,
});
