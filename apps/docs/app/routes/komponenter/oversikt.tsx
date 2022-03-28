import { PortableText } from "@portabletext/react";
import { Box, Card, Heading, SimpleGrid, Stack } from "@vygruppen/spor-react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { getClient } from "~/utils/sanity/client";

type ComponentsData = {
  _id: string;
  name: string;
  slug: string;
  content: any[];
  page?: { slug: string };
};

const componentsQuery = async () => {
  const query = `*[_type == "component"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    content,
    "page": *[_type == "article" && references(^._id)] { 
      "slug": slug.current 
    }[0]
  }`;
  const components = await getClient().fetch<ComponentsData[]>(query);

  if (!components || !components.length) {
    throw new Response("Not Found", { status: 404 });
  }
  return components;
};

type ArticleData = {
  _id: string;
  title: string;
  slug: string;
  content: any[];
};

const articleQuery = async () => {
  const query = `*[_type == "article" && slug.current == "oversikt"] {
    _id,
    title,
    content
  }[0]`;
  const article = await getClient().fetch<ArticleData>(query);

  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }
  return article;
};

type LoaderData = {
  components: ComponentsData[];
  article: ArticleData;
};

export const loader: LoaderFunction = async () => {
  const componentsPromise = componentsQuery();
  const articlePromise = articleQuery();
  const [components, article] = await Promise.all([
    componentsPromise,
    articlePromise,
  ]);
  return { components, article };
};

export default function ComponentsPage() {
  const { components, article } = useLoaderData<LoaderData>();
  return (
    <Box>
      <Stack spacing={2} mb={6}>
        <Heading as="h1" textStyle="xl-display">
          {article.title}
        </Heading>
        <PortableText value={article.content} />
      </Stack>
      <SimpleGrid columns={[1, 2, 3]} gap={3}>
        {components.map((component) => (
          <Card
            key={component._id}
            as={Link}
            to={
              component.page
                ? `../${component.page?.slug}#${component.slug}`
                : ""
            }
            variant="filled"
            colorScheme="green"
            p={3}
          >
            <Heading as="h2" textStyle="sm" fontWeight="bold">
              &lt;{component.name} /&gt;
            </Heading>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
