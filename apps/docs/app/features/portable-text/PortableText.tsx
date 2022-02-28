import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  PortableText as SanityPortableText,
  PortableTextComponentsProvider as SanityPortableTextComponentsProvider,
  PortableTextReactComponents,
} from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import React from "react";
import { Link as InternalLink } from "remix";

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
    h2: ({ children }) => <Heading textStyle="xl-display">{children}</Heading>,
    h3: ({ children }) => <Heading textStyle="lg">{children}</Heading>,
    h4: ({ children }) => <Heading textStyle="md">{children}</Heading>,
    h5: ({ children }) => <Heading textStyle="sm">{children}</Heading>,
    h6: ({ children }) => <Heading textStyle="xs">{children}</Heading>,
    normal: ({ children }) => <Text textStyle="sm">{children}</Text>,
  },
  list: {
    bullet: ({ children }) => <UnorderedList>{children}</UnorderedList>,
    number: ({ children }) => <OrderedList>{children}</OrderedList>,
    listItem: ({ children }) => <ListItem>{children}</ListItem>,
  },
  types: {
    buttonLink: ({ value }) => {
      const isExternal = value.url.startsWith("/");
      const linkProps: any = isExternal
        ? { as: "a", href: value.url }
        : { as: Link, to: value.url };
      return (
        <Button variant={value.variant} size={value.size} {...linkProps}>
          {value.text}
        </Button>
      );
    },
    divider: () => <Divider />,
    introduction: ({ value }) => (
      <Stack spacing={6} fontSize={["mobile.md", "desktop.md"]}>
        <SanityPortableText value={value} />
      </Stack>
    ),
    grid: ({ value }) => (
      <SimpleGrid columns={[1, 2, value.maxNumberOfColumns]}>
        {value.content.map((item: any) => (
          <SanityPortableText value={item} key={item._key} />
        ))}
      </SimpleGrid>
    ),
    imageWithCaption: ({ value }) => (
      <Stack spacing={2}>
        {value.image && (
          <Box>
            <Image
              src={urlBuilder()
                .image(value.image)
                .width(800)
                .fit("max")
                .auto("format")
                .url()}
              alt={value.alt || ""}
            />
          </Box>
        )}
        {value.caption && (
          <Box textStyle="sm" color="alias.osloGrey">
            <SanityPortableText value={value.caption} />
          </Box>
        )}
      </Stack>
    ),
    image: ({ value }) => <Image src={value.src} alt={value.alt} />,
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
