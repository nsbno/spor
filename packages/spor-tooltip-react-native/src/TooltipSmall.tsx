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
  const flexDirection = getFlexDirection(arrowPosition);
  const arrowStyle = getTriangleStyle(arrowPosition);
  return (
    <Box alignSelf={"center"} flexDirection={flexDirection}>
      <View style={arrowStyle} />
      <Box
        borderRadius="sm"
        maxWidth={250}
        minWidth={100}
        // backgroundColor={"teal.500"}
        backgroundColor={"seaMist"}
        flexDirection="row"
        paddingVertical={"2xs"}
        paddingHorizontal={"xs"}
      >
        <Box flexGrow={1}>
          {/* <Text color={"white"}>{children}</Text> */}
          <Text>{children}</Text>
        </Box>
        {closeable && (
          <Box
            marginLeft={"2xs"}
            alignSelf="flex-start"
            justifyContent={"flex-end"}
          >
            <Button
              variant="ghost"
              onPress={() => {}}
              leftIcon={<CloseFill18Icon />}
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

function getTriangleStyle(arrowPosition: "top" | "bottom" | "left" | "right") {
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
        borderRightWidth: 11 * 1,
        borderBottomWidth: 7.0 * 1,
        borderLeftWidth: 11 * 1,
        borderBottomColor: "#CCEAE4",
      };
    case "bottom":
      return {
        ...baseStyle,
        borderRightWidth: 11 * 1,
        borderTopWidth: 7 * 1,
        borderLeftWidth: 11 * 1,
        borderTopColor: "#CCEAE4",
      };
    case "left":
      return {
        ...baseStyle,
        borderTopWidth: 11 * 1,
        borderBottomWidth: 11 * 1,
        borderRightWidth: 7 * 1,
        borderRightColor: "#CCEAE4",
      };
    case "right":
      return {
        ...baseStyle,
        borderTopWidth: 11 * 1,
        borderBottomWidth: 11 * 1,
        borderLeftWidth: 7 * 1,
        borderLeftColor: "#CCEAE4",
      };
    default:
      return {};
  }
}
