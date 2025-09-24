import { Flex, Stack } from "@chakra-ui/react";
import { type LoaderFunctionArgs, Outlet } from "react-router";

import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";
import { getClient } from "~/utils/sanity/client";

/* This loader isn't use here directly, but from within the left sidebar component tree. Don't remove it, even if it isn't used here.  */
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const menu = await getClient().fetch(
    `*[_type == "menu" && slug.current == "side-menu"][0] { menuItems }`,
  );
  return { menu, slug };
};

export default function BaseLayout() {
  return (
    <Flex
      flex={1}
      id="content"
      maxWidth={[null, null, null, "container.lg", "container.xl"]}
      width={["100%", null, "container.lg", "container.xl"]}
      marginX="auto"
      marginTop={4}
      paddingX={[3, null, 6, 4, 8]}
      marginBottom={["3.75rem", null, "5rem", "5rem"]}
      alignItems={"flex-start"}
      gap={6}
    >
      <LeftSidebar />

      <Stack flexGrow={1} overflow={"hidden"} padding={1}>
        <Outlet />
      </Stack>
    </Flex>
  );
}
