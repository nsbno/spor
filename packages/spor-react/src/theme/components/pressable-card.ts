import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { accentBackground } from "../utils/accent-utils";

const config = defineStyleConfig({
  baseStyle: (props: any) => ({
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    borderRadius: "md",
    // Except for white cards, all cards are light mode always
    color: "text.default.light",
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

//Droppe denne evt etter å ha hørt med PØ
type CardThemeProps = {
  colorScheme:
    | "white"
    | "grey"
    | "blue"
    | "green"
    | "teal"
    | "yellow"
    | "orange"
    | "red";
  theme: any;
  colorMode: "light" | "dark";
};

const getColorSchemeBaseProps = (props: CardThemeProps) => {
  switch (props.colorScheme) {
    case "white":
      return {
        ...baseBorder("default", props),
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, white 10%, var(--spor-colors-bg-default-dark))`,
        )(props),
        color: "inherit",
      };
    case "grey":
      return {
        backgroundColor: "lightGrey",
      };
    case "green": {
      return {
        backgroundColor: "seaMist",
      };
    }
    case "red": {
      return {
        backgroundColor: "pink",
      };
    }
    default:
      return {
        backgroundColor: colors[props.colorScheme]?.[100] ?? "platinum",
      };
  }
};

function getColorSchemeClickableProps(props: CardThemeProps) {
  switch (props.colorScheme) {
    case "white":
      return {
        ...floatingBorder("default", props),
      };
    case "grey":
      return {
        outlineColor: "steel",
      };
    default:
      return {
        backgroundColor: colors[props.colorScheme]?.[100] ?? "platinum",
        outlineColor: colors[props.colorScheme]?.[200] ?? "silver",
      };
  }
}

const getColorSchemeHoverProps = (props: CardThemeProps) => {
  switch (props.colorScheme) {
    case "white":
      return {
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, white 20%, var(--spor-colors-bg-default-dark))`,
        )(props),
        ...floatingBorder("hover", props),
      };
    case "grey":
      return {
        outlineColor: "osloGrey",
      };
    default:
      return {
        backgroundColor: colors[props.colorScheme]?.[200] ?? "silver",
        outlineColor: colors[props.colorScheme]?.[400] ?? "silver",
      };
  }
};
const getColorSchemeActiveProps = (props: CardThemeProps) => {
  const { colorScheme } = props;
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: mode("bg.tertiary.light", `bg.default.dark`)(props),
        ...floatingBorder("active", props),
      };
    case "grey":
      return {
        backgroundColor: "white",
        outlineColor: "steel",
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[50] ?? "lightGrey",
        outlineColor: colors[colorScheme]?.[100] ?? "silver",
      };
  }
};
