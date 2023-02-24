import { PortableText } from "@portabletext/react";
import {
  Box,
  Code,
  Heading,
  SuccessFill24Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import { CodeBlock } from "../code-block/CodeBlock";
import { LinkableHeading } from "../linkable-heading/LinkableHeading";

type ComponentDocsProps = {
  component: {
    name: string;
    content: any[];
    props: {
      platform: "react" | "react-native" | "react, react-native" | "elm";
      type: "other" | string;
      typeOther?: string;
      name: string;
      description?: string;
      isRequired: boolean;
    }[];
  };
};
export const ComponentDocs = ({ component }: ComponentDocsProps) => {
  const visibleProps = component.props?.filter((prop) => {
    const platform = prop.platform ?? "react, react-native";
    return platform.split(", ").includes("react");
  });
  return (
    <Box key={component.name} as="article">
      <LinkableHeading as="h3" variant="md" fontWeight="bold" mb={1}>
        <Code fontSize="md">{`<${component.name} />`}</Code>
      </LinkableHeading>
      <CodeBlock
        code={`import { ${component.name} } from "@vygruppen/spor-react";`}
      />
      <Box mt={1}>
        <PortableText value={component.content} />
      </Box>
      {visibleProps && (
        <>
          <Heading as="h4" variant="md" mt={3}>
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
              {visibleProps.map((prop) => (
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
};
