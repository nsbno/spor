import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const parts = anatomy("progressBar").parts(
  "container",
  "background",
  "progress",
  "description",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      minWidth: "100px",
    },
    background: {
      display: "flex",
      backgroundColor: mode(
        "brand.surface.default.dark",
        "brand.surface.default.light",
      )(props),
      borderRadius: "sm",
      justifyContent: "flex-start",
      marginX: "auto",
    },
    progress: {
      backgroundColor: mode(
        "brand.surface.active.light",
        "brand.surface.active.dark",
      )(props),
      borderRadius: "sm",
      maxWidth: "100%",
      transition: "width .2s ease-out",
    },
    description: {
      textAlign: "center",
      marginTop: 2,
      marginX: "auto",
      fontWeight: "bold",
    },
  }),
});

export default config;
