import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
};

const config = helpers.defineMultiStyleConfig({
  baseStyle: {
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
  },
  variants: {
    simple: (props) => ({
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
    }),
    outline: (props) => ({
      tbody: {
        tr: {
          transitionDuration: "fast",
          transitionProperty: "background-color, box-shadow",
          _hover: {
            boxShadow: mode(
              getBoxShadowString({ borderColor: "darkTeal", borderWidth: 3 }),
              getBoxShadowString({ borderColor: "blueGreen", borderWidth: 3 })
            )(props),
            backgroundColor: mode(
              props.colorScheme === "grey" ? "mint" : "coralGreen",
              "whiteAlpha.200"
            )(props),
          },
        },
      },
      th: {
        color: mode("darkGrey", "white")(props),
        border: mode("none", "md"),
        borderColor: mode("transparent", `whiteAlpha.200`)(props),
        backgroundColor: mode(`${props.colorScheme}.100`, "darkTeal")(props),
        ...numericStyles,
      },
      td: {
        border: mode("sm", "md"),
        borderColor: mode(
          props.colorScheme === "grey" ? "silver" : "blackAlpha.200",
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
    }),
    unstyled: {},
  },
  sizes: {
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
  },
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "grey",
  },
});

export default config;
