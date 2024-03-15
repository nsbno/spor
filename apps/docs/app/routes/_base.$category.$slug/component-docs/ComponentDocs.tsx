import { PortableText } from "@portabletext/react";
import { SuccessFill24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Code,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "../../../features/portable-text/LinkableHeading";
import { CodeBlock } from "../../../features/portable-text/code-block/CodeBlock";

type ComponentDocsProps = {
  component: {
    name: string;
    content: any[];
    props: {
      platform: "react" | "react-native" | "react, react-native";
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
    <Box key={component.name} as="article" marginBottom={9}>
      <LinkableHeading as="h3" variant="md" fontWeight="bold" marginBottom={1}>
        <Code fontSize="md">{`<${component.name} />`}</Code>
      </LinkableHeading>
      <CodeBlock
        code={`import { ${component.name} } from "@vygruppen/spor-react";`}
      />
      <Box marginTop={1}>
        <PortableText value={component.content} />
      </Box>
      {visibleProps && (
        <>
          <Heading as="h4" variant="md" marginTop={3}>
            Props
          </Heading>
          <Table
            variant="outline"
            marginTop={3}
            maxWidth={`calc(100vw - var(--spor-space-6))`}
          >
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Required?</Th>
                <Th>Description</Th>
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
                      <SuccessFill24Icon aria-label="Required" marginX="auto" />
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
