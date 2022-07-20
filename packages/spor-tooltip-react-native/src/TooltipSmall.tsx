import React from "react";
// import {
//   composeRestyleFunctions,
//   createVariant,
//   spacing,
//   SpacingProps,
//   useRestyle,
//   VariantProps,
// } from "@shopify/restyle";

import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Button } from "@vygruppen/spor-button-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import {
  CloseFill18Icon,
  CloseOutline18Icon,
} from "@vygruppen/spor-icon-react-native";
import { View } from "react-native";

// type Variant = VariantProps<Theme, "tooltipVariants", "variant">;
// const variant = createVariant({
//   themeKey: "tooltipVariants",
// });

// type RestyleProps = SpacingProps<Theme> & Variant;

type TooltipSmallProps = {
  size?: "sm" | "md";
  closeable?: boolean;
  children: string;
  arrowPosition: "top" | "bottom" | "left" | "right";
};

export const TooltipSmall = ({
  size = "sm",
  closeable = true,
  children,
  arrowPosition,
  ...rest
}: TooltipSmallProps) => {
  const maxWidth = 50;

  const arrowStyle = getArrowStyle(arrowPosition);
  return (
    <Box alignSelf={"center"}>
      <View style={arrowStyle} />
      <Box
        borderRadius="sm"
        maxWidth={maxWidth + "%"}
        // backgroundColor={"teal.500"}
        backgroundColor={"banana"}
        flexDirection="row"
        alignSelf={"center"}
        paddingVertical={"2xs"}
        paddingHorizontal={"xs"}
      >
        {/* <Text color={"white"}>{children}</Text> */}
        <Text>{children}</Text>
        {closeable && (
          <Box alignSelf={"flex-start"}>
            <Button
              variant="ghost"
              onPress={() => {}}
              leftIcon={<CloseFill18Icon />}
              marginLeft={"2xs"}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

function getArrowStyle(arrowPosition: "top" | "bottom" | "left" | "right") {
  return {
    // width: 0,
    // height: 0,
    // backgroundColor: "transparent",
    // borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 5.5,
    borderBottomWidth: 11.0,
    borderLeftWidth: 5.5,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",
    borderLeftColor: "transparent",
    alignSelf: "center",
  };
  const baseStyle = {
    width: 17,
    height: 17,
    borderRadius: 2,
    position: "relative",
    backgroundColor: "black",
    // backgroundColor: "#FAE053",
    transform: [
      {
        rotateZ: "45deg",
      },
    ],
  };

  switch (arrowPosition) {
    case "top":
      return {
        ...baseStyle,
        top: -8,
        left: "25%",
      };
    case "bottom":
      return {
        ...baseStyle,
        bottom: -60,
        left: "25%",
      };
    case "left":
      return {
        ...baseStyle,
        top: "25%",
        left: -6,
      };
    case "right":
      return {
        ...baseStyle,
        top: "25%",
        right: -6,
      };
    default:
      return {};
  }
}
