import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const baseStyle: SystemStyleObject = {
  border: "1px solid transparent",
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "fast",

  _focus: {
    borderColor: "alias.greenHaze",
    boxShadow: `inset 0 0 0 1px ${colors.alias.greenHaze}`,
    outline: "none",
  },
  ":focus:not(:focus-visible)": {
    boxShadow: "none",
  },
  _focusVisible: {
    borderColor: "alias.greenHaze",
    boxShadow: `inset 0 0 0 1px ${colors.alias.greenHaze}`,
  },

  _disabled: {
    backgroundColor: "alias.silver",
    borderColor: "alias.silver",
    color: "alias.osloGrey",
    pointerEvents: "none",
  },
};

type Variant = "elevated" | "filled" | "outlined";
const variants: Record<Variant, SystemStyleInterpolation> = {
  elevated: {
    backgroundColor: "alias.white",
    boxShadow: "md",

    "button&, a&": {
      _hover: {
        borderColor: "alias.steel",
        boxShadow: "lg",
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
        ...getColorSchemeHoverProps(colorScheme),
      },
      _focus: {
        ...getColorSchemeFocusProps(colorScheme),
      },
      _focusVisible: {
        ...getColorSchemeFocusProps(colorScheme),
      },
      _active: {
        ...getColorSchemeActiveProps(colorScheme),
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
      _active: {
        backgroundColor: "alias.mint",
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

function getColorSchemeHoverProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.cloudy",
        borderColor: "alias.cloudy",
      };
    case "green":
      return {
        backgroundColor: "alias.seaMist",
        borderColor: "alias.seaMist",
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.silver",
        borderColor: "alias.silver",
      };
  }
}

function getColorSchemeFocusProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.lightBlue",
      };
    case "green":
      return {
        backgroundColor: "alias.seaMist",
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.platinum",
      };
  }
}

function getColorSchemeActiveProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.icyBlue",
        borderColor: "alias.cloudy",
      };
    case "green":
      return {
        backgroundColor: "alias.mint",
        borderColor: "alias.seaMist",
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.lightGrey",
        borderColor: "alias.silver",
      };
  }
}

export default {
  baseStyle,
  variants,
};
