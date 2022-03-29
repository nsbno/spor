import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  PortableText,
  PortableTextComponentsProvider as SanityPortableTextComponentsProvider,
  PortableTextReactComponents,
} from "@portabletext/react";
import {
  Box,
  Button,
  Code,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  SuccessFill24Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import React from "react";
import { Link as InternalLink } from "remix";
import { urlBuilder } from "~/utils/sanity/utils";
import { CodeBlock } from "../code-block/CodeBlock";
import { InteractiveCode } from "../interactive-code/InteractiveCode";
import { LinkableHeading } from "../linkable-heading/LinkableHeading";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    code: ({ children }) => <Code>{children}</Code>,
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
      <LinkableHeading as="h2" textStyle="lg" fontWeight="bold" mt={6} mb={-1}>
        {children}
      </LinkableHeading>
    ),
    h3: ({ children }) => (
      <LinkableHeading as="h3" textStyle="md" fontWeight="bold" mt={2}>
        {children}
      </LinkableHeading>
    ),
    h4: ({ children }) => (
      <LinkableHeading as="h4" textStyle="sm" fontWeight="bold" mt={2}>
        {children}
      </LinkableHeading>
    ),
    h5: ({ children }) => (
      <LinkableHeading as="h5" textStyle="xs" fontWeight="bold" mt={2}>
        {children}
      </LinkableHeading>
    ),
    h6: ({ children }) => (
      <LinkableHeading as="h6" textStyle="xs" mt={2}>
        {children}
      </LinkableHeading>
    ),
    normal: ({ children }) => {
      const arrayChildren = React.Children.toArray(children);
      if (!arrayChildren.length || arrayChildren.join("") === "") {
        return null;
      }
      return (
        <Text textStyle="sm" mt={3}>
          {children}
        </Text>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <UnorderedList pl={3} mt={0} textStyle="sm">
        {children}
      </UnorderedList>
    ),
    number: ({ children }) => (
      <OrderedList pl={3} mt={0} textStyle="sm">
        {children}
      </OrderedList>
    ),
  },
  listItem: ({ children }) => <ListItem mt={2}>{children}</ListItem>,
  types: {
    buttonLink: ({ value }) => {
      const isExternal = value.url.startsWith("/");
      const linkProps: any = isExternal
        ? { as: "a", href: value.url }
        : { as: Link, to: value.url };
      return (
        <Box mt={3}>
          <Button variant={value.variant} size={value.size} {...linkProps}>
            {value.text}
          </Button>
        </Box>
      );
    },
    divider: () => <Divider height="1px" mt={[8, 10]} />,
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
      <SimpleGrid columns={[1, 2, value.maxNumberOfColumns]} gap={6} mt={6}>
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
          <Box>
            <PortableText value={value.content} />
          </Box>
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
              mt={2}
              borderRadius="md"
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
        mt={2}
        borderRadius="md"
      />
    ),
    codeExample: ({ value }) =>
      value.layout === "code-only" ? (
        <CodeBlock mt={6} language="jsx" code={value.reactCode.code} />
      ) : (
        <InteractiveCode layout={value.layout} mt={6}>
          {value.reactCode.code}
        </InteractiveCode>
      ),
    component: ({ value }) => (
      <Box key={value.name} mt={6} as="article">
        <LinkableHeading as="h3" textStyle="lg" fontWeight="bold">
          {`<${value.name} />`}
        </LinkableHeading>
        <Box mt={1}>
          <PortableText value={value.content} />
        </Box>
        {value.props && (
          <>
            <Heading as="h4" textStyle="md" fontWeight="bold" mt={3}>
              Props
            </Heading>
            <Table
              variant="outline"
              mt={3}
              maxWidth="calc(100vw - var(--spor-space-1))"
            >
              <Thead>
                <Tr>
                  <Th>Navn</Th>
                  <Th>Type</Th>
                  <Th>Påkrevd?</Th>
                  <Th>Beskrivelse</Th>
                </Tr>
              </Thead>
              <Tbody>
                {value.props.map((prop: any) => (
                  <Tr key={prop.name}>
                    <Td>
                      <Code>{prop.name}</Code>
                    </Td>
                    <Td>
                      <Code>
                        {prop.type === "other" ? prop.typeOther : prop.type}
                      </Code>
                    </Td>
                    <Td>
                      {prop.isRequired && (
                        <SuccessFill24Icon aria-label="Påkrevd" mx="auto" />
                      )}
                    </Td>
                    <Td>{prop.description}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </Box>
    ),
    imports: ({ value }) => <CodeBlock code={value.reactImport} mt={3} />,
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
