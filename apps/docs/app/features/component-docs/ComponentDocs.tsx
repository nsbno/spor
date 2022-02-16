import { Heading, Stack, Text } from "@vygruppen/spor-react";

type ComponentDocsProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};
export const ComponentDocs = ({
  title,
  description,
  children,
}: ComponentDocsProps) => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Heading as="h1" textStyle="xl-display">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Stack>
      <Stack spacing={8}>{children}</Stack>
    </Stack>
  );
};
