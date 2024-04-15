import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBorder } from "../utils/floating-utils";
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
    ...getColorSchemeBaseProps(props),
    ...getColorSchemeClickableProps(props),
    ...focusVisibleStyles(props),
    ...getColorSchemeActiveProps(props),
    _hover: getColorSchemeHoverProps(props),
    _disabled: {
      ...baseBackground("disabled", props),
      ...baseBorder("disabled", props),
      ...baseText("disabled", props),
      pointerEvents: "none",
    },
  }),
  variants: {
    base: (props) => ({
      ...accentBackground("default", props),
      _hover: {
        ...accentBackground("hover", props),
      },
      _active: {
        ...accentBackground("active", props),
      },
    }),
    accent: (props) => ({
      ...accentBackground("default", props),
      _hover: {
        ...accentBackground("hover", props),
      },
      _active: {
        ...accentBackground("active", props),
      },
    }),
    floating: (props) => ({
      ...accentBackground("default", props),
      _hover: {
        ...accentBackground("hover", props),
      },
      _active: {
        ...accentBackground("active", props),
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
  colorScheme: "accent" | "default";
  theme: any;
  colorMode: "light" | "dark";
};

const getColorSchemeBaseProps = (props: CardThemeProps) => {
  switch (props.colorScheme) {
    case "default":
      return {
        ...baseBorder("default", props),
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, white 10%, var(--spor-colors-bg-default-dark))`,
        )(props),
        color: "inherit",
      };
  }
};

function getColorSchemeClickableProps(props: CardThemeProps) {
  switch (props.colorScheme) {
    case "default":
      return {
        ...floatingBorder("default", props),
      };
  }
}

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
  }
};
const getColorSchemeActiveProps = (props: CardThemeProps) => {
  const { colorScheme } = props;
  switch (colorScheme) {
    case "default":
      return {
        backgroundColor: mode("bg.tertiary.light", `bg.default.dark`)(props),
        ...floatingBorder("active", props),
      };
  }
};
