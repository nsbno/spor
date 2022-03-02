import { PortableText } from "@portabletext/react";
import { Badge, Box, Heading, Stack } from "@vygruppen/spor-react";
import { LoaderFunction, useLoaderData } from "remix";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";
import { getClient } from "~/utils/sanity/client.server";
import {
  filterDataToSingleItem,
  isValidPreviewRequest,
} from "~/utils/sanity/utils";

type LoaderData = {
  initialData: {
    _id: string;
    title: string;
    slug: string;
    category: {
      title: string;
      slug: string;
    };
    content: any[];
  }[];
  isPreview: boolean;
};
export const loader: LoaderFunction = async ({ params, request }) => {
  const initialData = await getClient().fetch<LoaderData["initialData"]>(
    `*[_type == "article" && category->slug.current == $categorySlug && slug.current == $articleSlug] {
      _id,
      title,
      "slug": slug.current,
      category->{
        title,
        "slug": slug.current
      },
      content
    }`,
    { categorySlug: params.category, articleSlug: params.slug }
  );
  const isPreview = isValidPreviewRequest(request);
  return { initialData, isPreview };
};

export default function ArticlePage() {
  const { initialData, isPreview } = useLoaderData<LoaderData>();
  const article = filterDataToSingleItem(initialData, isPreview);
  return (
    <DocsLayout>
      {article.category?.title && (
        <Badge colorScheme="green" mb={1}>
          {article.category?.title}
        </Badge>
      )}
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
