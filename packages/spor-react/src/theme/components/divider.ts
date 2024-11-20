import { defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const borderColor = mode("blackAlpha.300", "whiteAlpha.300");

function getSizes(size: string) {
  const sizes: Record<string, { height: string; dash: string; gap: string }> = {
    sm: {
      height: "1px",
      dash: "1px",
      gap: "4px",
    },
    md: {
      height: "2px",
      dash: "3px",
      gap: "6px",
    },
    lg: {
      height: "3px",
      dash: "3px",
      gap: "9px",
    },
  };
  return sizes[size] || sizes["md"];
}

export default defineStyleConfig({
  baseStyle: (props) => ({
    borderColor: borderColor(props),
  }),
  variants: {
    solid: {
      borderStyle: "solid",
    },
    dashed: (props) => {
      const { height, dash, gap } = getSizes(props.size);
      return {
        height: height,
        backgroundImage: `linear-gradient(90deg, ${borderColor(props)}, ${borderColor(props)} ${dash}, transparent ${dash}, transparent ${gap})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        backgroundSize: `${gap} ${height}`,
      };
    },
  },
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});
