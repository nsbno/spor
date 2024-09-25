import { defineStyleConfig } from "@chakra-ui/styled-system";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const isSolid = (props: StyleFunctionProps) => props.variant === "solid";
const isDashed = (props: StyleFunctionProps) => props.variant === "dashed";

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
      borderWidth: isSolid(props) ? "1px" : undefined,
      borderRadius: isSolid(props) ? "0.5px" : undefined,
      height: isDashed(props) ? "1px" : undefined,
    }),
    md: (props) => ({
      borderWidth: isSolid(props) ? "2px" : undefined,
      borderRadius: isSolid(props) ? "1px" : "10px",
      height: isDashed(props) ? "2px" : undefined,
    }),
    lg: (props) => ({
      borderWidth: isSolid(props) ? "3px" : undefined,
      borderRadius: isSolid(props) ? "1.5px" : undefined,
      height: isDashed(props) ? "3px" : undefined,
    }),
  },
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});
