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
export type TableProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export function TableChart({ children, title, description }: TableProps) {
  const { t } = useTranslation();

  const tHeadValues: string[] =
    children !== undefined && Array.isArray(children)
      ? (children[0] as string[])
      : [];

  const tBodyValues: string[][] | undefined | null =
    children !== undefined && Array.isArray(children)
      ? (children as string[][]).slice(1)
      : [];

  const ariaProps = title
    ? { "aria-labelledby": slugify(title) }
    : { "aria-label": t(texts.table) };

  return (
    <Stack gap={4} as="section" width="100%" {...ariaProps} marginTop={4}>
      {title && (
        <Heading
          as="h2"
          variant="lg"
          fontWeight="600"
          color="text.secondary"
          marginBottom={-2}
          autoId
        >
          {title}
        </Heading>
      )}
      {description && <Text marginBottom={1}>{description}</Text>}
      <Box width="100%" minWidth={0} overflowX="auto">
        <Table size="md" tableLayout="fixed" width="100%">
          {tHeadValues.length > 0 && (
            <TableHeader>
              <TableRow>
                {tHeadValues.map((head) => (
                  <TableColumnHeader
                    role="cell"
                    key={head}
                    width={`${100 / tHeadValues.length}%`}
                  >
                    {head}
                  </TableColumnHeader>
                ))}
              </TableRow>
            </TableHeader>
          )}
          <TableBody>
            {tBodyValues.length > 0 &&
              tBodyValues.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Stack>
  );
}

const texts = {
  table: {
    nb: "Tabell",
    nn: "Tabell",
    sv: "Tabell",
    en: "Table",
  },
};
