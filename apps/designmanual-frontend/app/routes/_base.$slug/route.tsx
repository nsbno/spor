import { groq } from "@sanity/groq-store";
import { Box } from "@vygruppen/spor-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { PortableText } from "~/features/portable-text/PortableText";
import { getClient } from "~/utils/sanity/client";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.slug, "Expected params.slug");
  const query = groq`*[_type == "section" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "page": reference->{
      _id,
      title,
      content
    }
  }`;

  const data = await getClient().fetch(query, {
    slug: params.slug,
  });

  if (!data) {
    return { slug: params.slug, data: null };
  }
  return { slug: params.slug, data };
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
