import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import type { PartsStyleObject } from "@chakra-ui/theme-tools";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    overlay: {
      backgroundColor: "blackAlpha.600",
      zIndex: "modal",
    },
    dialogContainer: {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: props.isCentered ? "center" : "flex-start",
      overflow: props.scrollBehavior === "inside" ? "hidden" : "auto",
    },
    dialog: {
      borderRadius: "md",
      background: "white",
      color: "inherit",
      my: "3.75rem",
      zIndex: "modal",
      maxHeight:
        props.scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
      boxShadow: "md",
    },
    header: {
      px: 5,
      pt: 6,
      pb: 2,
      fontWeight: "bold",
      fontFamily: "body",
    },
    closeButton: {
      position: "absolute",
      top: 3,
      insetEnd: 3,
    },
    body: {
      px: 5,
      pb: 6,
      flex: 1,
      overflow: props.scrollBehavior === "inside" ? "auto" : undefined,
    },
    footer: {
      px: 3,
      pb: 3,
    },
  }),
  sizes: {
    xs: getSize("xs"),
    sm: getSize("sm"),
    md: getSize("md"),
    lg: getSize("lg"),
    xl: getSize("xl"),
    "2xl": getSize("2xl"),
    "3xl": getSize("3xl"),
    "4xl": getSize("4xl"),
    "5xl": getSize("5xl"),
    "6xl": getSize("6xl"),
    full: getSize("full"),
  },
  defaultProps: {
    size: "md",
  },
});

export default config;

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string): PartsStyleObject<typeof parts> {
  if (value === "full") {
    return {
      dialog: {
        maxWidth: "100vw",
        minHeight: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minHeight: "-webkit-fill-available",
        },
        my: 0,
      },
    };
  }
  return {
    dialog: { maxW: value },
  };
}
