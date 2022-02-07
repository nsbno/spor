import { Box, Heading, Text } from "@vygruppen/spor-react";

type SharedTokenLayoutProps = {
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
};
export function SharedTokenLayout({
  title,
  description,
  children,
}: SharedTokenLayoutProps) {
  return (
    <Box>
      <Heading as="h2" textStyles="xl-display" mb={2}>
        {title}
      </Heading>
      <Text mb={6} textStyle="sm">
        {description}
      </Text>
      {children}
    </Box>
  );
}
