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
  overflow: "hidden",
  fontSize: "inherit",
  transitionProperty: "common",
  transitionDuration: "fast",
  borderRadius: "md",
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
      _active: getColorSchemeActiveProps(props),
    },
    ":focus:not(:focus-visible)": {
      ...getColorSchemeClickableProps(props),
      _active: getColorSchemeActiveProps(props),
    },
    _focusVisible: {
      boxShadow: getBoxShadowString({
        borderColor: colors.alias.greenHaze,
        borderWidth: 2,
      }),
    },

    _disabled: {
      backgroundColor: "alias.platinum",
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
          borderColor: colors.alias.silver,
        }),
      };
    case "grey":
      return {
        backgroundColor: "alias.lightGrey",
        boxShadow: getBoxShadowString({
          borderColor: colors.alias.steel,
        }),
      };
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[100] ?? "alias.platinum",
        boxShadow: getBoxShadowString({
          borderColor:
            colors.palette[colorScheme]?.[200] ?? colors.alias.silver,
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
          borderColor: colors.alias.silver,
        }),
      };
    case "grey":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.alias.steel,
        }),
      };
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[100] ?? "alias.platinum",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor:
            colors.palette[colorScheme]?.[200] ?? colors.alias.silver,
        }),
      };
  }
}

function getColorSchemeHoverProps({ colorScheme, size }: CardThemeProps) {
  const baseShadow = size === "lg" ? "lg" : "md";
  switch (colorScheme) {
    case "white":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.alias.steel,
        }),
      };
    case "grey":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.alias.osloGrey,
        }),
      };
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[200] ?? "alias.silver",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor:
            colors.palette[colorScheme]?.[400] ?? colors.alias.silver,
        }),
      };
  }
}

function getColorSchemeActiveProps({ colorScheme, size }: CardThemeProps) {
  const baseShadow = size === "lg" ? "sm" : "none";
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: "alias.mint",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.alias.silver,
        }),
      };
    case "grey":
      return {
        backgroundColor: "alias.white",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.alias.steel,
        }),
      };
    default:
      return {
        backgroundColor: colors.palette[colorScheme]?.[50] ?? "alias.lightGrey",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor:
            colors.palette[colorScheme]?.[100] ?? colors.alias.silver,
        }),
      };
  }
}

export default {
  baseStyle,
};
