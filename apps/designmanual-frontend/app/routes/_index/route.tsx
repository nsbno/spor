import { groq } from "@sanity/groq-store";
import { Box, Flex } from "@vygruppen/spor-react";
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
import { isProd } from "~/utils/sanity/config";
import { isValidPreviewRequest } from "~/utils/sanity/utils";

import { LeftSidebar } from "../_base/left-sidebar/LeftSidebar";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (isProd()) return redirect("/spor");

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
  const initialData = await getClient(isPreview).fetch(query, {
    section: "",
    page: "",
  });
  return { initialData };
};

export default function Index() {
  const { initialData } = useLoaderData<typeof loader>();

  return (
    <Flex
      id="content"
      justifyContent="space-between"
      gap={8}
      marginX={{ base: "4", md: "8" }}
    >
      <LeftSidebar />

      <Box
        width={[null, null, null, "container.lg", "container.xl"]}
        marginX="auto"
      >
        <PortableText value={initialData?.page.content} />
      </Box>
    </Flex>
  );
}
