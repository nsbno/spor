import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import { Footer } from "~/features/layouts/footer/Footer";
import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";
import TableOfContent from "~/routes/_base/table-of-contents/TableOfContents";
import { useHeadings } from "~/routes/_base/table-of-contents/useHeadings";
import { getClient } from "~/utils/sanity/client";

/* This loader isn't use here directly, but from within the left sidebar component tree. Don't remove it, even if it isn't used here.  */
export const loader = async () => {
  const menu = await getClient().fetch(
    `*[_type == "menu" && slug.current == "side-menu"][0] { menuItems }`
  );
  return { menu };
};

export default function BaseLayout() {
  const { headings, contentRef } = useHeadings();
  return (
    <>
      <Flex flex="1">
        <LeftSidebar />
        <Box
          as="main"
          id="content"
          flex="1"
          mt={6}
          mx={[3, 6, 10]}
          mb={["60px", "120px", "180px"]}
          maxWidth="924px"
          ref={contentRef}
        >
          <Outlet />
          <Footer />
        </Box>
        <TableOfContent headings={headings} />
      </Flex>
    </>
  );
}
