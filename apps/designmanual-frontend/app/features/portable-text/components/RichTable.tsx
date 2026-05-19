import {
  Box,
  Heading,
  slugify,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  Text,
  useTranslation,
} from "@vygruppen/spor-react";

import { type SanityImage } from "~/features/cms/sanity/query";

import { PortableText } from "../PortableText";
import { ResponsiveImage } from "./ResponsiveImage";

type RichTableCell = {
  _key: string;
  content?: unknown[];
};

type RichTableRow = {
  _key: string;
  cells?: RichTableCell[];
};

export type RichTableValue = {
  title?: string;
  description?: string;
  hasHeaderRow?: boolean;
  hasHeaderColumn?: boolean;
  rows?: RichTableRow[];
};

export function RichTable({ value }: { value: RichTableValue }) {
  const { t } = useTranslation();
  const { title, description, hasHeaderRow, hasHeaderColumn, rows } = value;

  if (!rows || rows.length === 0) return null;

  const ariaProps = title
    ? { "aria-labelledby": slugify(title) }
    : { "aria-label": t(texts.table) };

  const headerRow = hasHeaderRow ? rows[0] : null;
  const bodyRows = hasHeaderRow ? rows.slice(1) : rows;
  const colCount = rows[0]?.cells?.length || 1;

  return (
    <Stack gap={4} as="section" width="100%" {...ariaProps} marginTop={4}>
      {title && (
        <Heading as="h2" variant="lg" fontWeight="600" marginBottom={-2} autoId>
          {title}
        </Heading>
      )}
      {description && <Text marginBottom={1}>{description}</Text>}
      <Box width="100%" minWidth={0} overflowX="auto">
        <Table size="md" width="100%" colorPalette="white">
          {headerRow && (
            <TableHeader>
              <TableRow>
                {(headerRow.cells || []).map((cell) => (
                  <TableColumnHeader
                    key={cell._key}
                    width={`${100 / colCount}%`}
                  >
                    <CellBody content={cell.content} />
                  </TableColumnHeader>
                ))}
              </TableRow>
            </TableHeader>
          )}
          <TableBody>
            {bodyRows.map((row) => (
              <TableRow key={row._key}>
                {(row.cells || []).map((cell, cellIndex) => {
                  if (hasHeaderColumn && cellIndex === 0) {
                    return (
                      <TableColumnHeader key={cell._key}>
                        <CellBody content={cell.content} />
                      </TableColumnHeader>
                    );
                  }
                  return (
                    <TableCell key={cell._key}>
                      <CellBody content={cell.content} />
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Stack>
  );
}

const cellComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <Box marginY={1}>
        <ResponsiveImage
          image={value}
          size="sm"
          maxHeight="2rem"
          width="auto"
          objectFit="contain"
        />
      </Box>
    ),
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <Text variant="sm" css={{ "& + &": { marginTop: 1 } }}>
        {children}
      </Text>
    ),
  },
};

function CellBody({ content }: { content?: unknown[] }) {
  if (!content || content.length === 0) return null;
  return <PortableText value={content} components={cellComponents} />;
}

const texts = {
  table: {
    nb: "Tabell",
    nn: "Tabell",
    sv: "Tabell",
    en: "Table",
  },
};
