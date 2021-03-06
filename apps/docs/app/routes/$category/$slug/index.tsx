import { PortableText } from "@portabletext/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Badge,
  Box,
  Button,
  FigmaOutline24Icon,
  Flex,
  GithubOutline24Icon,
  Heading,
  HStack,
} from "@vygruppen/spor-react";
import invariant from "tiny-invariant";
import { getClient } from "~/utils/sanity/client";
import {
  PreviewableLoaderData,
  usePreviewableData,
} from "~/utils/sanity/usePreviewableData";
import { isValidPreviewRequest } from "~/utils/sanity/utils";

type ResourceLink = {
  linkType: "figma" | "react" | "react-native" | "elm";
  url: string;
};
type Data = {
  _id: string;
  title: string;
  slug: string;
  category: {
    title: string;
    slug: string;
  };
  resourceLinks?: ResourceLink[];
  content: any[];
};
type LoaderData = PreviewableLoaderData<Data>;

export const loader: LoaderFunction = async ({
  params,
  request,
}): Promise<LoaderData> => {
  invariant(params.category, "Expected params.category");
  invariant(params.slug, "Expected params.slug");

  const query = `*[_type == "article" && category->slug.current == $categorySlug && slug.current == $articleSlug] {
    _id,
    title,
    "slug": slug.current,
    category->{
      title,
      "slug": slug.current
    },
    resourceLinks,
    content[]{
      _type == 'reference' => @->,
      _type != 'reference' => @,
    }
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

export const meta: MetaFunction = ({ data }: { data: LoaderData }) => {
  if (!data) {
    return {};
  }
  const [article] = data.initialData;
  return {
    title: `${article.title} ??? ${article.category?.title ?? "???"} ??? Spor`,
  };
};

export default function ArticlePage() {
  const { data: article, isPreview } = usePreviewableData<Data>();
  return (
    <>
      <HStack mb={1} justifyContent="space-between">
        {article.category?.title && (
          <Badge colorScheme="green">{article.category?.title}</Badge>
        )}
        {isPreview && <Badge colorScheme="red">Preview</Badge>}
        <Flex flexWrap="wrap" gap={2}>
          {article.resourceLinks?.map((link) => (
            <Button
              key={link.url}
              as="a"
              href={link.url}
              variant="additional"
              size="sm"
              leftIcon={mapLinkToIcon(link)}
            >
              {mapLinkToLabel(link)}
            </Button>
          ))}
        </Flex>
      </HStack>
      <Box>
        <Heading as="h1" textStyle="xl-display" mb={2}>
          {article.title}
        </Heading>
        <Box>
          <PortableText value={article.content} />
        </Box>
      </Box>
    </>
  );
}

const mapLinkToLabel = (link: ResourceLink) => {
  switch (link.linkType) {
    case "figma":
      return "Figma";
    case "elm":
      return "Elm";
    case "react":
      return "React";
    case "react-native":
      return "React Native";
    default:
      return "GitHub";
  }
};

const mapLinkToIcon = (link: ResourceLink) => {
  switch (link.linkType) {
    case "figma":
      return <FigmaOutline24Icon />;
    default:
      return <GithubOutline24Icon />;
  }
};
