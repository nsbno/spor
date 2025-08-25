import { groq } from "@sanity/groq-store";
import { Flex, Heading } from "@vygruppen/spor-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { PortableText } from "~/features/portable-text/PortableText";
import { getClient } from "~/utils/sanity/client";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.section, "Expected params.section");
  invariant(params.page, "Expected params.page");
  const query = groq`*[_type == "page" && slug.current == $page][0] {
    _id,
    title,
    "slug": slug.current,
    content
  }`;
  const data = await getClient().fetch(query, {
    section: params.section,
    page: params.page,
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
    <Flex as="main" flex="1" flexDirection="column" gap={2}>
      <Heading as="h1" variant="xxl" color={"text.secondary"}>
        {data?.title}
      </Heading>
      <PortableText value={data?.content} />
    </Flex>
  );
}
