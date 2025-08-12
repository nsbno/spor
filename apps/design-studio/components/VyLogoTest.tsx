import {
  Badge,
  Box,
  Flex,
  Language,
  SporProvider,
} from "@vygruppen/spor-react";
import { VyLogo } from "./VyLogo";

export const VyLogoTest = () => {
  return (
    <SporProvider language={Language.English}>
      <Flex gap={1}>
        <VyLogo />
        <Box marginLeft={2}>
          <Badge colorScheme="yellow" size="sm">
            TEST
          </Badge>
        </Box>
      </Flex>
    </SporProvider>
  );
};
