import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "@vygruppen/spor-typography-react-native";

type ExpandableItemProps = {
  url: string;
};
export const UrlItem = ({ url }: ExpandableItemProps) => {
  return (
    <TouchableOpacity
      style={{ marginTop: 12, marginLeft: 30 }}
      accessibilityRole="link"
      onPress={() => Linking.openURL(url)}
    >
      <Text variant="xs" textDecorationLine={"underline"}>
        Link til mer informasjon
      </Text>
    </TouchableOpacity>
  );
};
