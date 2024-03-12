import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, StyleFunctionProps } from "@chakra-ui/theme-tools";
import {
  accentBackground,
  baseBackground,
  brandBackground,
} from "../utils/background-utils";
import { baseBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-util";
import { surface } from "../utils/surface-utils";
import { accentText, baseText, brandText } from "../utils/text-utils";

const parts = anatomy("fab").parts("container", "icon", "text");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "flex",
      alignItems: "center",
      paddingY: 2,
      paddingLeft: 2,
      paddingRight: props.isTextVisible ? 3 : 2,
      cursor: "pointer",
      overflowX: "hidden",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      boxShadow: "md",
      transitionDuration: "fast",
      transitionProperty: "common",
      position: "fixed",
      zIndex: "sticky",
      ...getPositionProps(props),
      ...focusVisibleStyles(props),
      _disabled: {
        ...surface("disabled", props),
        ...baseText("disabled", props),
        pointerEvents: "none",
      },
    },
    icon: {
      marginRight: props.isTextVisible ? 1 : 0,
    },
    text: {
      display: "flex",
      flex: "none",
      alignItems: "center",
      fontWeight: "bold",
      textStyle: "sm",
    },
  }),
  variants: {
    brand: (props) => ({
      container: {
        ...brandBackground("default", props),
        ...brandText("default", props),
        _hover: {
          ...brandBackground("hover", props),
        },
        _active: {
          ...brandBackground("active", props),
        },
      },
    }),
    base: (props) => ({
      container: {
        ...baseBackground("default", props),
        ...baseBorder("default", props),
        ...baseText("default", props),
        _hover: {
          ...baseBackground("hover", props),
          ...baseBorder("hover", props),
        },
        _active: {
          ...baseBorder("default", props),
          ...baseBackground("active", props),
        },
      },
    }),
    accent: (props) => ({
      container: {
        ...accentBackground("default", props),
        ...accentText("default", props),
        _hover: {
          ...accentBackground("hover", props),
          ...accentText("default", props),
        },
        _active: {
          ...accentBackground("active", props),
        },
      },
    }),
  },
  defaultProps: {
    variant: "brand",
  },
});

export default config;

const getPositionProps = (props: StyleFunctionProps) => {
  switch (props.placement) {
    case "top left":
      return { top: "1em", left: "1em" };
    case "top right":
      return { top: "1em", right: "1em" };
    case "bottom left":
      return { bottom: "1em", left: "1em" };
    case "bottom right":
      return { bottom: "1em", right: "1em" };
  }
};
