import { Box, Heading } from "@vygruppen/spor-react";

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
      <Heading as="h2" textStyle="xl-display" mb={2}>
        {title}
      </Heading>
      <Box mb={6} textStyle="sm">
        {description}
      </Box>
      {children}
    </Box>
  );
}
