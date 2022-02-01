import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  border: "1px solid",
  borderRadius: "md",
};

type Variant = "elevated" | "filled" | "outlined";
const variants: Record<Variant, SystemStyleInterpolation> = {
  elevated: {
    backgroundColor: "alias.white",
    boxShadow: "md",
  },
  filled: ({ colorScheme }) => ({
    border: "1px solid",
    ...getColorSchemeProps(colorScheme),
  }),
  outlined: {
    border: "1px solid",
    borderColor: "alias.osloGrey",
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
