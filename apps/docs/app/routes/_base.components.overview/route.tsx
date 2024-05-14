import { Link, useLoaderData } from "@remix-run/react";
import {
  Box,
  PressableCard,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@vygruppen/spor-react";
import { PortableText } from "~/features/portable-text/PortableText";
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
  const query = `*[
      _type == "article" && 
      category->slug.current == "components" && 
      slug.current != "overview"
    ] | order(title asc) {
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
  const query = `*[_type == "article" && slug.current == "overview"] {
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

export const loader = async () => {
  const componentsPromise = componentsQuery();
  const articlePromise = articleQuery();
  const [components, article] = await Promise.all([
    componentsPromise,
    articlePromise,
  ]);
  return { components, article };
};

export default function ComponentsPage() {
  const { components, article } = useLoaderData<typeof loader>();
  const backgroundColor = useColorModeValue(
    "bg.tertiary.light",
    "bg.tertiary.dark",
  );
  return (
    <Box>
      <Heading as="h1" variant="xl-display" marginBottom={2}>
        {article.title}
      </Heading>
      <PortableText value={article.content} />
      <SimpleGrid columns={[1, 2, 3]} gap={3} marginTop={6}>
        {components.map((component) => (
          <PressableCard
            key={component._id}
            as={Link}
            to={`/components/${component.slug}`}
            variant="floating"
          >
            {component.mainImage ? (
              <Image
                src={urlBuilder.image(component.mainImage).width(300).url()}
                alt={component.title}
                backgroundColor={backgroundColor}
                padding="1em"
                width="100%"
                height="10em"
                objectFit="cover"
                objectPosition="center center"
              />
            ) : (
              <Box height="10em" backgroundColor={backgroundColor} />
            )}
            <Heading as="h2" variant="sm" fontWeight="bold" padding={3}>
              {component.title}
            </Heading>
          </PressableCard>
        ))}
      </SimpleGrid>
    </Box>
  );
}
