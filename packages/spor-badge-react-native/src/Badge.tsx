import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";

type BadgeProps = {
  children: string;
};
export const Badge = (props: BadgeProps) => {
  return (
    <Box>
      <Text>Hi there</Text>
    </Box>
  );
};
