/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from "@chakra-ui/react";
import {
  PortableText as SanityPortableText,
  PortableTextReactComponents,
} from "@portabletext/react";
import {
  CheckmarkFill30Icon,
  ErrorOutline30Icon,
  FavouriteOutline30Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Separator,
  SimpleGrid,
  StaticCard,
  Text,
  TextLink,
} from "@vygruppen/spor-react";
import deepmerge from "deepmerge";
import React from "react";
import { Link } from "react-router";

import { urlBuilder } from "~/utils/sanity/utils";

import { ComponentDocs } from "../../routes/_base.$category.$slug/component-docs/ComponentDocs";
import { CodeBlock } from "./code-block/CodeBlock";
import { ImageWithCaption } from "./ImageWithCaption";
import { InteractiveCode } from "./interactive-code/InteractiveCode";
import { LinkableHeading } from "./LinkableHeading";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    code: ({ children }) => <Code>{children}</Code>,
    link: ({ value, children }) => {
      const isInternal = value.href.startsWith("/");
      if (isInternal) {
        return (
          <TextLink variant="primary" as={Link} href={value.href}>
            {children}
          </TextLink>
        );
      }
      return (
        <TextLink variant="primary" href={value.href}>
          {children}
        </TextLink>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <LinkableHeading
        as="h2"
        variant="lg"
        fontWeight="bold"
        marginTop={6}
        marginBottom={2}
      >
        {children}
      </LinkableHeading>
    ),
    h3: ({ children }) => (
      <LinkableHeading
        as="h3"
        variant="md"
        fontWeight="bold"
        marginTop={6}
        marginBottom={1}
      >
        {children}
      </LinkableHeading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" variant="sm" fontWeight="bold" marginTop={4}>
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading as="h5" variant="xs" fontWeight="bold" marginTop={4}>
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading as="h6" variant="xs" marginTop={2}>
        {children}
      </Heading>
    ),
    normal: ({ children }) => {
      const arrayChildren = React.Children.toArray(children);
      if (arrayChildren.length === 0 || arrayChildren.join("") === "") {
        return null;
      }
      return (
        <Text
          variant="sm"
          css={{
            "& + &": {
              marginTop: 3,
            },
            "figure + &": {
              marginTop: 6,
            },
          }}
        >
          {children}
        </Text>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <List as="ul" paddingLeft={3} marginTop={0} marginBottom={3}>
        {children}
      </List>
    ),
    number: ({ children }) => (
      <List as="ol" paddingLeft={3} marginTop={0} marginBottom={3}>
        {children}
      </List>
    ),
  },
  listItem: ({ children }) => (
    <ListItem marginTop={0.5} textStyle="sm">
      {children}
    </ListItem>
  ),
  types: {
    buttonLink: ({ value }) => {
      const isInternal = value.url.startsWith("/");
      const linkProps = isInternal
        ? ({ as: Link, to: value.url } as ButtonProps)
        : ({ as: "a", href: value.url } as ButtonProps);
      return (
        <Box marginTop={3}>
          <Button variant={value.variant} size={value.size} {...linkProps}>
            {value.text}
          </Button>
        </Box>
      );
    },
    divider: () => <Separator height="1px" marginY={8} />,
    grid: ({ value }) => (
      <SimpleGrid
        columns={[1, 1, 2, value.maxNumberOfColumns]}
        gap={6}
        marginTop={6}
      >
        {value.content?.map((item: any) => (
          <PortableText value={item} key={item._key} />
        ))}
      </SimpleGrid>
    ),
    gridCell: ({ value }) => {
      const alignmentMap = {
        top: "flex-start",
        center: "center",
        bottom: "flex-end",
      };
      const alignItems =
        alignmentMap[value.verticalAlignment as keyof typeof alignmentMap] ??
        "flex-start";
      return (
        <Flex justifyContent="center" alignItems={alignItems}>
          <Box css={{ "& > :first-of-type": { marginTop: 0 } }}>
            <PortableText value={value.content} />
          </Box>
        </Flex>
      );
    },
    imageWithCaption: ({ value }) => {
      const dimensions = value.image.asset?._ref.split("-")[2];
      const aspectRatio = dimensions.split("x").join(" / ");

      return (
        <ImageWithCaption
          src={urlBuilder
            .image(value.image)
            .width(924)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt}
          alignment={value.alignment}
          caption={value.caption}
          aspectRatio={aspectRatio}
        />
      );
    },
    image: ({ value }) => {
      const dimensions = value.image.asset?._ref.split("-")[2];
      const aspectRatio = dimensions.split("x").join(" / ");
      return (
        <Image
          src={urlBuilder
            .image(value.image)
            .width(924)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt}
          marginX="auto"
          marginTop={6}
          aspectRatio={aspectRatio}
        />
      );
    },
    staticCodeBlock: ({ value }) => {
      return (
        <Box marginBottom={3}>
          <CodeBlock
            marginTop={6}
            language={value.code.language}
            code={value.code.code}
          />
          {value.caption && (
            <Text variant="xs" textAlign="center" marginTop={1}>
              {value.caption}
            </Text>
          )}
        </Box>
      );
    },
    codeExample: ({ value }) => {
      const code = value.reactCode.code;

      if (value.layout === "code-only") {
        return <CodeBlock marginY={3} language="tsx" code={code} />;
      }

      return (
        <Box paddingBottom={3}>
          <InteractiveCode
            layout={value.layout}
            maxWidth={`calc(100vw - var(--spor-space-6))`}
            code={code}
          />
        </Box>
      );
    },
    component: ({ value }) => {
      return (
        <Box marginTop={6}>
          <ComponentDocs component={value} />
        </Box>
      );
    },
    imports: ({ value }) => {
      if (!value.reactImport) {
        return null;
      }
      return <CodeBlock code={value.reactImport} marginTop={3} />;
    },
    introduction: ({ value }) => (
      <Box marginBottom={4}>
        <PortableText
          value={value.introduction}
          components={{
            block: {
              normal: ({ children }: any) => (
                <Text variant="md">{children}</Text>
              ),
            },
          }}
        />
      </Box>
    ),
    tipsPanel: ({ value }) => {
      return (
        <Box
          as="article"
          backgroundColor="bg.tertiary"
          color="text"
          marginTop={3}
          padding={4}
          borderRadius="md"
        >
          <Flex gap={1} alignItems="end">
            <FavouriteOutline30Icon />
            <Heading as="h3" variant="sm" fontWeight="bold">
              {value.title}
            </Heading>
          </Flex>
          <Box css={{ " > p:first-of-type": { mt: 1 } }}>
            <PortableText value={value.content} />
          </Box>
        </Box>
      );
    },
    bestPracticePanel: ({ value }) => (
      <SimpleGrid
        columns={[1, 2]}
        as="article"
        gap={[2, null, 4]}
        marginTop={4}
      >
        {value.examples.map((example: any) => {
          const getIcon = (weight: string) => {
            if (weight === "positive") {
              return (
                <CheckmarkFill30Icon
                  color="alert.success.icon"
                  boxSize={[4, null, 5]}
                />
              );
            }
            if (weight === "negative") {
              return (
                <ErrorOutline30Icon
                  color="alert.error.icon"
                  boxSize={[4, null, 5]}
                />
              );
            }
            return null;
          };

          return (
            <StaticCard
              key={example._key}
              colorPalette={getColorPalette(example.weight)}
              padding={[2, null, 4]}
            >
              <Flex gap={2} alignItems="center" marginBottom={2}>
                {getIcon(example.weight)}
                <Heading as="h3" variant="md" fontWeight="bold" flex={1}>
                  {getHeading(example.weight)}
                </Heading>
              </Flex>

              <Box
                css={{ "> :last-child": { marginBottom: 0 } }}
                marginBottom={2}
              >
                <PortableText value={example.content} />
              </Box>

              {example.image && (
                <Box>
                  <Image
                    src={urlBuilder
                      .image(example.image)
                      .width(600)
                      .format("webp")
                      .url()}
                    alt={getAltText(example.weight)}
                    width="100%"
                    aspectRatio="16 / 9"
                    objectFit="cover"
                    objectPosition="center"
                    borderRadius="md"
                    overflow="hidden"
                  />
                </Box>
              )}
            </StaticCard>
          );
        })}
      </SimpleGrid>
    ),
  },
};

const getColorPalette = (weight: string) =>
  ({
    positive: "green",
    negative: "red",
    neutral: "grey",
  })[weight] || "grey";

const getHeading = (weight: string) =>
  ({
    positive: "Do",
    negative: "Don’t",
    neutral: null,
  })[weight] || null;

const getAltText = (weight: string) =>
  `Example of what ${weight === "negative" ? "not " : ""}to do`;

export const PortableText = ({
  value,
  components: componentsOverrides = {},
}: {
  value: any;
  components?: any;
}) => {
  return (
    <SanityPortableText
      value={value}
      components={deepmerge(components, componentsOverrides)}
    />
  );
};
