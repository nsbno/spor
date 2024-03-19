import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBorder } from "../utils/border-utils";
import { baseText } from "../utils/text-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
};

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    table: {
      borderCollapse: "collapse",
      ...baseText("default", props),
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
      marginTop: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "bold",
      color: "currentColor",
    },
  }),
  variants: {
    simple: (props) => ({
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
    }),
    outline: (props) => ({
      tbody: {
        tr: {
          transitionDuration: "fast",
          transitionProperty: "background-color, box-shadow",
          _hover: {
            ...baseBorder("hover", props),
            outlineOffset: "-2px",
            backgroundColor: mode(
              props.colorScheme === "grey" ? "mint" : "coralGreen",
              "whiteAlpha.200",
            )(props),
          },
          _last: {
            borderBottomRadius: "md",
          },
        },
      },
      th: {
        border: mode("none", "md"),
        borderColor: mode("transparent", `whiteAlpha.200`)(props),
        backgroundColor: mode(`${props.colorScheme}.100`, "darkTeal")(props),
        ...numericStyles,
      },
      td: {
        border: mode("sm", "md"),
        borderColor: mode(
          props.colorScheme === "grey" ? "silver" : "blackAlpha.200",
          "whiteAlpha.200",
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
    }),
    unstyled: {},
  },
  sizes: {
    sm: {
      table: {
        fontSize: ["mobile.xs", "desktop.xs"],
      },
      th: {
        paddingX: 3,
        paddingY: 1.5,
      },
      td: {
        paddingX: 3,
        paddingY: 1.5,
      },
      caption: {
        paddingX: 3,
        paddingY: 1.5,
      },
    },
    md: {
      table: {
        fontSize: ["mobile.sm", "desktop.sm"],
      },
      th: {
        paddingX: 3,
        paddingY: 1.5,
      },
      td: {
        paddingX: 3,
        paddingY: 1.5,
      },
      caption: {
        paddingX: 3,
        paddingY: 1.5,
      },
    },
    lg: {
      table: {
        fontSize: ["mobile.sm", "desktop.sm"],
      },
      th: {
        paddingX: 3,
        paddingY: "15px",
      },
      td: {
        paddingX: 3,
        paddingY: "15px",
      },
      caption: {
        paddingX: 3,
        paddingY: "15px",
      },
    },
  },
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "grey",
  },
});

export default config;
