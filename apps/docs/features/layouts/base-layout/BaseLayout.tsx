import { Box, Flex, useTheme } from "@chakra-ui/react";
import { SiteHeader } from "../../site-header/SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  console.log("theme", useTheme());
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <SiteHeader colorScheme="dark" />
      <Box flex="1">{children}</Box>
      {/* add <SiteFooter /> */}
    </Flex>
  );
};
