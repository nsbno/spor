import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("card-select").parts("trigger", "card");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    trigger: {
      appearance: "none",
      display: "flex",
      alignItems: "center",
      borderRadius: "sm",
      _expanded: {
        backgroundColor: mode("mint", "night")(props),
      },
      ...focusVisible({
        notFocus: {},
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 3,
          }),
          outline: "none",
        },
      }),
    },
    card: {
      borderRadius: "sm",
      boxShadow: "md",
      padding: 3,
    },
  }),
  variants: {
    ghost: {
      trigger: {},
    },
    outline: (props) => ({
      trigger: {
        boxShadow: getBoxShadowString({
          borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
        }),
      },
    }),
    card: {
      trigger: {
        boxShadow: "sm",
      },
    },
  },
  sizes: {
    sm: {
      trigger: {
        paddingX: 1.5,
        paddingY: 1,
        minHeight: "1.25rem",
      },
    },
    md: {
      trigger: {
        paddingX: 2,
        paddingY: 1.5,
        minHeight: "2.625rem",
      },
    },
    lg: {
      trigger: {
        paddingX: 3,
        paddingY: 2,
        minHeight: "3.375rem",
      },
    },
  },
});

export default config;
