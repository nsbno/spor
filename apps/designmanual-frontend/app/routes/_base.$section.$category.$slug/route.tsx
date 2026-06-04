import { PortableTextBlock } from "@portabletext/react";
import { groq } from "@sanity/groq-store";
import { sidesporConfig } from "@vygruppen/sidespor-config";
import { LinkOutOutline18Icon } from "@vygruppen/spor-icon-react";
import {
  Badge,
  Box,
  Button,
  createSystem,
  Flex,
  Heading,
  SporProvider,
  Stack,
  Text,
  themes,
} from "@vygruppen/spor-react";
import { type ComponentProps, PropsWithChildren } from "react";
import {
  Link,
  type LoaderFunctionArgs,
  type MetaFunction,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { ArticleAlert } from "~/features/portable-text/components/ArticleAlert";
import { ArticleBadge } from "~/features/portable-text/components/ArticleBadge";
import { PortableText } from "~/features/portable-text/PortableText";
import { useHeaderOffset } from "~/root/layout/HeaderOffsetContext";
import { ComponentDocs } from "~/routes/_base.$section.$category.$slug/component-docs/ComponentDocs";
import { ArticleBadgeType } from "~/utils/initialSanityData.server";
import { getClient } from "~/utils/sanity/client";
import {
  blockContentToPlainText,
  isValidPreviewRequest,
  urlBuilder,
} from "~/utils/sanity/utils";
import { toTitleCase } from "~/utils/stringUtils";

import { RightSidebar } from "../_base/right-sidebar/RightSidebar";
import { ExamplesSection } from "./component-docs/ExampleSection";

type ResourceLink = {
  linkType: "figma" | "react" | "react-native";
  url: string;
};

export type CodeExample = {
  title: string;
  description?: string;
  layout: "simple" | "preview-only" | "code-only" | "advanced";
  reactCode: {
    code: string;
  };
};

type ComponentDocsComponent = ComponentProps<typeof ComponentDocs>["component"];

type ComponentSection = {
  _id: string;
  title: "guidelines" | "examples" | "code" | "other" | "codeExamples";
  customTitle?: string;
  content: unknown[];
  badges?: {
    badgeType: "new" | "updated" | "beta" | "deprecated";
    description?: string;
  }[];
  components?: ComponentDocsComponent[];
  styling: unknown[];
  codeExamples: CodeExample[];
};

export const extendedSystemConfigWithSidespor = createSystem(
  themes.VyDigital._config,
  sidesporConfig,
);

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  invariant(params.category, "Expected params.category");
  invariant(params.slug, "Expected params.slug");
  invariant(params.section, "Expected params.slug");
  const draftMode =
    new URL(request.url).searchParams.get("sanity-preview-perspective") ===
    "drafts";

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
    badges[] {
      badgeType, 
      description
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
      styling,
      components[] {
        _type == 'reference' => @->,
        _type != 'reference' => @,
      },
      codeExamples[]{
        title,
        description,
        layout,
        reactCode,
      }
    }
  }`;
  const queryParameters = {
    section: params.section,
    categorySlug: params.category,
    articleSlug: params.slug,
  };
  const isPreview = isValidPreviewRequest(request);
  const initialData = await getClient().fetch(query, queryParameters, {
    perspective: draftMode ? "previewDrafts" : "published",
    stega: draftMode,
  });

  if (!initialData || initialData.length === 0) {
    throw new Response("Not Found", { status: 404 });
  }

  return {
    initialData,
    isPreview,
    query: isPreview ? query : null,
    queryParams: isPreview ? queryParameters : null,
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
      article.content?.find(
        (block: PortableTextBlock) => block._type === "introduction",
      )?.content,
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
    meta.push(
      {
        name: "og:image",
        content: urlBuilder.image(article.mainImage).width(1200).url(),
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: urlBuilder.image(article.mainImage).width(1200).url(),
      },
    );
  }
  return meta;
};

export default function ArticlePage() {
  const { initialData, isPreview } = useLoaderData<typeof loader>();
  const article = initialData[0];
  const headerOffset = useHeaderOffset();

  if (!article) {
    return null;
  }

  return (
    <Flex gap={5} justifyContent="space-between">
      <Box flex={1} minWidth={0}>
        <Flex marginBottom={1.5} gap={1}>
          {article?.category?.title && (
            <Badge>{article?.category?.title}</Badge>
          )}
          {article.badges?.map((badge: ArticleBadgeType) => (
            <ArticleBadge key={badge.badgeType} badgeType={badge.badgeType} />
          ))}
          {isPreview && <Badge colorPalette="yellow">Preview</Badge>}
        </Flex>
        <Flex direction="column" gap={5}>
          <Flex gap={3} direction="column">
            <Heading as="h1" variant="xl-display" autoId>
              {article.title}
            </Heading>
            {article.introduction && (
              <PortableText
                value={article.introduction}
                components={{
                  block: {
                    normal: ({ children }: PropsWithChildren) => (
                      <Text variant="md">{children}</Text>
                    ),
                  },
                }}
              />
            )}
            <Flex gap={1}>
              {article.resourceLinks?.map((link: ResourceLink) => (
                <Button
                  asChild
                  key={link.url}
                  variant="tertiary"
                  size="sm"
                  rightIcon={<LinkOutOutline18Icon />}
                >
                  <Link to={link.url} target="_blank">
                    {mapLinkToLabel(link.linkType)}
                  </Link>
                </Button>
              ))}
            </Flex>
          </Flex>
          <Stack direction="column" gap={2}>
            {article.badges?.map((badge: ArticleBadgeType, index: number) => (
              <ArticleAlert
                key={index}
                badgeType={badge.badgeType}
                description={badge.description}
              />
            ))}
          </Stack>

          <Box
            width="20%"
            display="none"
            position="fixed"
            overflow="auto"
            right={0}
            paddingLeft={1}
            paddingTop={3}
            top={`${headerOffset}px`}
            transition="all .3s linear"
            height={`calc(100vh - ${headerOffset}px)`}
            css={{
              [`@media screen and (min-width: 1110px)`]: {
                display: "block",
              },
            }}
          >
            <RightSidebar />
          </Box>

          {article.componentSections ? (
            <ComponentSections
              id={article._id}
              sections={article.componentSections}
              component={article.title}
            />
          ) : article.title.includes("Sidespor") ? (
            <SporProvider theme={extendedSystemConfigWithSidespor}>
              <PortableText value={article.content} />
            </SporProvider>
          ) : (
            <Box>
              <PortableText value={article.content} />
            </Box>
          )}
        </Flex>
      </Box>
      <Box
        width="20%"
        display="none"
        css={{
          [`@media screen and (min-width: 1110px)`]: {
            display: "block",
          },
        }}
      />
    </Flex>
  );
}

const mapLinkToLabel = (linkType: ResourceLink["linkType"]) => {
  switch (linkType) {
    case "figma": {
      return "Figma";
    }
    case "react": {
      return "GitHub";
    }
    case "react-native": {
      return "React Native";
    }
    default: {
      return "GitHub";
    }
  }
};

type ComponentSectionsProps = {
  component: string;
  sections: ComponentSection[];
  id: string;
};
const ComponentSections = ({ sections }: ComponentSectionsProps) => {
  return (
    <>
      {sections.map((section) => (
        <Box key={section._id}>
          <Heading
            as="h2"
            variant="lg"
            fontWeight="bold"
            marginBottom={1}
            autoId
          >
            {getCorrectTitle({
              title: section.title,
              customTitle: section.customTitle,
            })}
          </Heading>
          <Stack>
            {section.title === "codeExamples" && (
              <ExamplesSection
                key={section._id}
                codeExamples={section.codeExamples ?? []}
              />
            )}
            {section.components?.map((component) => (
              <ComponentDocs key={component.name} component={component} />
            ))}
            {section.content && <PortableText value={section.content} />}
          </Stack>
        </Box>
      ))}
    </>
  );
};

type GetCorrectTitleArguments = Pick<ComponentSection, "title" | "customTitle">;
const getCorrectTitle = ({ title, customTitle }: GetCorrectTitleArguments) => {
  switch (title) {
    case "examples": {
      return "Examples";
    }
    case "codeExamples": {
      return "Code examples";
    }
    case "guidelines": {
      return "Guidelines";
    }
    case "code": {
      return "Code";
    }
    case "other": {
      return toTitleCase(customTitle ?? "");
    }
    default: {
      return title;
    }
  }
};
