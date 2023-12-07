import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const baseStyle = defineStyle((props) => ({
  borderColor: mode("blackAlpha.300", "whiteAlpha.300")(props),
}));

const variantSolid = defineStyle({
  borderStyle: "solid",
});

const variantDashed = defineStyle({
  borderStyle: "dashed",
});

const variants = {
  solid: variantSolid,
  dashed: variantDashed,
};

const sizes = {
  sm: {
    borderWidth: "1px",
    borderRadius: "0.5px",
  },
  md: {
    borderWidth: "2px",
    borderRadius: "1px",
  },
  lg: {
    borderWidth: "3px",
    borderRadius: "1.5px",
  },
};

export default defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});
