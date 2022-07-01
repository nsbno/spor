import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { spacing } from "@vygruppen/spor-theme-react-native/src/foundations/spacing";


type ExpandableItemProps = {
    children: React.ReactNode,
};
export const ExpandableItem = ({
    children
}: ExpandableItemProps) => {
    return (< Box style={{ marginBottom: spacing.sm, marginLeft: spacing.sm }} >
        <Text>{children}</Text>
    </Box>)

}