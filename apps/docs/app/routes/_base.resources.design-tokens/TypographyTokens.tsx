import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  Text,
} from "@vygruppen/spor-react";
import { Fragment } from "react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { SharedTokenLayout } from "./SharedTokenLayout";
import { remToPx, useDesignTokens } from "./utils";

export const TypographyTokens = () => (
  <SharedTokenLayout
    title="Typography"
    description={
      <Stack gap={6}>
        <Text>
          We have two "sets" of text styles; one for mobile and one for desktop.
          The text styles for Mobile should be used in the Vy app, and on the
          web on mobile, while horizontal tablet, desktop, and widescreen should
          use the text styles for Desktop. The breakpoint is at screen widths
          greater than or equal to &gt;=756 pixels wide. Line height should
          always be 1.333 times the font size, rounded to the nearest pixel.
        </Text>
        <Text>
          The font Vy Display is less readable in small sizes, and should
          therefore preferably only be used for headings in content, while in
          the React applications, Vy Sans is preferred.
        </Text>
      </Stack>
    }
  >
    <Stack gap={9}>
      <TypographyTokenTable viewportSize="mobile" title="Mobile" />
      <TypographyTokenTable viewportSize="desktop" title="Desktop" />
    </Stack>
  </SharedTokenLayout>
);

type TypographyTokenTableProps = {
  viewportSize: "mobile" | "desktop";
  title: string;
};

const TypographyTokenTable = ({
  viewportSize,
  title,
}: TypographyTokenTableProps) => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const fontTokensList = Object.entries(
    designTokens.tokens.font.style,
  ).reverse();

  return (
    <Box>
      <LinkableHeading as="h3">{title}</LinkableHeading>
      <Table colorPalette="white">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Variable</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fontTokensList.map(([variable, token]) => (
            <Fragment key={variable}>
              <TableRow>
                <TableCell>
                  <Text variant={variable}>{variable}</Text>
                </TableCell>

                <TableCell>
                  {remToPx(token["font-size"][viewportSize])} /{" "}
                  {token["font-size"][viewportSize]}
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
