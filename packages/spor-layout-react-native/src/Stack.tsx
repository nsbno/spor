import { Theme } from "@vygruppen/spor-theme-react-native";
import React from "react";
import { Box, BoxProps } from "./Box";

type StackProps = BoxProps & {
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
      {React.Children.map(children, (child: any, index: number) =>
        React.cloneElement(child as any, {
          marginTop: index === 0 ? 0 : spacing,
        })
      )}
    </Box>
  );
};
