import { Stack } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react";
import React from "react";

type LineTextProps = {
  title: string;
  children: string;
};
export const LineTagText = ({ title, children }: LineTextProps) => (
  <Stack flexDirection="row" spacing={1}>
    <Text fontWeight="bold" color="darkGrey">
      {title}
    </Text>
    {children && <Text color="darkGrey">{children}</Text>}
  </Stack>
);
