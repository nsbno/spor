import { PortableText } from "@portabletext/react";
import { Badge, Box, Heading, HStack, Stack } from "@vygruppen/spor-react";
import { LoaderFunction } from "remix";
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
    categorySlug: params.category as string,
    articleSlug: params.slug as string,
  };
  const isPreview = isValidPreviewRequest(request);
  const initialData = await getClient(isPreview).fetch<
    LoaderData["initialData"]
  >(query, queryParams);
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
        <Stack spacing={6}>
          <PortableText value={article.content} />
        </Stack>
      </Box>
    </DocsLayout>
  );
}
