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
  const arrowStyle = getArrowStyle(arrowPosition);
  return (
    <Box alignSelf={"center"}>
      <View style={arrowStyle} />
      <Box
        borderRadius="sm"
        maxWidth={"50%"}
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
  const baseStyle = {
    width: 17,
    height: 17,
    borderRadius: 2,
    position: "absolute",
    backgroundColor: "black",
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
        bottom: -8,
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
