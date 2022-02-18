import { Box, Flex } from "@vygruppen/spor-react";
import React from "react";
import { LeftSidebar } from "./left-sidebar/LeftSidebar";

type DocsLayoutProps = { children: React.ReactNode };
export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Flex flex="1">
      <LeftSidebar />
      <Box
        as="main"
        flex="1"
        mt={6}
        mx={[3, 6, 10]}
        mb={["60px", "120px", "180px"]}
        maxWidth="924px"
      >
        {children}
      </Box>
    </Flex>
  );
};
