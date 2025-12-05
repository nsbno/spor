import { SuccessFill24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Code,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from "@vygruppen/spor-react";

import { PortableText } from "~/features/portable-text/PortableText";

import { CodeBlock } from "../../../features/portable-text/code-block/CodeBlock";
import { LinkableHeading } from "../../../features/portable-text/LinkableHeading";

type ComponentDocsProps = {
  component: {
    name: string;
    content: unknown[];
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
  const visibleProps = component.props?.filter((property) => {
    const platform = property.platform ?? "react, react-native";
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
            variant="core"
            marginTop={3}
            colorPalette="grey"
            maxWidth="calc(100vw - var(--spor-space-6))"
          >
            <TableHeader>
              <TableRow>
                <TableColumnHeader>Name</TableColumnHeader>
                <TableColumnHeader>Type</TableColumnHeader>
                <TableColumnHeader>Required?</TableColumnHeader>
                <TableColumnHeader>Description</TableColumnHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleProps.map((property) => (
                <TableRow key={property.name}>
                  <TableCell>
                    <Code>{property.name}</Code>
                  </TableCell>
                  <TableCell>
                    <Code>
                      {property.type === "other"
                        ? property.typeOther
                        : property.type}
                    </Code>
                  </TableCell>
                  <TableCell>
                    {property.isRequired && (
                      <SuccessFill24Icon aria-label="Required" marginX="auto" />
                    )}
                  </TableCell>
                  <TableCell>{property.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </Box>
  );
};
