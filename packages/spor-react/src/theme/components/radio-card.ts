import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { accentBackground, accentText } from "../utils/accent-utils";

const config = defineStyleConfig({
  baseStyle: (props: any) => ({
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    borderRadius: "md",
    ...focusVisibleStyles(props),
    _hover: getColorSchemeHoverProps(props),
    _checked: {
      backgroundColor: "mint",
      _disabled: {
        pointerEvents: "none",
        ...baseBackground("disabled", props),
        ...baseBorder("disabled", props),
        ...baseText("disabled", props),
      },
    },
  }),
  variants: {
    base: (props) => ({
      ...baseBackground("default", props),
      _hover: {
        ...baseBackground("hover", props),
        ...baseBorder("hover", props),
      },
      _active: {
        ...baseBackground("active", props),
      },
      _selected: {
        ...baseBackground("selected", props),
        ...baseBorder("selected", props),
      },
    }),
    floating: (props) => ({
      ...floatingBackground("default", props),
      _hover: {
        ...floatingBackground("hover", props),
        ...floatingBorder("hover", props),
      },
      _active: {
        ...floatingBackground("active", props),
      },
      _selected: {
        ...floatingBackground("selected", props),
        ...baseBorder("selected", props),
      },
    }),
  },
  sizes: {
    sm: {
      boxShadow: "sm",

      _hover: {
        boxShadow: "md",
      },

      _active: {
        boxShadow: "none",
      },
    },
    lg: {
      boxShadow: "md",

      _hover: {
        boxShadow: "lg",
      },

      _active: {
        boxShadow: "sm",
      },
    },
  },
});

export default config;

type CardThemeProps = {
  colorScheme: "default" | "accent";
  theme: any;
  colorMode: "light" | "dark";
};

const getColorSchemeHoverProps = (props: CardThemeProps) => {
  switch (props.colorScheme) {
    case "default":
      return {
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, white 20%, var(--spor-colors-bg-default-dark))`,
        )(props),
        ...floatingBorder("hover", props),
      };
    case "accent":
      return {
        ...accentBackground("default", props),
        ...accentText("default", props),
        _hover: {
          ...accentBackground("hover", props),
        },
        _active: {
          ...accentBackground("active", props),
        },
      };
  }
};
