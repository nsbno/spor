import { BoxProps } from "@shopify/restyle";
import React from "react";
import { Theme } from "../spor-theme-react-native";
import { Box } from "./Box";

type StackProps = BoxProps<Theme> & {
  spacing?: keyof Theme["spacing"];
  children: React.ReactNode;
};
/**
 * Adds consistent spacing between elements
 */
export const Stack = (props: StackProps) => {
  const { spacing = 2, children, ...rest } = props;
  return (
    <Box {...rest}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as any, {
          marginTop: index === 0 ? 0 : spacing,
        })
      )}
    </Box>
  );
};
