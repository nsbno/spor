import { Box, Flex } from "@vygruppen/spor-react";
import React from "react";
import TableOfContent from "~/features/table-of-contents/TableOfContents";
import { useHeadings } from "~/features/table-of-contents/useHeadings";
import { LeftSidebar } from "./left-sidebar/LeftSidebar";

type DocsLayoutProps = { children: React.ReactNode };
export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const { headings, contentRef } = useHeadings();
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
        ref={contentRef}
      >
        {children}
      </Box>
      <TableOfContent headings={headings} />
    </Flex>
  );
};
