import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";
import {
  baseBackground,
  floatingBackground,
  ghostBackground,
} from "../utils/background-utils";

const parts = anatomy("card-select").parts("trigger", "card");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    trigger: {
      appearance: "none",
      display: "flex",
      alignItems: "center",
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
      color: mode("darkGrey", "white")(props),
      ...floatingBackground("default", props),
    },
  }),
  variants: {
    base: (props) => ({
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
          ...baseBackground("active", props),
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "whiteAlpha.400")(props),
            borderWidth: 1,
          }),
        },
        _expanded: {
          ...baseBackground("active", props),
          _hover: {
            ...baseBackground("active", props),
            boxShadow: "none",
          },
          _active: {
            ...baseBackground("active", props),
            boxShadow: getBoxShadowString({
              borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
              borderWidth: 1,
            }),
          },
        },
      },
    }),
    ghost: (props) => ({
      trigger: {
        _hover: {
          ...ghostBackground("hover", props),
        },
        _active: {
          ...ghostBackground("active", props),
        },
        _expanded: {
          ...ghostBackground("selected", props),
        },
      },
    }),
    floating: (props) => ({
      trigger: {
        ...floatingBackground("default", props),
        boxShadow: "sm",
        transition: "all .1s ease-out",
        _hover: {
          ...floatingBackground("hover", props),
          boxShadow: getBoxShadowString({
            borderColor: mode("silver", "whiteAlpha.400")(props),
            borderWidth: 1,
            baseShadow: "sm",
          }),
        },
        _active: {
          ...floatingBackground("active", props),
          boxShadow: getBoxShadowString({
            borderColor: mode("silver", "whiteAlpha.400")(props),
            borderWidth: mode(0, 1)(props),
            baseShadow: "sm",
          }),
        },
        _expanded: {
          ...floatingBackground("active", props),
          _hover: {
            boxShadow: getBoxShadowString({
              borderColor: "darkGrey",
              borderWidth: 3,
            }),
          },
          _active: {
            ...floatingBackground("active", props),
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
        fontSize: "xs",
        borderRadius: "sm",
      },
    },
    md: {
      trigger: {
        paddingX: 2,
        paddingY: 1.5,
        minHeight: "2.625rem",
        fontSize: "sm",
        borderRadius: "sm",
      },
    },
    lg: {
      trigger: {
        paddingX: 3,
        paddingY: 2,
        minHeight: "3.375rem",
        fontSize: "sm",
        borderRadius: "sm",
      },
    },
  },
});

export default config;
