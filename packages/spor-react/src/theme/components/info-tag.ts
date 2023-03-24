import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import travelTagStyles from "./travel-tag";

const parts = anatomy("info-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    ...travelTagStyles.baseStyle!(props),
    iconContainer: {
      ...travelTagStyles.baseStyle!(props).iconContainer,
      padding: 1,
    },
  }),
  sizes: {
    ...travelTagStyles.sizes,
    sm: {
      ...travelTagStyles.sizes!.sm,
      iconContainer: {
        borderRadius: "0.375rem",
      },
    },
    md: {
      ...travelTagStyles.sizes!.md,
      iconContainer: {
        borderRadius: "0.375rem",
      },
    },
    lg: {
      ...travelTagStyles.sizes!.lg,
      iconContainer: {
        borderRadius: "sm",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});
export default config;
