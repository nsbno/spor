import { PortableText } from "@portabletext/react";
import { Box, Card, Heading, Image, SimpleGrid } from "@vygruppen/spor-react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { getClient } from "~/utils/sanity/client";
import { urlBuilder } from "~/utils/sanity/utils";

type ComponentData = {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  content: any[];
};

const componentsQuery = async () => {
  const query = `*[_type == "article" && category->slug.current == "komponenter" && slug.current != "oversikt"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    content,
  }`;
  const componentArticles = await getClient().fetch<ComponentData[]>(query);

  if (!componentArticles || !componentArticles.length) {
    throw new Response("Not Found", { status: 404 });
  }
  return componentArticles;
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
  components: ComponentData[];
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
      <Heading as="h1" textStyle="xl-display" mb={2}>
        {article.title}
      </Heading>
      <PortableText value={article.content} />
      <SimpleGrid columns={[1, 2, 3]} gap={3} mt={6}>
        {components.map((component) => (
          <Card
            key={component._id}
            as={Link}
            to={`../${component.slug}`}
            variant="elevated"
          >
            {component.mainImage ? (
              <Image
                src={urlBuilder.image(component.mainImage).width(300).url()}
                alt={component.title}
                backgroundColor="alias.mint"
                height="10em"
                objectFit="cover"
                objectPosition="center center"
              />
            ) : (
              <Box height="10em" backgroundColor="alias.mint" />
            )}
            <Heading as="h2" textStyle="sm" fontWeight="bold" p={3}>
              {component.title}
            </Heading>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
