import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: (props: any) => ({
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
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
          outline: "none",
          _active: getColorSchemeActiveProps(props),
        },
        notFocus: {
          ...getColorSchemeClickableProps(props),
          _active: getColorSchemeActiveProps(props),
        },
      }),
      _disabled: {
        backgroundColor: "platinum",
        boxShadow: getBoxShadowString({
          borderColor: "silver",
        }),
        color: "osloGrey",
        pointerEvents: "none",
      },
    },
  }),
});

export default config;

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

function getColorSchemeBaseProps({ colorScheme }: CardThemeProps): {
  backgroundColor: string;
  boxShadow: string;
} {
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: "white",
        boxShadow: getBoxShadowString({
          borderColor: "silver",
        }),
      };
    case "grey":
      return {
        backgroundColor: "lightGrey",
        boxShadow: getBoxShadowString({
          borderColor: "steel",
        }),
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[100] ?? "platinum",
        boxShadow: getBoxShadowString({
          borderColor: colors[colorScheme]?.[200] ?? "silver",
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
          borderColor: "silver",
        }),
      };
    case "grey":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: "steel",
        }),
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[100] ?? "platinum",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors[colorScheme]?.[200] ?? "silver",
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
          borderColor: colors.steel,
        }),
      };
    case "grey":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.osloGrey,
        }),
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[200] ?? "silver",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors[colorScheme]?.[400] ?? colors.silver,
        }),
      };
  }
}

function getColorSchemeActiveProps({ colorScheme, size }: CardThemeProps) {
  const baseShadow = size === "lg" ? "sm" : "none";
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: "mint",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.silver,
        }),
      };
    case "grey":
      return {
        backgroundColor: "white",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.steel,
        }),
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[50] ?? "lightGrey",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors[colorScheme]?.[100] ?? colors.silver,
        }),
      };
  }
}
