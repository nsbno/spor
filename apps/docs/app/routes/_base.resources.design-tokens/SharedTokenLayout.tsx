import { Box, BoxProps } from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";

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
