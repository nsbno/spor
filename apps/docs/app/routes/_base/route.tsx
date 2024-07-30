import { Box, Flex, Stack } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import { Footer } from "~/root/layout/Footer";
import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";
import TableOfContent from "~/routes/_base/table-of-contents/TableOfContents";
import { useHeadings } from "~/routes/_base/table-of-contents/useHeadings";
import { getClient } from "~/utils/sanity/client";

/* This loader isn't use here directly, but from within the left sidebar component tree. Don't remove it, even if it isn't used here.  */
export const loader = async () => {
  const menu = await getClient().fetch(
    `*[_type == "menu" && slug.current == "side-menu"][0] { menuItems }`,
  );
  return { menu };
};

export default function BaseLayout() {
  const { headings, contentRef } = useHeadings();

  return (
    <Flex flex={1}>
      <LeftSidebar />
      <Box
        as="main"
        id="content"
        display="flex"
        marginTop={3}
        paddingX={[3, null, 6, 4, 8]}
        marginX="auto"
        marginBottom={["3.75rem", null, "5rem", "5rem"]}
        maxWidth={[null, null, null, "container.lg", "container.xl"]}
        flex={1}
        ref={contentRef}
      >
        <Stack flexGrow={1} overflow={"hidden"} padding={1}>
          <Outlet />
          <Footer />
        </Stack>

        <TableOfContent headings={headings} />
      </Box>
    </Flex>
  );
}
