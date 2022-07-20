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
  return (
    <Box
      borderRadius="sm"
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
        <Button
          variant="ghost"
          onPress={() => {}}
          leftIcon={<CloseFill18Icon />}
          marginLeft={"2xs"}
        />
      )}
    </Box>
  );
};
