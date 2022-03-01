import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  PortableText,
  PortableTextComponentsProvider as SanityPortableTextComponentsProvider,
  PortableTextReactComponents,
} from "@portabletext/react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import React from "react";
import { Link as InternalLink } from "remix";
import { urlBuilder } from "~/utils/sanity/imageUtils";
import { LinkableHeading } from "../linkable-heading/LinkableHeading";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => {
      const isExternal = value.href.startsWith("http");
      if (isExternal) {
        return (
          <Link variant="primary" href={value.href}>
            {children}
          </Link>
        );
      }

      return (
        <Link variant="primary" as={InternalLink} to={value.href}>
          {children}
        </Link>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <LinkableHeading as="h2" textStyle="xl-display">
        {children}
      </LinkableHeading>
    ),
    h3: ({ children }) => (
      <LinkableHeading as="h3" textStyle="lg">
        {children}
      </LinkableHeading>
    ),
    h4: ({ children }) => (
      <LinkableHeading as="h4" textStyle="md">
        {children}
      </LinkableHeading>
    ),
    h5: ({ children }) => (
      <LinkableHeading as="h5" textStyle="sm">
        {children}
      </LinkableHeading>
    ),
    h6: ({ children }) => (
      <LinkableHeading as="h6" textStyle="xs">
        {children}
      </LinkableHeading>
    ),
    normal: ({ children }) => <Text textStyle="sm">{children}</Text>,
  },
  list: {
    bullet: ({ children }) => <UnorderedList>{children}</UnorderedList>,
    number: ({ children }) => <OrderedList>{children}</OrderedList>,
  },
  listItem: ({ children }) => <ListItem>{children}</ListItem>,
  types: {
    buttonLink: ({ value }) => {
      const isExternal = value.url.startsWith("/");
      const linkProps: any = isExternal
        ? { as: "a", href: value.url }
        : { as: Link, to: value.url };
      return (
        <Box>
          <Button variant={value.variant} size={value.size} {...linkProps}>
            {value.text}
          </Button>
        </Box>
      );
    },
    divider: () => <Divider height="1px" />,
    introduction: ({ value }) => {
      return (
        <Stack spacing={3}>
          <PortableText
            value={value.content}
            components={{
              block: {
                normal: ({ children }) => (
                  <Text textStyle="md">{children}</Text>
                ),
              },
            }}
          />
        </Stack>
      );
    },
    grid: ({ value }) => (
      <SimpleGrid columns={[1, 2, value.maxNumberOfColumns]} gap={6}>
        {value.content.map((item: any) => (
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
          <Stack spacing={3}>
            <PortableText value={value.content} />
          </Stack>
        </Flex>
      );
    },
    imageWithCaption: ({ value }) => (
      <Stack spacing={2}>
        {value.image && (
          <Box>
            <Image
              src={urlBuilder
                .image(value.image)
                .width(924)
                .fit("max")
                .auto("format")
                .url()}
              alt={value.alt || ""}
              mx="auto"
            />
          </Box>
        )}
        {value.caption && (
          <Stack textStyle="sm" color="alias.osloGrey">
            <PortableText value={value.caption} />
          </Stack>
        )}
      </Stack>
    ),
    image: ({ value }) => (
      <Image
        src={urlBuilder
          .image(value.image)
          .width(924)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt}
        mx="auto"
      />
    ),
  },
};

type PortableTextProps = { children: React.ReactNode };
export const PortableTextProvider = ({ children }: PortableTextProps) => {
  return (
    <SanityPortableTextComponentsProvider components={components}>
      {children}
    </SanityPortableTextComponentsProvider>
  );
};
