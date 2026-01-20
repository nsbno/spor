import { Box, Flex } from "@vygruppen/spor-react";
import { useEffect, useRef, useState } from "react";
import {
  type LoaderFunctionArgs,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router";

import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";
import { getClient } from "~/utils/sanity/client";

import { useStickymenu } from "../_base/content-menu/utils";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const draftMode =
    new URL(request.url).searchParams.get("sanity-preview-perspective") ===
    "drafts";
  const menu = await getClient().fetch(
    `*[_type == "menu" && slug.current == "side-menu"][0] { menuItems }`,
    {},
    { perspective: draftMode ? "previewDrafts" : "published" },
  );
  return { menu, slug };
};

export default function BaseLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const { asideRef, forceFixed, fixedRect } = useStickymenu();

  const TOP = "11.25rem";
  const [placementTop, setPlacementTop] = useState<string | null>(TOP);

  const MINIMUM_SCROLL_POS = 5;

  const scrollTriggers = useRef({
    onScrollToTop: () => {
      setPlacementTop(TOP);
    },
    onScrollAwayFromTop: () => {
      setPlacementTop("1px");
    },
  });

  const scrolledRef = useRef(false);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    const handle = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (!scrolledRef.current && y > MINIMUM_SCROLL_POS) {
        scrolledRef.current = true;
        scrollTriggers.current.onScrollAwayFromTop?.();
      } else if (scrolledRef.current && y <= MINIMUM_SCROLL_POS) {
        scrolledRef.current = false;
        scrollTriggers.current.onScrollToTop?.();
      }
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

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
      overflow="visible"
      flexDirection={["column", null, null, "row"]}
    >
      {forceFixed && fixedRect && (
        <Box
          width={`${fixedRect.width}px`}
          height={`${fixedRect.height}px`}
          alignSelf="flex-start"
          as="div"
        />
      )}

      <Box
        ref={asideRef}
        alignSelf="flex-start"
        position={forceFixed ? "fixed" : "sticky"}
        top={placementTop || TOP}
        zIndex={10}
        maxHeight={`calc(100vh - ${placementTop})`}
        overflowY="auto"
        as="aside"
        style={
          forceFixed && fixedRect
            ? { left: `${fixedRect.left}px`, width: `${fixedRect.width}px` }
            : undefined
        }
      >
        <LeftSidebar />
      </Box>

      <Box
        width={[null, null, null, "container.md", "container.lg"]}
        marginX="auto"
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
