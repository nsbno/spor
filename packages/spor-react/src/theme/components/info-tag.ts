import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { StyleFunctionProps, anatomy, mode } from "@chakra-ui/theme-tools";
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
    textContainer: {
      color: mode("darkGrey", "white")(props),
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
 variants: {
    "walk": (props)  => ({
      iconContainer: {
        backgroundColor: mode("white", "transparent")(props),
        boxShadow: mode(
          `${props.theme.shadows.md}, inset 0 0 0 2px ${props.theme.colors.black[200]}`, 
          `${props.theme.shadows.md}, inset 0 0 0 2px ${props.theme.colors.whiteAlpha[400]}`
          )(props),
      },
    }),
  }
});
export default config;
function getDeviationContainerStyle(props: StyleFunctionProps): any {
  throw new Error("Function not implemented.");
}

