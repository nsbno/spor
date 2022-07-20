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

  const flexDirection = getFlexDirection(arrowPosition);
  const arrowStyle = getArrowStyle(arrowPosition);
  return (
    <Box alignSelf={"center"} flexDirection={flexDirection}>
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

function getFlexDirection(arrowPosition: "top" | "bottom" | "left" | "right") {
  switch (arrowPosition) {
    case "top":
      return "column";
    case "bottom":
      return "column-reverse";
    case "left":
      return "row";
    case "right":
      return "row-reverse";
    default:
      return "column";
  }
}

function getArrowStyle(arrowPosition: "top" | "bottom" | "left" | "right") {
  const baseStyle = {
    // width: 0,
    // height: 0,
    // backgroundColor: "transparent",
    // borderStyle: "solid",
    borderTopWidth: 0,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    alignSelf: "center",
  };

  switch (arrowPosition) {
    case "top":
      return {
        ...baseStyle,
        borderRightWidth: 4.5 * 4,
        borderBottomWidth: 9.0 * 4,
        borderLeftWidth: 4.5 * 4,
        borderBottomColor: "black",
      };
    case "bottom":
      return {
        ...baseStyle,
        borderRightWidth: 4.5 * 4,
        borderTopWidth: 9.0 * 4,
        borderLeftWidth: 4.5 * 4,
        borderTopColor: "black",
      };
    case "left":
      return {
        ...baseStyle,
        borderTopWidth: 4.5 * 4,
        borderBottomWidth: 4.5 * 4,
        borderRightWidth: 9.0 * 4,
        borderRightColor: "black",
      };
    case "right":
      return {
        ...baseStyle,
        borderTopWidth: 4.5 * 4,
        borderBottomWidth: 4.5 * 4,
        borderLeftWidth: 9.0 * 4,
        borderLeftColor: "black",
      };
    default:
      return {};
  }
}
