import { PortableText } from "@portabletext/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Badge,
  Box,
  Button,
  EditOutline30Icon,
  FigmaOutline24Icon,
  FigmaOutline30Icon,
  Flex,
  GithubOutline24Icon,
  GithubOutline30Icon,
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
  invariant(params.slug, "Expected params.slug");

  const query = `*[_type == "article" && category->slug.current == $categorySlug && slug.current == $articleSlug] {
    _id,
    title,
    "slug": slug.current,
    category->{
      title,
      "slug": slug.current
    },
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
    title: `${article.title} – ${article.category?.title ?? "…"} – Spor`,
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
          <Button as="a" href="https://www.figma.com/file/Tmr2URVX2vNkyRLqKhNRQA/Vy_komponentbibliotek?node-id=607%3A0" variant="additional" size="sm" leftIcon={<FigmaOutline24Icon />}>
           Figma
          </Button>
          <Button as="a" href="https://github.com/nsbno/spor" variant="additional" size="sm" leftIcon={<GithubOutline24Icon />}>
            Github
          </Button>
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
