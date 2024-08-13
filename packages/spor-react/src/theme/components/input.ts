import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { inputBaseStyle, inputVariant } from "../utils/input-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    ...inputBaseStyle(props),
  }),
  variants: {
    base: (props) => ({
      field: {
        ...inputVariant("base", props),
      },
    }),
    floating: (props) => ({
      field: {
        ...inputVariant("floating", props),
      },
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default config;
