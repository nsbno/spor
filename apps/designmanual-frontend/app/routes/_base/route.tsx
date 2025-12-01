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

  // runtime fallback: if an ancestor prevents `position: sticky`, switch to fixed
  const asideRef = useRef<HTMLDivElement | null>(null);
  const [forceFixed, setForceFixed] = useState(false);
  const [fixedRect, setFixedRect] = useState<{
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const TOP = "11.25rem";
  const [placementTop, setPlacementTop] = useState<string | null>(TOP);

  const MINIMUM_SCROLL_POS = 5;

  const scrollTriggers = useRef({
    onScrollToTop: () => {
      setPlacementTop(TOP);
    },
    onScrollAwayFromTop: () => {
      setPlacementTop("0");
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
    const element = asideRef.current;
    if (!element || globalThis.window === undefined) return;

    const check = () => {
      let ancestor: HTMLElement | null = element.parentElement;
      let broken = false;
      while (ancestor && ancestor !== document.documentElement) {
        const cs = getComputedStyle(ancestor);
        if (
          /(hidden|auto|scroll)/.test(
            `${cs.overflow} ${cs.overflowX} ${cs.overflowY}`,
          )
        ) {
          broken = true;
          break;
        }
        if (
          cs.transform !== "none" ||
          cs.perspective !== "none" ||
          (cs.willChange &&
            cs.willChange !== "auto" &&
            cs.willChange.includes("transform"))
        ) {
          broken = true;
          break;
        }
        ancestor = ancestor.parentElement;
      }

      if (broken) {
        const r = element.getBoundingClientRect();
        setFixedRect({
          left: Math.round(r.left),
          width: Math.round(r.width),
          height: Math.round(r.height),
        });
        setForceFixed(true);
        setPlacementTop(TOP);
      } else {
        setForceFixed(false);
        setFixedRect(null);
        setPlacementTop(TOP);
      }
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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
          aria-hidden
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
