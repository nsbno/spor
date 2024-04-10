import React from "react";
import { chakra, useStyleConfig } from "@chakra-ui/react";

export const StaticCard = ({ colorScheme, ...props }: any) => {
  const styles = useStyleConfig("StaticCard", { colorScheme });
  return <Box as={props.as} __css={styles} {...props} />;
};