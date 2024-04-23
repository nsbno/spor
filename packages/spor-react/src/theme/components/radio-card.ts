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
    ...getColorSchemeBaseProps(props),
    ...getColorSchemeClickableProps(props),
    ...focusVisibleStyles(props),
    ...getColorSchemeActiveProps(props),
    _hover: getColorSchemeHoverProps(props),
    _checked: {
      color: "blue",
      borderColor: "red",
    },
    _disabled: {
      ...baseBackground("disabled", props),
      ...baseBorder("disabled", props),
      ...baseText("disabled", props),
      pointerEvents: "none",
    },
  }),
  variants: {
    base: (props) => ({
      ...baseBackground("default", props),
      _hover: {
        ...baseBackground("hover", props),
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

function getColorSchemeClickableProps(props: CardThemeProps) {
  switch (props.colorScheme) {
    case "default":
      return {
        ...floatingBorder("default", props),
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

const getColorSchemeActiveProps = (props: CardThemeProps) => {
  const { colorScheme } = props;
  switch (colorScheme) {
    case "default":
      return {
        backgroundColor: mode("bg.tertiary.light", `bg.default.dark`)(props),
        ...floatingBorder("active", props),
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
