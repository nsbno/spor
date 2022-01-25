import { Flex, Box, Divider } from "@chakra-ui/react";

import { SiteFooter } from "../../site-footer/SiteFooter";
import { SiteHeader } from "../../site-header/SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <SiteHeader colorScheme="dark" />
      <Flex flex="1" flexDirection="column" alignItems="stretch">
        {children}
      </Flex>

      {/* add <SiteFooter /> */}
      <Divider />

      <Box p="4">
        <SiteFooter colorScheme="light" />
      </Box>
    </Flex>
  );
};
