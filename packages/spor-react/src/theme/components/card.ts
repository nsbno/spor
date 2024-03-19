import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { baseBackground } from "../utils/background-utils";
import { baseBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { baseText } from "../utils/text-utils";

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
    // Except for white cards, all cards are light mode always
    color: "text.default.light",
    ...getColorSchemeBaseProps(props),

    "button&, a&, label&, &.is-clickable": {
      outline: "1px solid",
      ...getColorSchemeClickableProps(props),
      ...focusVisibleStyles(props),
      _hover: getColorSchemeHoverProps(props),
      _active: getColorSchemeActiveProps(props),
      _disabled: {
        ...baseBackground("disabled", props),
        ...baseBorder("disabled", props),
        ...baseText("disabled", props),
        pointerEvents: "none",
      },
    },
  }),
  sizes: {
    sm: {
      "button&, a&, label&, &.is-clickable": {
        boxShadow: "sm",

        _hover: {
          boxShadow: "md",
        },

        _active: {
          boxShadow: "none",
        },
      },
    },
    lg: {
      "button&, a&, label&, &.is-clickable": {
        boxShadow: "md",

        _hover: {
          boxShadow: "lg",
        },

        _active: {
          boxShadow: "sm",
        },
      },
    },
  },
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
    | "orange"
    | "red";
  size: "sm" | "lg";
};

const getColorSchemeBaseProps = (props: CardThemeProps) => {
  switch (props.colorScheme) {
    case "white":
      return {
        outline: "1px solid",
        outlineColor: "silver",
        backgroundColor: mode("white", "whiteAlpha.100")(props),
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
        outlineColor: "silver",
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
        backgroundColor: mode("white", "whiteAlpha.200")(props),
        outlineColor: "steel",
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
  const { colorScheme, size } = props;
  switch (colorScheme) {
    case "white":
      return {
        backgroundColor: mode("mint", "teal")(props),
        outlineColor: "silver",
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
