import { Box, BoxProps } from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";

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
      <LinkableHeading as="h2" variant="xl-display" marginBottom={2}>
        {title}
      </LinkableHeading>
      <Box marginBottom={6} textStyle="sm">
        {description}
      </Box>
      {children}
    </Box>
  );
}
