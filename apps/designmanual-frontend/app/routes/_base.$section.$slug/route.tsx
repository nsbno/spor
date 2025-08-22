import { groq } from "@sanity/groq-store";
import { Box } from "@vygruppen/spor-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { PortableText } from "~/features/portable-text/PortableText";
import { getClient } from "~/utils/sanity/client";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.section, "Expected params.section");
  invariant(params.slug, "Expected params.slug");
  const query = groq`*[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    content
  }`;

  const data = await getClient().fetch(query, {
    section: params.section,
    slug: params.slug,
  });

  if (!data) {
    return { section: params.section, page: null };
  }
  return { section: params.section, page: data.page };
};

export default function Index() {
  const { page } = useLoaderData<typeof loader>();

  console.log("page", page);

  if (!page) {
    return null;
  }

  return (
    <Box backgroundColor="bg" flex="1">
      <PortableText value={page?.content} />
    </Box>
  );
}
