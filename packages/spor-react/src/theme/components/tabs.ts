import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";
import {
  accentBackground,
  baseBackground,
  brandBackground,
} from "../utils/background-utils";
import { baseBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { accentText, baseText, brandText } from "../utils/text-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    tablist: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      width: props.isFitted ? "fit-content" : "100%",
      borderRadius: "xl",
    },
    tab: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: props.isFitted ? "fit-content" : "100%",
      height: "100%",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      ...focusVisibleStyles(props),
      _disabled: {
        ...baseBackground("disabled", props),
        ...baseText("disabled", props),
      },
      _selected: {
        pointerEvents: "none",
        ...brandBackground("default", props),
        ...brandText("default", props),
        _hover: {
          ...brandBackground("hover", props),
          ...brandText("hover", props),
        },
        _active: {
          ...brandBackground("active", props),
          ...brandText("active", props),
        },
      },
    },
  }),
  variants: {
    base: (props) => ({
      tablist: {
        ...baseBackground("default", props),
        ...baseText("default", props),
        ...baseBorder("default", props),
      },
      tab: {
        ...baseText("default", props),
        _hover: {
          ...baseBorder("hover", props),
          outlineOffset: "-2px",
        },
        _accent: {
          ...baseBackground("active", props),
        },
      },
    }),
    accent: (props) => ({
      tablist: {
        backgroundColor: mode("accent.bg.light", "accent.bg.dark")(props),
        ...accentText("default", props),
      },
      tab: {
        ...accentText("default", props),
        _hover: {
          ...accentBackground("hover", props),
        },
        _accent: {
          ...accentBackground("active", props),
        },
      },
    }),
  },
  sizes: {
    xs: {
      tablist: {
        height: "30px",
        padding: "2px",
      },
      tab: {
        paddingX: 2,
        paddingY: 0,
      },
    },
    sm: {
      tablist: {
        height: "36px",
        padding: 0.5,
      },
      tab: {
        paddingX: 2,
      },
    },
    md: {
      tablist: {
        height: "42px",
        padding: 0.5,
      },
      tab: {
        fontWeight: "bold",
        paddingX: 2,
      },
    },
    lg: {
      tablist: {
        height: "54px",
        padding: "4px",
      },
      tab: {
        fontWeight: "bold",
        paddingX: 3,
      },
    },
  },
  defaultProps: {
    size: "sm",
    variant: "base",
  },
});

export default config;

const getTabColorSchemeHoverProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "base":
      return {
        ...baseBorder("hover", props),
      };
    case "accent":
      return {
        ...accentBackground("hover", props),
      };
  }
};

const getTabColorSchemeActiveProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "base":
      return {
        ...baseBackground("active", props),
      };
    case "accent":
      return {
        ...accentBackground("active", props),
      };
  }
};
