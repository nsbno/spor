import { groq } from "@sanity/groq-store";
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

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.section, "Expected params.section");
  const query = groq`*[_type == "section" && slug.current == $section][0] {
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

  const data = await getClient().fetch(query, {
    section: params.section,
  });

  if (!data) {
    return { section: params.section, data: null };
  }
  return { section: params.section, data };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  if (!data) {
    return null;
  }

  return (
    <Box backgroundColor="bg" flex="1">
      <PortableText value={data?.page.content} />
    </Box>
  );
}
