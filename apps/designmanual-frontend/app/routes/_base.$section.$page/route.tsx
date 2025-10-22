import { groq } from "@sanity/groq-store";
import { useLiveQuery } from "@sanity/preview-kit";
import { Flex } from "@vygruppen/spor-react";
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
  resolveTextBlocksGroq,
} from "~/features/cms/sanity/query";
import { PortableText } from "~/features/portable-text/PortableText";
import { getClient } from "~/utils/sanity/client";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  invariant(params.section, "Expected params.section");
  invariant(params.page, "Expected params.page");
  const draftId = new URL(request.url).searchParams.get("preview") ?? null;

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
    }
  }`;
  const data = await getClient().fetch(
    query,
    {
      section: params.section,
      draftId,
    },
    { perspective: draftId ? "previewDrafts" : "published" },
  );

  if (!data) {
    return { section: params.section, data: null };
  }
  return { section: params.section, data, draftId, query };
};

export default function Index() {
  const {
    data: livedata,
    section,
    draftId,
    query = "",
  } = useLoaderData<typeof loader>();

  const [data] = useLiveQuery(livedata, query, {
    params: {
      section,
      draftId,
    },
    enabled: Boolean(draftId),
  });

  if (!data) {
    return null;
  }

  console.log("draftId", draftId);

  return (
    <Flex as="main" flex="1" flexDirection="column" gap={2}>
      <PortableText value={data?.content} />
    </Flex>
  );
}
