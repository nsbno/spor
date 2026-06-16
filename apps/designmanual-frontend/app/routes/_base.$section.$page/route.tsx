import { groq } from "@sanity/groq-store";
import { Box, Flex } from "@vygruppen/spor-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import {
  resolveAccordionGroq,
  resolveArticleHeaderGroq,
  resolveCardsGroq,
  resolveDividerGroq,
  resolveFileListGroq,
  resolveImageAndTextListGroq,
  resolveImageBlockGroq,
  resolveImageCardListGroq,
  resolveLinkButtonGroq,
  resolveNonClickableBoxListGroq,
  resolveRichTableChartGroq,
  resolveTextBlocksGroq,
  resolveVideoPlayerGroq,
} from "~/features/cms/sanity/query";
import { PortableText } from "~/features/portable-text/PortableText";
import { useHeaderOffset } from "~/root/layout/HeaderOffsetContext";
import { getClient } from "~/utils/sanity/client";

import { RightSidebar } from "../_base/right-sidebar/RightSidebar";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  invariant(params.section, "Expected params.section");
  invariant(params.page, "Expected params.page");
  const draftId = new URL(request.url).searchParams.get("preview") ?? null;
  const draftMode =
    new URL(request.url).searchParams.get("sanity-preview-perspective") ===
    "drafts";

  const query = groq`*[_type == "page" && slug.current == $page][0] {
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
      ${resolveLinkButtonGroq()},
      ${resolveDividerGroq()},
      ${resolveFileListGroq()},
      ${resolveVideoPlayerGroq()},
      ${resolveRichTableChartGroq()},
    }
  }`;
  const data = await getClient().fetch(
    query,
    {
      section: params.section,
      page: params.page,
      draftId,
    },
    {
      perspective: draftMode ? "previewDrafts" : "published",
      stega: draftMode,
    },
  );

  if (!data) {
    return { section: params.section, data: null };
  }
  return { section: params.section, data, draftId, query };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  const headerOffset = useHeaderOffset();

  if (!data) {
    return null;
  }

  return (
    <Flex gap={5} justifyContent="space-between">
      <Box flex={1} minWidth={0}>
        <Flex as="main" flexDirection="column" gap={2}>
          <PortableText value={data?.content} />
        </Flex>
        <Box
          width="20%"
          display="none"
          position="fixed"
          overflow="auto"
          right={0}
          paddingLeft={1}
          paddingTop={3}
          top={`${headerOffset}px`}
          transition="all .3s linear"
          height={`calc(100vh - ${headerOffset}px)`}
          css={{
            [`@media screen and (min-width: 1110px)`]: {
              display: "block",
            },
          }}
        >
          <RightSidebar />
        </Box>
      </Box>
      <Box
        width="20%"
        display="none"
        css={{
          [`@media screen and (min-width: 1110px)`]: {
            display: "block",
          },
        }}
      />
    </Flex>
  );
}
