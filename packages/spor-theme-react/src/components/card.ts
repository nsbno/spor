import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const baseStyle: SystemStyleObject = {
  border: "1px solid transparent",
  borderRadius: "md",
};

type Variant = "elevated" | "filled" | "outlined";
const variants: Record<Variant, SystemStyleInterpolation> = {
  elevated: {
    backgroundColor: "alias.white",
    boxShadow: "md",
    transitionProperty: "common",
    transitionDuration: "fast",

    "button&, a&": {
      _hover: {
        borderColor: "alias.steel",
        boxShadow: "lg",
      },
      _focus: {
        boxShadow: `inset 0 0 0 2px ${colors.alias.greenHaze}`,
      },
      ":focus:not(:focus-visible)": {
        boxShadow: "none",
      },
      _focusVisible: {
        boxShadow: `inset 0 0 0 2px ${colors.alias.greenHaze}`,
      },
      _active: {
        backgroundColor: "alias.mint",
        borderColor: "transparent",
      },
    },
  },
  filled: ({ colorScheme }) => ({
    border: "1px solid",
    ...getColorSchemeProps(colorScheme),

    "button&, a&": {
      _hover: {
        backgroundColor: "alias.lightGrey",
      },
      _focus: {
        borderColor: "alias.greenHaze",
      },
      ":focus:not(:focus-visible)": {
        boxShadow: "none",
      },
      _focusVisible: {
        boxShadow: `inset 0 0 0 2px ${colors.alias.greenHaze}`,
      },
      _active: {
        borderColor: "alias.cloudy",
      },
    },
  }),
  outlined: {
    border: "1px solid",
    borderColor: "alias.osloGrey",

    "button&, a&": {
      _hover: {
        borderColor: "alias.darkGrey",
      },
      _focus: {
        borderColor: "alias.greenHaze",
      },
      ":focus:not(:focus-visible)": {
        boxShadow: "none",
      },
      _focusVisible: {
        boxShadow: `inset 0 0 0 2px ${colors.alias.greenHaze}`,
      },
      _active: {
        borderColor: "alias.osloGrey",
      },
    },
  },
};

function getColorSchemeProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.lightBlue",
        borderColor: "alias.cloudy",
      };
    case "green":
      return {
        backgroundColor: "alias.mint",
        borderColor: "alias.coralGreen",
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.platinum",
        borderColor: "alias.silver",
      };
  }
}

export default {
  baseStyle,
  variants,
};
