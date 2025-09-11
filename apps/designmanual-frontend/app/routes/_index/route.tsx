import { groq } from "@sanity/groq-store";
import { Flex } from "@vygruppen/spor-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";

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
import { isValidPreviewRequest } from "~/utils/sanity/utils";

import { LeftSidebar } from "../_base/left-sidebar/LeftSidebar";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isPreview = isValidPreviewRequest(request);
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
  const initialData = await getClient(isPreview).fetch(query);
  return { initialData };
};

export default function Index() {
  const { initialData } = useLoaderData<typeof loader>();

  return (
    <Flex
      flex={1}
      as="main"
      id="content"
      maxWidth={[null, null, null, "container.lg", "container.xl"]}
      width={["100%", null, "container.lg", "container.xl"]}
      marginX="auto"
      marginTop={3}
      paddingX={[3, null, 6, 4, 8]}
      marginBottom={["3.75rem", null, "5rem", "5rem"]}
    >
      <LeftSidebar />
      <Flex
        flexDirection="column"
        flexGrow={1}
        padding={1}
        backgroundColor="bg"
      >
        <PortableText value={initialData?.page.content} />
      </Flex>
    </Flex>
  );
}
