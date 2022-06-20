import type { SystemStyleInterpolation } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";

type CardThemeProps = {
  colorScheme:
    | "white"
    | "grey"
    | "blue"
    | "green"
    | "teal"
    | "yellow"
    | "orange";
  size: "sm" | "lg";
};

const baseStyle = (props: CardThemeProps) => ({
  appearance: "none",
  border: "none",
  borderRadius: "md",
  overflow: "hidden",
  fontSize: "inherit",
  transitionProperty: "common",
  transitionDuration: "fast",
  ...getColorSchemeBaseProps(props),

  "button&, a&": {
    ...getColorSchemeClickableProps(props),
    _hover: getColorSchemeHoverProps(props),
    _active: getColorSchemeActiveProps(props),
    _focus: {
      boxShadow: getBoxShadowString({
        borderColor: colors.alias.greenHaze,
        borderWidth: 2,
      }),
      outline: "none",
    },
    ":focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    _focusVisible: {
      boxShadow: getBoxShadowString({
        borderColor: colors.alias.greenHaze,
        borderWidth: 2,
      }),
    },

    _disabled: {
      backgroundColor: "alias.silver",
      boxShadow: getBoxShadowString({
        borderColor: colors.alias.silver,
      }),
      color: "alias.osloGrey",
      pointerEvents: "none",
    },
  },
});

function getColorSchemeBaseProps({ colorScheme }: CardThemeProps): {
  backgroundColor: string;
  boxShadow: string;
} {
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: "alias.white",
        boxShadow: getBoxShadowString({
          borderColor: colors.palette.blackAlpha[200],
        }),
      };
    case "grey":
      return {
        backgroundColor: "alias.lightGrey",
        boxShadow: getBoxShadowString({
          borderColor: colors.palette.blackAlpha[300],
        }),
      };
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[200] ?? "alias.platinum",
        boxShadow: getBoxShadowString({
          borderColor:
            colors.palette[colorScheme]?.[100] ?? colors.alias.silver,
        }),
      };
  }
}

function getColorSchemeClickableProps({ colorScheme, size }: CardThemeProps) {
  const baseShadow = size === "lg" ? "md" : "sm";
  switch (colorScheme) {
    case "white":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.palette.blackAlpha[200],
        }),
      };
    case "grey":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.palette.blackAlpha[300],
        }),
      };
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[200] ?? "alias.platinum",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor:
            colors.palette[colorScheme]?.[100] ?? colors.alias.silver,
        }),
      };
  }
}

function getColorSchemeHoverProps({ colorScheme }: CardThemeProps) {
  switch (colorScheme) {
    case "white":
      return {};
    case "grey":
      return {};
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[200] ?? "alias.silver",
        boxShadow: getBoxShadowString({
          borderColor:
            colors.palette[colorScheme]?.[100] ?? colors.alias.silver,
        }),
      };
  }
}

function getColorSchemeActiveProps({ colorScheme }: CardThemeProps) {
  switch (colorScheme) {
    case "white":
      return {};
    case "grey":
      return {};
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[50] ?? "alias.lightGrey",
        boxShadow: getBoxShadowString({
          borderColor:
            colors.palette[colorScheme]?.[100] ?? colors.alias.silver,
        }),
      };
  }
}

const sizes: Record<CardThemeProps["size"], SystemStyleInterpolation> = {
  lg: {
    borderRadius: "md",
  },
  sm: {
    borderRadius: "sm",
  },
};

export default {
  baseStyle,
  sizes,
};
