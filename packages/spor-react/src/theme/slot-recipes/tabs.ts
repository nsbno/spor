import { defineSlotRecipe } from "@chakra-ui/react";
import { accentBackground, accentText } from "../utils/accent-utils";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { tabsAnatomy } from "./anatomy";

export const tabsSlotRecipe = defineSlotRecipe({
  slots: tabsAnatomy.keys(),
  className: "spor-tabs",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    list: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      borderRadius: "xl",
    },
    trigger: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transitionProperty: "common",
      transitionDuration: "normal",
      height: "100%",
      whiteSpace: "nowrap",
      borderRadius: "xl",
      ...focusVisibleStyles(),
    },
  },
  variants: {
    fitted: {
      true: {
        list: {
          display: "flex",
        },
        trigger: {
          flex: 1,
          textAlign: "center",
          justifyContent: "center",
        },
      },
    },
    justify: {
      start: {
        list: {
          justifyContent: "flex-start",
        },
      },
      center: {
        list: {
          justifyContent: "center",
        },
      },
      end: {
        list: {
          justifyContent: "flex-end",
        },
      },
    },
    variant: {
      core: {
        list: {
          ...coreBackground("default"),
          ...coreText("default"),
          ...coreBorder("default"),
        },
        trigger: {
          ...coreText("default"),
          _hover: {
            ...coreBorder("hover"),
            outlineOffset: "-2px",
          },
          _active: {
            ...coreBackground("active"),
            ...coreText("active"),
          },
          _selected: {
            ...coreBackground("selected"),
            ...coreText("selected"),
          },
          _disabled: {
            ...coreBackground("disabled"),
            ...coreText("disabled"),
          },
        },
      },
      accent: {
        list: {
          backgroundColor: "accent.bg",
          ...accentText("default"),
        },
        trigger: {
          ...accentText("default"),
          _active: {
            ...accentBackground("active"),
            ...accentText("default"),
          },
          _disabled: {
            ...coreBackground("disabled"),
            ...coreText("disabled"),
          },
          _hover: {
            ...accentBackground("hover"),
          },
          _selected: {
            ...coreBackground("selected"),
            ...coreText("selected"),
            _hover: {
              ...coreBackground("selected"),
              ...coreText("selected"),
            },
          },
        },
      },
    },
    size: {
      xs: {
        list: {
          height: 5,
          padding: "2px",
        },
        trigger: {
          paddingX: 2,
          paddingY: 0,
        },
      },
      sm: {
        list: {
          height: 6,
          padding: 0.5,
        },
        trigger: {
          paddingX: 2,
        },
      },
      md: {
        list: {
          height: 7,
          padding: 0.5,
        },
        trigger: {
          fontWeight: "bold",
          paddingX: 2,
        },
      },
      lg: {
        list: {
          height: 8,
          padding: "4px",
        },
        trigger: {
          fontWeight: "bold",
          paddingX: 3,
        },
      },
    },
  },
});
