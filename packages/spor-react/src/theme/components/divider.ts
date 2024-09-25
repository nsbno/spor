import { defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

export default defineStyleConfig({
  baseStyle: (props) => ({
    borderColor: mode("blackAlpha.300", "whiteAlpha.300")(props),
  }),
  variants: {
    solid: {
      borderStyle: "solid",
    },
    dashed: (props) => ({
      backgroundImage: `repeating-linear-gradient(90deg, ${mode("blackAlpha.300", "whiteAlpha.300")(props)}, ${mode("blackAlpha.300", "whiteAlpha.300")(props)} 4px, transparent 4px, transparent 10px)`,
      backgroundPosition: "left bottom",
      backgroundRepeat: "repeat-x",
      backgroundSize: "100% 3px",
      borderRadius:
        props.size === "sm" ? "0.5px" : props.size === "md" ? "1px" : "1.5px",
    }),
  },
  sizes: {
    sm: (props) => ({
      borderWidth: props.variant === "solid" ? "1px" : undefined,
      borderRadius: props.variant === "solid" ? "0.5px" : undefined,
      height: props.variant === "dashed" ? "1px" : undefined,
    }),
    md: (props) => ({
      borderWidth: props.variant === "solid" ? "2px" : undefined,
      borderRadius: props.variant === "solid" ? "1px" : "10px",
      height: props.variant === "dashed" ? "2px" : undefined,
    }),
    lg: (props) => ({
      borderWidth: props.variant === "solid" ? "3px" : undefined,
      borderRadius: props.variant === "solid" ? "1.5px" : undefined,
      height: props.variant === "dashed" ? "3px" : undefined,
    }),
  },
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});
