import { groq } from "@sanity/groq-store";
import { Box } from "@vygruppen/spor-react";
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // remove next line to publish identity section
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

  return (
    <Box
      width={[null, null, null, "container.md", "container.lg"]}
      marginX="auto"
    >
      <PortableText value={initialData?.page.content} />
    </Box>
  );
}
