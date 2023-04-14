import { defineStyleConfig } from "@chakra-ui/react";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    borderStyle: "solid",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xl",
    fontWeight: "bold",
    paddingLeft: [2, 3],
    paddingRight: [2, 3],
    minHeight: [4, 5],
    ...getColorScheme(colorScheme as ColorScheme),
  }),
  variants: {
    solid: {
      borderWidth: 0,
    },
    outline: {
      borderWidth: 1,
    },
  },
  defaultProps: {
    variant: "solid",
    colorScheme: "grey",
  },
});

export default config;

function getColorScheme(colorScheme: ColorScheme) {
  let styles = colorCombinations[colorScheme];
  if (!styles && process.env.NODE_ENV === "development") {
    console.warn(`Invalid color scheme ${colorScheme} provided.`);
    styles = colorCombinations.grey;
  }
  return styles;
}

type ColorScheme =
  | "yellow"
  | "light-yellow"
  | "red"
  | "light-green"
  | "dark-green"
  | "orange"
  | "light-blue"
  | "dark-blue"
  | "grey"
  | "white";
type ColorSpec = {
  backgroundColor: string;
  color: string;
  borderColor?: string;
};
const colorCombinations: Record<ColorScheme, ColorSpec> = {
  yellow: {
    backgroundColor: "banana",
    borderColor: "darkGrey",
    color: "darkGrey",
  },
  "light-yellow": {
    backgroundColor: "blonde",
    borderColor: "golden",
    color: "darkGrey",
  },
  red: {
    backgroundColor: "lightRed",
    borderColor: "brightRed",
    color: "darkGrey",
  },
  "light-green": {
    backgroundColor: "seaMist",
    borderColor: "darkTeal",
    color: "darkTeal",
  },
  "dark-green": {
    backgroundColor: "celadon",
    borderColor: "blueGreen",
    color: "white",
  },
  orange: {
    backgroundColor: "champagne",
    borderColor: "pumpkin",
    color: "darkGrey",
  },
  "light-blue": {
    backgroundColor: "lightBlue",
    borderColor: "ocean",
    color: "darkBlue",
  },
  "dark-blue": {
    backgroundColor: "darkBlue",
    borderColor: "sky",
    color: "white",
  },
  grey: {
    backgroundColor: "platinum",
    borderColor: "darkGrey",
    color: "darkGrey",
  },
  white: {
    backgroundColor: "white",
    borderColor: "silver",
    color: "darkGrey",
  },
};
