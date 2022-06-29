import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";


type ExpandableItemProps = {
    children: React.ReactNode,
};
export const ExpandableItem = ({
    children
}: ExpandableItemProps) => {
    return < Box ><Text>{children}</Text></Box>

}