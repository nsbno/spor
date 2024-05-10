import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { baseBorder, baseText } from "../utils/base-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

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
    ...focusVisibleStyles(props),
    ...getColorSchemeBaseProps(props),
  }),
});

export default config;

type CardThemeProps = {
  colorScheme:
    | "white"
    | "grey"
    | "green"
    | "orange"
    | "red"
    | "yellow"
    | "blue"
    | "darkBlue"
    | "darkGreen"
    | "darkYellow";
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
    case "darkBlue": {
      return {
        backgroundColor: "darkBlue",
        color: "white",
      };
    }
    case "darkGreen": {
      return {
        backgroundColor: "pine",
        color: "white",
      };
    }
    case "darkYellow": {
      return {
        backgroundColor: "banana",
      };
    }
    default:
      return {
        backgroundColor: colors[props.colorScheme]?.[100] ?? "default",
        ...baseText("default", props),
      };
  }
};
