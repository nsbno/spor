import { mode } from "@chakra-ui/theme-tools";

export const focusVisibleStyles = (props: any) => ({
  _focusVisible: {
    outlineWidth: "2px",
    outlineColor: mode("greenHaze", "azure")(props),
    outlineStyle: "solid",
    outlineOffset: "1px",
  },
});
