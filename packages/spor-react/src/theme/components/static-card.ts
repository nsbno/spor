import { Theme, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../foundations";
import { focusVisibleStyles } from "../utils/focus-utils";
import { floatingBackground } from "../utils/floating-utils";
import { mode } from "@chakra-ui/theme-tools";

const config = defineStyleConfig({
  baseStyle: (props: any) => ({
    appearance: "none",
    border: "none",
    overflow: "hidden",
    fontSize: "inherit",
    display: "block",
    borderRadius: "md",
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
  theme: Theme;
  colorMode: "light" | "dark";
};

const getColorSchemeBaseProps = (props: CardThemeProps) => {
  switch (props.colorScheme) {
    case "white":
      return {
        ...floatingBackground("default", props),
        color: mode("text.default.light", "text.default.dark")(props),
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
      };
  }
};
