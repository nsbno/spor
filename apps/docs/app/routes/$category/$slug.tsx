import { PortableText } from "@portabletext/react";
import { Badge, Box, Heading, Stack } from "@vygruppen/spor-react";
import { Fragment } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";
import { getClient } from "~/utils/sanity/client.server";

export const loader: LoaderFunction = async ({ params }) => {
  const initialData = await getClient().fetch(
    `*[_type == "article" && category->slug.current == $categorySlug && slug.current == $articleSlug] {
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
  return { initialData };
};

export default function ArticlePage() {
  const { initialData } = useLoaderData();
  return (
    <DocsLayout>
      {initialData?.map((data: any) => (
        <Fragment key={data._id}>
          {data.category?.title && (
            <Badge colorScheme="green" mb={1}>
              {data.category?.title}
            </Badge>
          )}
          <Box>
            <Heading as="h1" textStyle="xl-display" mb={2}>
              {data.title}
            </Heading>
            <Stack spacing={6}>
              <PortableText value={data.content} />
            </Stack>
          </Box>
        </Fragment>
      ))}
    </DocsLayout>
  );
}
