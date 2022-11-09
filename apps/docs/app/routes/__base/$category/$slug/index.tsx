import { PortableText } from "@portabletext/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Badge,
  Box,
  Button,
  Divider,
  FigmaOutline24Icon,
  Flex,
  GithubOutline24Icon,
  Heading,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@vygruppen/spor-react";
import invariant from "tiny-invariant";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { useUserPreferences } from "~/features/user-preferences/UserPreferencesContext";
import { getClient } from "~/utils/sanity/client";
import {
  PreviewableLoaderData,
  usePreviewableData,
} from "~/utils/sanity/usePreviewableData";
import {
  blockContentToPlainText,
  isValidPreviewRequest,
} from "~/utils/sanity/utils";
import { toTitleCase } from "~/utils/stringUtils";
import { getUserPreferencesSession } from "~/utils/userPreferences.server";

type ResourceLink = {
  linkType: "figma" | "react" | "react-native" | "elm";
  url: string;
};
type ComponentSection = {
  _id: string;
  title: "guidelines" | "react" | "react-native" | "components" | "other";
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
  content?: any[];
  componentSections?: ComponentSection[];
};
type LoaderData = PreviewableLoaderData<Data>;

export const loader: LoaderFunction = async ({
  params,
  request,
}): Promise<LoaderData> => {
  invariant(params.category, "Expected params.category");
  invariant(params.slug, "Expected params.slug");

  const userPreferencesSession = await getUserPreferencesSession(request);
  const userPreferences = userPreferencesSession.getUserPreferences();

  const query = `*[_type == "article" && category->slug.current == $categorySlug && slug.current == $articleSlug] {
    _id,
    title,
    "slug": slug.current,
    introduction,
    category->{
      title,
      "slug": slug.current
    },
    resourceLinks[linkType == $technologyPreference || linkType == "figma"],
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
    technologyPreference:
      userPreferences.userType === "developer"
        ? userPreferences.technology
        : "figma",
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
  const description =
    blockContentToPlainText(
      article.content?.find((block) => block._type === "introduction")?.content
    ) || undefined;
  return {
    title: `${article.title} – ${article?.category?.title ?? "…"} – Spor`,
    description,
    "og:description": description,
  };
};

export default function ArticlePage() {
  const { data: article, isPreview } = usePreviewableData<Data>();
  const { userPreferences } = useUserPreferences();

  if (!article) {
    return null;
  }

  const showNoImplementationWarning =
    userPreferences.userType === "developer" &&
    article?.category?.title === "Komponenter" &&
    article?.resourceLinks?.filter((link) => link.linkType !== "figma")
      .length === 0;
  return (
    <>
      <HStack mb={1} justifyContent="space-between">
        <HStack>
          {article?.category?.title && (
            <Badge colorScheme="green">{article?.category?.title}</Badge>
          )}
          {isPreview && <Badge colorScheme="yellow">Preview</Badge>}
          {showNoImplementationWarning && (
            <Badge colorScheme="red">
              Ikke tilgjengelig i {mapLinkToLabel(userPreferences.technology)}
            </Badge>
          )}
        </HStack>
        <Flex flexWrap="wrap" gap={2}>
          {article.resourceLinks?.map((link) => (
            <Button
              key={link.url}
              as="a"
              href={link.url}
              variant="additional"
              size="sm"
              leftIcon={mapLinkToIcon(link.linkType)}
            >
              {mapLinkToLabel(link.linkType)}
            </Button>
          ))}
        </Flex>
      </HStack>
      <Box>
        <Heading as="h1" textStyle="xl-display" mb={2}>
          {article.title}
        </Heading>
        {article.introduction && (
          <Box>
            <PortableText
              value={article.introduction}
              components={{
                block: {
                  normal: ({ children }) => (
                    <Text textStyle="md">{children}</Text>
                  ),
                },
              }}
            />
          </Box>
        )}
        {article.componentSections ? (
          <ComponentSections sections={article.componentSections} />
        ) : (
          <Box>
            <PortableText value={article.content} />
          </Box>
        )}
      </Box>
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
};
const ComponentSections = ({ sections }: ComponentSectionsProps) => {
  return (
    <Tabs colorScheme="green" variant="square" size="md" mt={4} isFitted>
      <TabList>
        {sections.map((section) => (
          <Tab key={section._id}>
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
          <TabPanel key={section._id}>
            <Heading as="h2" textStyle="lg" mb={1}>
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
    case "guidelines":
      return "Retningslinjer";
    case "react":
      return "React";
    case "react-native":
      return "React Native";
    case "components":
      return "Kode";
    case "other":
      return toTitleCase(customTitle ?? "");
  }
};
