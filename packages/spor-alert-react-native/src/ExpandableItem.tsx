import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";

type ExpandableItemProps = {
  children: React.ReactNode;
};
export const ExpandableItem = ({ children }: ExpandableItemProps) => {
  return (
    <Box ml={5} pr={3}>
      <Text mt={1} variant="sm">
        {children}
      </Text>
    </Box>
  );
};
