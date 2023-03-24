import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("InfoSelect").parts(
  "container",
  "label",
  "button",
  "arrowIcon"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {},
    label: {
      position: "relative",
    },
    button: {
      appearance: "none",
      borderTopRadius: "sm",
      borderBottomRadius: props.isOpen ? 0 : "sm",
      paddingY: 1.5,
      paddingX: 3,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: getBoxShadowString({
        borderColor: mode(
          colors.blackAlpha[400],
          colors.whiteAlpha[400]
        )(props),
      }),
      _hover: {
        boxShadow: getBoxShadowString({
          borderColor: "darkGrey",
          borderWidth: 2,
        }),
      },
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
          outline: "none",
        },
        notFocus: {
          boxShadow: getBoxShadowString({ borderColor: "darkGrey" }),
        },
      }),
      _disabled: {
        boxShadow: getBoxShadowString({ borderColor: "platinum" }),
        _hover: { boxShadow: getBoxShadowString({ borderColor: "platinum" }) },
        _focus: { boxShadow: getBoxShadowString({ borderColor: "platinum" }) },
      },
      _invalid: {
        boxShadow: getBoxShadowString({
          borderColor: "brightRed",
          borderWidth: 2,
        }),
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "darkGrey",
            borderWidth: 2,
          }),
        },
        ...focusVisible({
          focus: {
            boxShadow: getBoxShadowString({
              borderColor: "greenHaze",
              borderWidth: 2,
            }),
          },
          notFocus: {
            boxShadow: getBoxShadowString({
              borderColor: "brightRed",
              borderWidth: 2,
            }),
          },
        }),
      },
    },
    arrowIcon: {},
  }),
});
export default config;
