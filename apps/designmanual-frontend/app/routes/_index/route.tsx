import { groq } from "@sanity/groq-store";
import { Box, Flex } from "@vygruppen/spor-react";
import { useEffect, useRef, useState } from "react";
import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router";

import {
  resolveAccordionGroq,
  resolveArticleHeaderGroq,
  resolveCardsGroq,
  resolveDividerGroq,
  resolveFileListGroq,
  resolveImageAndTextListGroq,
  resolveImageBlockGroq,
  resolveImageCardListGroq,
  resolveNonClickableBoxListGroq,
  resolveTextBlocksGroq,
} from "~/features/cms/sanity/query";
import { PortableText } from "~/features/portable-text/PortableText";
import { getClient } from "~/utils/sanity/client";

import { useStickymenu } from "../_base/content-menu/utils";
import { LeftSidebar } from "../_base/left-sidebar/LeftSidebar";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (process.env.VITE_ENVIRONMENT === "prod") return redirect("/spor");

  const draftMode =
    new URL(request.url).searchParams.get("sanity-preview-perspective") ===
    "drafts";

  const query = groq`*[_type == "section" && default == true] {
    _id,
    title,
    "slug": slug.current,
    "icon": icon.asset->url,
    "page": reference->{
      _id,
      title,
      "slug": slug.current,
      content[]{
        ...,
        ${resolveImageCardListGroq()},
        ${resolveImageBlockGroq()},
        ${resolveTextBlocksGroq()},
        ${resolveImageAndTextListGroq()},
        ${resolveArticleHeaderGroq()},
        ${resolveCardsGroq()},
        ${resolveNonClickableBoxListGroq()},
        ${resolveAccordionGroq()},
        ${resolveDividerGroq()},
        ${resolveFileListGroq()},
      }
    }
    }[0]`;
  const initialData = await getClient().fetch(
    query,
    {
      section: "",
      page: "",
    },
    { perspective: draftMode ? "previewDrafts" : "published" },
  );
  return { initialData };
};

export default function Index() {
  const { initialData } = useLoaderData<typeof loader>();
  const { asideRef, forceFixed, fixedRect } = useStickymenu();
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

  return (
    <Flex
      id="content"
      justifyContent="space-between"
      gap={8}
      marginX={{ base: "4", md: "8" }}
      overflow="visible"
      flexDirection={["column", null, null, "row"]}
    >
      {/* preserve layout flow when we switch to fixed */}
      {forceFixed && fixedRect && (
        <Box
          width={`${fixedRect.width}px`}
          height={`${fixedRect.height}px`}
          as="div"
        />
      )}

      <Box
        ref={asideRef}
        as="aside"
        marginTop={placementTop || TOP}
        position={forceFixed ? "fixed" : "sticky"}
        top="0"
        zIndex="docked"
        maxHeight={`calc(100vh - ${placementTop || TOP})`}
        overflowY="auto"
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
        <PortableText value={initialData?.page.content} />
      </Box>
    </Flex>
  );
}
