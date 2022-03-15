import { PortableText } from "@portabletext/react";
import { Badge, Box, Heading, HStack } from "@vygruppen/spor-react";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";
import { getClient } from "~/utils/sanity/client";
import {
  PreviewableLoaderData,
  usePreviewableData,
} from "~/utils/sanity/usePreviewableData";
import { isValidPreviewRequest } from "~/utils/sanity/utils";

type Data = {
  _id: string;
  title: string;
  slug: string;
  category: {
    title: string;
    slug: string;
  };
  content: any[];
};
type LoaderData = PreviewableLoaderData<Data>;

export const loader: LoaderFunction = async ({
  params,
  request,
}): Promise<LoaderData> => {
  invariant(params.category, "Expected params.category");
  invariant(params.slug, "Expected params.article");

  const query = `*[_type == "article" && category->slug.current == $categorySlug && slug.current == $articleSlug] {
    _id,
    title,
    "slug": slug.current,
    category->{
      title,
      "slug": slug.current
    },
    content
  }`;
  const queryParams = {
    categorySlug: params.category,
    articleSlug: params.slug,
  };
  const isPreview = isValidPreviewRequest(request);
  const initialData = await getClient(isPreview).fetch<
    LoaderData["initialData"]
  >(query, queryParams);

  if (!initialData || !initialData.length) {
    throw new Response("Not Found", { status: 404 });
  }

  return {
    initialData,
    isPreview,
    query: isPreview ? query : null,
    queryParams: isPreview ? queryParams : null,
  };
};

export default function ArticlePage() {
  const { data: article, isPreview } = usePreviewableData<Data>();
  return (
    <DocsLayout>
      <HStack mb={1}>
        {article.category?.title && (
          <Badge colorScheme="green">{article.category?.title}</Badge>
        )}
        {isPreview && <Badge colorScheme="red">Preview</Badge>}
      </HStack>
      <Box>
        <Heading as="h1" textStyle="xl-display" mb={2}>
          {article.title}
        </Heading>
        <Box>
          <PortableText value={article.content} />
        </Box>
      </Box>
    </DocsLayout>
  );
}
