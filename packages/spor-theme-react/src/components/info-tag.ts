import type {
  PartsStyleInterpolation,
  PartsStyleObject,
} from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";
import travelTagStyles from "./travel-tag";

const parts = anatomy("info-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description"
);

const baseStyle: PartsStyleInterpolation<typeof parts> = (args) => ({
  ...travelTagStyles.baseStyle(args),
  iconContainer: {
    ...travelTagStyles.baseStyle(args).iconContainer,
    padding: 1,
  },
});

const variants = {
  // Nothing special for any of the info tag variants
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  ...travelTagStyles.sizes,
  sm: {
    ...travelTagStyles.sizes.sm,
    iconContainer: {
      borderRadius: "0.375rem",
    },
  },
  md: {
    ...travelTagStyles.sizes.md,
    iconContainer: {
      borderRadius: "0.375rem",
    },
  },
  lg: {
    ...travelTagStyles.sizes.lg,
    iconContainer: {
      borderRadius: "sm",
    },
  },
};

const defaultProps = {
  size: "md",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
