import { Box, BoxProps, Heading } from "@vygruppen/spor-react";

type SharedTokenLayoutProps = BoxProps & {
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
};
export function SharedTokenLayout({
  title,
  description,
  children,
  ...rest
}: SharedTokenLayoutProps) {
  return (
    <Box {...rest}>
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
