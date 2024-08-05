import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { groq } from "@sanity/groq-store";
import {
  FigmaOutline24Icon,
  GithubOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Badge,
  Box,
  Brand,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@vygruppen/spor-react";
import invariant from "tiny-invariant";
import { PortableText } from "~/features/portable-text/PortableText";
import { ComponentDocs } from "~/routes/_base.$category.$slug/component-docs/ComponentDocs";
import { useBrand } from "~/utils/brand";
import { getClient } from "~/utils/sanity/client";
import {
  PreviewableLoaderData,
  usePreviewableData,
} from "~/utils/sanity/usePreviewableData";
import {
  blockContentToPlainText,
  isValidPreviewRequest,
  urlBuilder,
} from "~/utils/sanity/utils";
import { toTitleCase } from "~/utils/stringUtils";

type ResourceLink = {
  linkType: "figma" | "react" | "react-native" | "elm";
  url: string;
};
type ComponentSection = {
  _id: string;
  title: "guidelines" | "examples" | "code" | "other";
  customTitle?: string;
  content: any[];
  components?: {
    _id: string;
    name: string;
    slug: string;
    props: any[];
    content: any[];
  }[];
};
type Data = {
  _id: string;
  title: string;
  introduction?: any[];
  slug: string;
  category: {
    title: string;
    slug: string;
  };
  resourceLinks?: ResourceLink[];
  mainImage?: any;
  content?: any[];
  componentSections?: ComponentSection[];
};
type LoaderData = PreviewableLoaderData<Data>;

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  invariant(params.category, "Expected params.category");
  invariant(params.slug, "Expected params.slug");

  const query = groq`*[_type == "article" && category->slug.current == $categorySlug && slug.current == $articleSlug] {
    _id,
    title,
    "slug": slug.current,
    introduction,
    mainImage,
    category->{
      title,
      "slug": slug.current
    },
    resourceLinks[linkType == "react" || linkType == "react-native" || linkType == "figma"],
    content[]{
      _type == 'reference' => @->,
      _type != 'reference' => @,
    },
    componentSections[] {
      _id,
      title,
      customTitle,
      content,
      components[] {
        _type == 'reference' => @->,
        _type != 'reference' => @,
      }
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

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [];
  }
  const [article] = data.initialData;
  const title = `${article.title} – ${article?.category?.title ?? "…"} – Spor`;
  const description = blockContentToPlainText(
    article.introduction ??
      article.content?.find((block) => block._type === "introduction")?.content,
  );
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (article.mainImage) {
    meta.push({
      name: "og:image",
      content: urlBuilder.image(article.mainImage).width(1200).url(),
    });
    meta.push({ name: "twitter:card", content: "summary_large_image" });
    meta.push({
      name: "twitter:image",
      content: urlBuilder.image(article.mainImage).width(1200).url(),
    });
  }
  return meta;
};

export default function ArticlePage() {
  const { data: article, isPreview } = usePreviewableData<Data>();
  const brand = useBrand();

  if (!article) {
    return null;
  }

  return (
    <>
      <Flex
        marginBottom={1}
        gap={1}
        justifyContent="space-between"
        alignContent={"stretch"}
      >
        <HStack>
          {article?.category?.title && (
            <Badge
              colorScheme={
                brand === Brand.CargoNet ? "light-yellow" : "light-green"
              }
            >
              {article?.category?.title}
            </Badge>
          )}
          {isPreview && <Badge colorScheme="yellow">Preview</Badge>}
        </HStack>
        <Flex wrap="wrap" gap={2} marginLeft={"auto"} justifyContent={"end"}>
          {article.resourceLinks?.map((link) => (
            <Button
              key={link.url}
              as="a"
              href={link.url}
              variant="tertiary"
              size="sm"
              leftIcon={mapLinkToIcon(link.linkType)}
            >
              {mapLinkToLabel(link.linkType)}
            </Button>
          ))}
        </Flex>
      </Flex>
      <Flex direction={"column"}>
        <Heading as="h1" variant="xl-display" marginBottom={2}>
          {article.title}
        </Heading>
        {article.introduction && (
          <Box marginBottom={3}>
            <PortableText
              value={article.introduction}
              components={{
                block: {
                  normal: ({ children }: any) => (
                    <Text variant="md">{children}</Text>
                  ),
                },
              }}
            />
          </Box>
        )}
        {article.componentSections ? (
          <ComponentSections
            id={article._id}
            sections={article.componentSections}
          />
        ) : (
          <Box>
            <PortableText value={article.content} />
          </Box>
        )}
      </Flex>
    </>
  );
}

const mapLinkToLabel = (linkType: ResourceLink["linkType"]) => {
  switch (linkType) {
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

const mapLinkToIcon = (linkType: ResourceLink["linkType"]) => {
  switch (linkType) {
    case "figma":
      return <FigmaOutline24Icon />;
    default:
      return <GithubOutline24Icon />;
  }
};

type ComponentSectionsProps = {
  sections: ComponentSection[];
  id: string;
};
const ComponentSections = ({ sections, id }: ComponentSectionsProps) => {
  return (
    <Tabs variant="accent" size="md" marginTop={4} isFitted isLazy key={id}>
      <TabList>
        {sections.map((section) => (
          <Tab key={section.title}>
            {getCorrectTitle({
              title: section.title,
              customTitle: section.customTitle,
            })}
          </Tab>
        ))}
      </TabList>
      <Divider marginY={4} />
      <TabPanels>
        {sections.map((section) => (
          <TabPanel key={section.customTitle || section.title}>
            <Heading as="h2" variant="lg" marginBottom={1}>
              {getCorrectTitle({
                title: section.title,
                customTitle: section.customTitle,
              })}
            </Heading>
            <Stack>
              {section.content && <PortableText value={section.content} />}
              {section.components?.map((component) => (
                <ComponentDocs key={component._id} component={component} />
              ))}
            </Stack>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

type GetCorrectTitleArgs = Pick<ComponentSection, "title" | "customTitle">;
const getCorrectTitle = ({ title, customTitle }: GetCorrectTitleArgs) => {
  switch (title) {
    case "examples":
      return "Examples";
    case "guidelines":
      return "Guidelines";
    case "code":
      return "Code";
    case "other":
      return toTitleCase(customTitle ?? "");
  }
};
