import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: ["mobile.xs", "desktop.xs"],
  borderRadius: "xl",
  fontWeight: "bold",
};

const variantSolid: SystemStyleFunction = (props) => {
  const colorScheme = getColorScheme(props.colorScheme as ColorScheme);

  return {
    border: "none",
    ...colorScheme,
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const colorScheme = getColorScheme(props.colorScheme as ColorScheme);

  return {
    border: "1px solid",
    ...colorScheme,
  };
};

const variants = {
  solid: variantSolid,
  outline: variantOutline,
};

const sizes: Record<"sm" | "md", SystemStyleObject> = {
  sm: {
    px: 2,
    height: 4,
  },
  md: {
    px: 3,
    height: 5,
  },
};

const defaultProps = {
  variant: "solid",
  colorScheme: "grey",
  size: "sm",
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

function getColorScheme(colorScheme: ColorScheme) {
  let styles: SystemStyleObject = colorCombinations[colorScheme];
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
  | "green"
  | "orange"
  | "blue"
  | "grey"
  | "white";
type ColorSpec = {
  backgroundColor: string;
  color: string;
  borderColor?: string;
};
const colorCombinations: Record<ColorScheme, ColorSpec> = {
  yellow: {
    backgroundColor: "alias.banana",
    borderColor: "alias.darkGrey",
    color: "alias.darkGrey",
  },
  "light-yellow": {
    backgroundColor: "alias.blonde",
    borderColor: "alias.golden",
    color: "alias.darkGrey",
  },
  red: {
    backgroundColor: "alias.lightRed",
    borderColor: "alias.brightRed",
    color: "alias.darkGrey",
  },
  green: {
    backgroundColor: "alias.seaMist",
    borderColor: "alias.darkTeal",
    color: "alias.darkTeal",
  },
  orange: {
    backgroundColor: "alias.champagne",
    borderColor: "alias.pumpkin",
    color: "alias.darkGrey",
  },
  blue: {
    backgroundColor: "alias.lightBlue",
    borderColor: "alias.ocean",
    color: "alias.darkGrey",
  },
  grey: {
    backgroundColor: "alias.platinum",
    borderColor: "alias.darkGrey",
    color: "alias.darkGrey",
  },
  white: {
    backgroundColor: "alias.white",
    borderColor: "alias.silver",
    color: "alias.darkGrey",
  },
};
