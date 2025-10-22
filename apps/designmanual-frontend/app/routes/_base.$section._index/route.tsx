import { groq } from "@sanity/groq-store";
import { useLiveQuery } from "@sanity/preview-kit";
import { Box } from "@vygruppen/spor-react";
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
  resolveNonClickableBoxListGroq,
  resolveTextBlocksGroq,
} from "~/features/cms/sanity/query";
import { PortableText } from "~/features/portable-text/PortableText";
import { getClient } from "~/utils/sanity/client";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  invariant(params.section, "Expected params.section");
  const draftId = new URL(request.url).searchParams.get("preview") ?? null;
  const draftMode =
    new URL(request.url).searchParams.get("sanity-preview-perspective") ===
    "draft";
  const query = groq`*[_id == $draftId || (_type == "section" && slug.current == $section)][0] {
    _id,
    title,
    "slug": slug.current,
    "page": reference->{
      _id,
      title,
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
  }`;

  const data = await getClient().fetch(
    query,
    {
      section: params.section,
      draftId,
    },
    { perspective: draftMode ? "previewDrafts" : "published" },
  );

  if (!data) {
    return { section: params.section, data: null };
  }
  return { section: params.section, data, draftId, query, draftMode };
};

export default function Index() {
  const {
    data: livedata,
    section,
    draftId,
    query = "",
    draftMode,
  } = useLoaderData<typeof loader>();

  const [data] = useLiveQuery(livedata, query, {
    params: {
      section,
      draftId,
    },
    enabled: draftMode,
  });

  console.log("previewData", data, draftMode);

  if (!data) {
    return null;
  }

  return (
    <Box backgroundColor="bg" flex="1">
      <PortableText value={data?.page.content} />
    </Box>
  );
}
