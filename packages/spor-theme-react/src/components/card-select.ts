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
    ghost: (props) => ({
      trigger: {
        _hover: {
          backgroundColor: mode("seaMist", "pine")(props),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.200")(props),
        },
      },
    }),
    outline: (props) => ({
      trigger: {
        boxShadow: getBoxShadowString({
          borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
        }),
        ...focusVisible({
          notFocus: { boxShadow: "none" },
          focus: {
            boxShadow: getBoxShadowString({
              borderColor: "greenHaze",
              borderWidth: 3,
            }),
            outline: "none",
          },
        }),
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
            borderWidth: 3,
          }),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.200")(props),
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "whiteAlpha.400")(props),
            borderWidth: 1,
          }),
        },

        _expanded: {
          _hover: {
            backgroundColor: mode("seaMist", "todo")(props),
            boxShadow: "none",
          },
          _active: {
            backgroundColor: mode("mint", "todo")(props),
            boxShadow: getBoxShadowString({
              borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
              borderWidth: 1,
            }),
          },
        },
      },
    }),
    card: (props) => ({
      trigger: {
        backgroundColor: mode("transparent", "whiteAlpha.100")(props),
        boxShadow: "sm",
        transition: "all .1s ease-out",
        _hover: {
          backgroundColor: mode("seaMist", "pine")(props),
          boxShadow: getBoxShadowString({
            borderColor: mode("silver", "whiteAlpha.400")(props),
            borderWidth: 1,
            baseShadow: "sm",
          }),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.100")(props),
          boxShadow: getBoxShadowString({
            borderColor: mode("silver", "whiteAlpha.400")(props),
            borderWidth: mode(0, 1)(props),
            baseShadow: "sm",
          }),
        },
        _expanded: {
          _hover: {
            boxShadow: getBoxShadowString({
              borderColor: "darkGrey",
              borderWidth: 3,
            }),
          },
          _active: {
            backgroundColor: mode("mint", "whiteAlpha.200")(props),
            boxShadow: "none",
          },
        },
      },
    }),
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
