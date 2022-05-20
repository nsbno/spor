import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyle: PartsStyleObject<typeof parts> = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  th: {
    fontWeight: "bold",
    textAlign: "start",
  },
  td: {
    textAlign: "start",
  },
  tfoot: {
    tr: {
      "&:last-of-type": {
        th: { borderBottomWidth: 0 },
      },
    },
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "bold",
    color: "currentColor",
  },
};

const numericStyles: SystemStyleObject = {
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
};

const variantSimple: PartsStyleFunction<typeof parts> = (props) => {
  return {
    table: {
      color: mode("darkGrey", "white")(props),
    },
    th: {
      borderBottom: "sm",
      borderColor: mode(`blackAlpha.200`, `whiteAlpha.300`)(props),
      ...numericStyles,
    },
    td: {
      borderBottom: "sm",
      borderColor: mode(`blackAlpha.200`, `whiteAlpha.300`)(props),
      ...numericStyles,
    },
  };
};

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    tbody: {
      tr: {
        transitionDuration: "fast",
        transitionProperty: "background-color, box-shadow",
        _hover: {
          boxShadow: mode(
            `inset 3px 0 0 ${theme.colors.darkTeal}`,
            `inset 3px 0 0 ${theme.colors.blueGreen}`
          )(props),
          backgroundColor: mode(
            c === "grey" ? "mint" : "coralGreen",
            "whiteAlpha.200"
          )(props),
        },
      },
    },
    th: {
      color: mode("darkGrey", "white")(props),
      border: mode("none", "md"),
      borderColor: mode("transparent", `whiteAlpha.200`)(props),
      backgroundColor: mode(`${c}.100`, "darkTeal")(props),
      ...numericStyles,
    },
    td: {
      border: mode("sm", "md"),
      borderColor: mode(
        c === "grey" ? "silver" : "blackAlpha.200",
        "whiteAlpha.200"
      )(props),
      ...numericStyles,
      _first: {
        borderLeft: "none",
      },
    },
    tr: {
      _last: {
        td: {
          borderBottom: "none",
        },
      },
    },
  };
};

const variants = {
  simple: variantSimple,
  outline: variantOutline,
  unstyled: {},
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    table: {
      fontSize: ["mobile.xs", "desktop.xs"],
    },
    th: {
      px: 3,
      py: 1.5,
    },
    td: {
      px: 3,
      py: 1.5,
    },
    caption: {
      px: 3,
      py: 1.5,
    },
  },
  md: {
    table: {
      fontSize: ["mobile.sm", "desktop.sm"],
    },
    th: {
      px: 3,
      py: 1.5,
    },
    td: {
      px: 3,
      py: 1.5,
    },
    caption: {
      px: 3,
      py: 1.5,
    },
  },
  lg: {
    table: {
      fontSize: ["mobile.sm", "desktop.sm"],
    },
    th: {
      px: 3,
      py: "15px",
    },
    td: {
      px: 3,
      py: "15px",
    },
    caption: {
      px: 3,
      py: "15px",
    },
  },
};

const defaultProps = {
  variant: "simple",
  size: "md",
  colorScheme: "grey",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
