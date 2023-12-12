import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { focusVisible } from "../utils/focus-utils";
import { srOnly } from "../utils/sr-utils";
import { baseBorder, floatingBorder } from "../utils/border-utils";
import { baseBackground, floatingBackground } from "../utils/background-utils";
import { PartsStyleInterpolation } from "@chakra-ui/styled-system";

const parts = anatomy("InfoSelect").parts(
  "container",
  "label",
  "button",
  "arrowIcon",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {},
    label: {
      position: "relative",
      ...(props.isLabelSrOnly ? srOnly : {}),
    },
    button: {
      appearance: "none",
      borderTopRadius: "sm",
      borderBottomRadius: props.isOpen ? 0 : "sm",
      paddingY: 1.5,
      paddingX: 3,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "mobile.md",
      ...baseBorder("default", props),
      _hover: {
        ...baseBorder("hover", props),
      },
      ...focusVisible({
        focus: {
          ...baseBorder("focus", props),
          outline: "none",
        },
        notFocus: {
          ...baseBorder("default", props),
        },
      }),
      _disabled: {
        color: "whiteAlpha.400",
        ...baseBackground("disabled", props),
        _hover: { ...baseBorder("disabled", props) },
        _focus: { ...baseBorder("disabled", props) },
      },
      _active: {
        ...baseBackground("active", props),
        ...baseBorder("focus", props),
      },
      _expanded: {
        ...baseBorder("focus", props),
      },
      _invalid: {
        ...baseBorder("invalid", props),
        _hover: {
          ...baseBorder("hover", props),
        },
        ...focusVisible({
          focus: {
            ...baseBorder("focus", props),
          },
          notFocus: {
            ...baseBorder("invalid", props),
          },
        }),
      },
    },
    arrowIcon: {},
  }),
  variants: {
    base: (props) => ({
    }),
    floating: (props) => ({
      button: {
        ...floatingBackground("default", props),
        ...floatingBorder("default", props),
        _hover: {
          ...floatingBorder("hover", props),
          ...floatingBackground("hover", props),
        },
        ...focusVisible({
          focus: {
            ...floatingBorder("focus", props),
            outline: "none",
          },
          notFocus: {
            ...floatingBorder("default", props),
          },
        }),
        _active: {
          ...floatingBorder("active", props),
          ...floatingBackground("active", props),
        },

      }
    }),
  },
  defaultProps: {
    variant: "base",
  }
});
export default config;
