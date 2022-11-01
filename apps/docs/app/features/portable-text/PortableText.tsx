import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  PortableText,
  PortableTextComponentsProvider as SanityPortableTextComponentsProvider,
  PortableTextReactComponents,
} from "@portabletext/react";
import { Link } from "@remix-run/react";
import {
  Box,
  Button,
  Code,
  Divider,
  FavouriteOutline30Icon,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  SuccessFill24Icon,
  Table,
  Tbody,
  Td,
  Text,
  TextLink,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import React from "react";
import { urlBuilder } from "~/utils/sanity/utils";
import { CodeBlock } from "../code-block/CodeBlock";
import { ImageWithCaption } from "../Images-with-caption/ImageWithCaption";
import { InteractiveCode } from "../interactive-code/InteractiveCode";
import { LinkableHeading } from "../linkable-heading/LinkableHeading";
import { useUserPreferences } from "../user-preferences/UserPreferencesContext";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    code: ({ children }) => <Code>{children}</Code>,
    link: ({ value, children }) => {
      const isInternal = value.href.startsWith("/");
      if (isInternal) {
        return (
          <TextLink variant="primary" as={Link} to={value.href}>
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
        textStyle="lg"
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
        textStyle="md"
        fontWeight="bold"
        marginTop={6}
        marginBottom={1}
      >
        {children}
      </LinkableHeading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" textStyle="sm" fontWeight="bold" marginTop={4}>
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading as="h5" textStyle="xs" fontWeight="bold" marginTop={4}>
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading as="h6" textStyle="xs" marginTop={2}>
        {children}
      </Heading>
    ),
    normal: ({ children }) => {
      const arrayChildren = React.Children.toArray(children);
      if (!arrayChildren.length || arrayChildren.join("") === "") {
        return null;
      }
      return (
        <Text
          textStyle="sm"
          sx={{
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
      <UnorderedList paddingLeft={3} marginTop={0} textStyle="sm">
        {children}
      </UnorderedList>
    ),
    number: ({ children }) => (
      <OrderedList paddingLeft={3} marginTop={0} textStyle="sm">
        {children}
      </OrderedList>
    ),
  },
  listItem: ({ children }) => <ListItem marginTop={1}>{children}</ListItem>,
  types: {
    buttonLink: ({ value }) => {
      const isInternal = value.url.startsWith("/");
      const linkProps: any = isInternal
        ? { as: Link, to: value.url }
        : { as: "a", href: value.url };
      return (
        <Box marginTop={3}>
          <Button variant={value.variant} size={value.size} {...linkProps}>
            {value.text}
          </Button>
        </Box>
      );
    },
    divider: () => <Divider height="1px" my={8} />,
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
      <SimpleGrid
        columns={[1, 2, value.maxNumberOfColumns]}
        gap={6}
        marginTop={6}
      >
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
          <Box sx={{ "& > :first-child": { marginTop: 0 } }}>
            <PortableText value={value.content} />
          </Box>
        </Flex>
      );
    },
    imageWithCaption: ({ value }) => {
      const [, , dimensions] = value.image.asset?._ref.split("-");
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
      const [, , dimensions] = value.image.asset?._ref.split("-");
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
          mx="auto"
          mt={6}
          __css={{ aspectRatio }}
        />
      );
    },
    staticCodeBlock: ({ value }) => {
      return (
        <Box marginBottom={3}>
          <CodeBlock
            mt={6}
            language={value.code.language}
            code={value.code.code}
          />
          {value.caption && (
            <Text textStyle="xs" textAlign="center" color="dimGrey" mt={1}>
              {value.caption}
            </Text>
          )}
        </Box>
      );
    },
    codeExample: ({ value }) => {
      const { userPreferences } = useUserPreferences();
      if (userPreferences.userType === "designer") {
        return (
          <InteractiveCode
            marginY={3}
            layout="preview-only"
            code={value.reactCode.code}
          />
        );
      }
      let code;
      switch (userPreferences.technology) {
        case "react": {
          code = value.reactCode?.code ?? "";
          break;
        }
        case "react-native": {
          code = value.reactNativeCode?.code ?? "";
          break;
        }
        case "elm": {
          code = value.elmCode?.code ?? "";
          break;
        }
        default:
          return null;
      }

      const showCodeBlock =
        value.layout === "code-only" || userPreferences.technology !== "react";

      return showCodeBlock ? (
        <CodeBlock
          my={3}
          language={userPreferences.technology === "elm" ? "elm" : "tsx"}
          code={code}
        />
      ) : (
        <InteractiveCode
          layout={value.layout}
          my={3}
          maxWidth={`calc(100vw - var(--spor-space-6))`}
          code={code}
        />
      );
    },
    component: ({ value }) => {
      const { userPreferences } = useUserPreferences();
      const visibleProps = value.props?.filter((prop: any) => {
        const platform = prop.platform ?? "react, react-native";
        return platform.split(", ").includes(userPreferences.technology);
      });
      return (
        <Box key={value.name} mt={6} as="article">
          <LinkableHeading as="h3" textStyle="md" fontWeight="bold">
            {`<${value.name} />`}
          </LinkableHeading>
          <Box mt={1}>
            <PortableText value={value.content} />
          </Box>
          {visibleProps && (
            <>
              <Heading as="h4" textStyle="md" mt={3}>
                Props
              </Heading>
              <Table
                variant="outline"
                mt={3}
                maxWidth={`calc(100vw - var(--spor-space-6))`}
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
                  {visibleProps.map((prop: any) => (
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
      );
    },
    imports: ({ value }) => {
      const { userPreferences } = useUserPreferences();
      if (userPreferences.userType === "designer") {
        return null;
      }
      let imports;
      switch (userPreferences.technology) {
        case "react":
          imports = value.reactImport;
          break;
        case "react-native":
          imports = value.reactNativeImport;
          break;
        case "elm":
          imports = value.elmImport;
          break;
        default:
          return null;
      }

      if (!imports) {
        return null;
      }

      return <CodeBlock code={imports} mt={3} />;
    },
    tipsPanel: ({ value }) => (
      <Box as="article" backgroundColor="mint" mt={3} p={4} borderRadius="md">
        <Flex gap={1} alignItems="end">
          <FavouriteOutline30Icon />
          <Heading as="h3" textStyle="sm" fontWeight="bold">
            {value.title}
          </Heading>
        </Flex>
        <Box __css={{ " > p:first-of-type": { mt: 1 } }}>
          <PortableText value={value.content} />
        </Box>
      </Box>
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
