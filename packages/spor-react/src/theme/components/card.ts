import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: (props: any) => ({
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    transitionProperty: "common",
    transitionDuration: "fast",
    borderRadius: "md",
    ...getColorSchemeBaseProps(props),

    "button&, a&, label&, &.is-clickable": {
      ...getColorSchemeClickableProps(props),
      _hover: getColorSchemeHoverProps(props),
      _active: getColorSchemeActiveProps(props),
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: mode("greenHaze", "azure")(props),
            borderWidth: 2,
            isInset: false,
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
          isInset: false,
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

const getColorSchemeBaseProps = (props: CardThemeProps) => {
  const { colorScheme, size } = props;
  const baseShadow = size === "lg" ? "md" : "sm";
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: mode("white", "whiteAlpha.100")(props),
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: "silver",
          isInset: false,
        }),
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
    default:
      return {
        backgroundColor: colors[colorScheme]?.[100] ?? "platinum",
      };
  }
};

function getColorSchemeClickableProps({ colorScheme, size }: CardThemeProps) {
  const baseShadow = size === "lg" ? "md" : "sm";
  switch (colorScheme) {
    case "white":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: "silver",
          isInset: false,
        }),
      };
    case "grey":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: "steel",
          isInset: false,
        }),
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[100] ?? "platinum",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors[colorScheme]?.[200] ?? "silver",
          isInset: false,
        }),
      };
  }
}

const getColorSchemeHoverProps = (props: CardThemeProps) => {
  const { colorScheme, size } = props;
  const baseShadow = size === "lg" ? "lg" : "md";
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: mode("white", "whiteAlpha.200")(props),
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.steel,
          isInset: false,
        }),
      };
    case "grey":
      return {
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.osloGrey,
          isInset: false,
        }),
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[200] ?? "silver",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors[colorScheme]?.[400] ?? colors.silver,
          isInset: false,
        }),
      };
  }
};
const getColorSchemeActiveProps = (props: CardThemeProps) => {
  const { colorScheme, size } = props;
  const baseShadow = size === "lg" ? "sm" : "none";
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: mode("mint", "teal")(props),
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.silver,
          isInset: false,
        }),
      };
    case "grey":
      return {
        backgroundColor: "white",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors.steel,
          isInset: false,
        }),
      };
    default:
      return {
        backgroundColor: colors[colorScheme]?.[50] ?? "lightGrey",
        boxShadow: getBoxShadowString({
          baseShadow,
          borderColor: colors[colorScheme]?.[100] ?? colors.silver,
          isInset: false,
        }),
      };
  }
};
