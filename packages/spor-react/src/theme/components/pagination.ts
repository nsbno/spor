import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { ghostBackground } from "../utils/ghost-utils";
import { surface } from "../utils/surface-utils";
import { baseText } from "../utils/base-utils";

const parts = anatomy("Pagination").parts(
  "listItem",
  "link",
  "activeButton",
  "disabled",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props: any) => ({
    activeButton: {
      fontWeight: "bold",
      ...commonStyles,
      ...ghostBackground("active", props),
      _hover: {
        ...ghostBackground("hover", props),
        borderRadius: 50,
        _disabled: {
          ...baseText("disabled", props),
        },
      },
      _active: {
        borderRadius: 50,
        ...ghostBackground("active", props),
      },
    },
    disabled: {
      ...commonStyles,
      cursor: "not-allowed",
      pointerEvents: "none",
      boxShadow: "none",
      ...baseText("disabled", props),
    },
    listItem: {
      display: "flex",
    },
    link: {
      ...commonStyles,
      ...ghostBackground("default", props),
      ...baseText("default", props),
      _hover: {
        ...ghostBackground("hover", props),
        borderRadius: 50,
        _disabled: {
          ...baseText("disabled", props),
        },
      },
      _active: {
        borderRadius: 50,
        ...ghostBackground("active", props),
      },
    },
  }),
});

const commonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 6,
  height: 6,
  backgroundImage: "none",
  borderRadius: 50,
  fontSize: "xs",
};

export default config;
