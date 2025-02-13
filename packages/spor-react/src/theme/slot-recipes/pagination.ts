import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreText } from "../utils/core-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { paginationAnatomy } from "./anatomy";

const listBaseStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "5",
  width: "5",
  fontSize: "xs",
  borderRadius: "xl",
  ...coreText("default"),
  _hover: {
    ...ghostBackground("hover"),
    _active: {
      ...ghostBackground("active"),
    },
  },
};
export const paginationSlotRecipe = defineSlotRecipe({
  slots: paginationAnatomy.keys(),
  className: "spor-pagination",
  base: {
    listItem: {
      ...listBaseStyle,
      cursor: "pointer",
      ...coreBackground("default"),
    },
    list: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      flexDirection: "row",
      listStyle: "none",
    },
    activeButton: {
      ...listBaseStyle,
      cursor: "default",
      fontWeight: "bold",
      ...coreBackground("active"),
    },
  },
});
