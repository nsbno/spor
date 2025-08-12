import {
  Badge,
  Box,
  Flex,
  Language,
  SporProvider,
} from "@vygruppen/spor-react";
import { VyLogo } from "./VyLogo";

export const VyLogoProd = () => {
  return (
    <SporProvider language={Language.English}>
      <Flex gap={1}>
        <VyLogo />
        <Box marginLeft={2}>
          <Badge colorScheme="dark-green" size="sm">
            PROD
          </Badge>
        </Box>
      </Flex>
    </SporProvider>
  );
};
