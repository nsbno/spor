import { Box, Flex } from "@chakra-ui/react";
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

  const hasHeadings = headings.length > 1;
  return (
    <Flex sx={{ position: "relative" }}>
      <LeftSidebar />
      <Box
        as="main"
        id="content"
        display={"flex"}
        marginTop={3}
        paddingX={[3, null, 6, 4, 8]}
        marginX="auto"
        marginBottom={["3.75rem", null, "5rem", "5rem"]}
        sx={{ position: "relative" }}
        ref={contentRef}
      >
        <Flex
          direction={"column"}
          minWidth={[
            "100%",
            null,
            null,
            "47rem",
            hasHeadings ? "56rem" : "76rem",
          ]}
          maxWidth={["100%", null, null, "56rem"]}
        >
          <Outlet />
          <Footer />
        </Flex>
        <TableOfContent headings={headings} />
      </Box>
    </Flex>
  );
}
