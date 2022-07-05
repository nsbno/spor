import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";

type ExpandableItemProps = {
    children: React.ReactNode,
};
export const ExpandableItem = ({
    children
}: ExpandableItemProps) => {
    return <Box marginBottom="sm" marginLeft="md">{children}</Box>;
}
