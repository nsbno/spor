import { Box, Flex } from "@vygruppen/spor-react";
import { useEffect } from "react";
import {
  type LoaderFunctionArgs,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router";

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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/spor", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <Flex
      id="content"
      justifyContent="space-between"
      gap={8}
      marginX={{ base: "4", md: "8" }}
    >
      <LeftSidebar />

      <Box
        width={[null, null, null, "container.lg", "container.xl"]}
        marginX="auto"
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
