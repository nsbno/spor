import {
  Box,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { TokenColorKey, useDesignTokens } from "../utils/useDesignTokens";

type Props = {
  colorKey: TokenColorKey;
  name: string;
};

export const ColorTable = ({ name, colorKey }: Props) => {
  const designTokens = useDesignTokens();

  if (!designTokens?.tokens.themeColorTokens?.[colorKey]) return null;

  const { tokens, getFlattenedColors } = designTokens;

  const aliases = tokens.aliases;

  const colors = getFlattenedColors(colorKey);

  return (
    <Table size="md" colorPalette="white">
      <TableHeader>
        <TableRow>
          <TableColumnHeader>
            <LinkableHeading as="h3" variant="sm">
              {name}
            </LinkableHeading>
          </TableColumnHeader>
          <TableColumnHeader>Variable</TableColumnHeader>
          <TableColumnHeader>Value</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {colors.map(({ name, value }) => {
          const alias = aliases.find(({ name }) => name === value);

          return (
            <TableRow key={name} color="text">
              <TableCell>
                <Flex gap="2" alignItems="center">
                  <Box
                    bg={value}
                    borderRadius="xs"
                    width="7"
                    height="7"
                    border={
                      value.includes("white")
                        ? "1px solid rgba(0,0,0,0.40)"
                        : "none"
                    }
                  />
                  {`${colorKey}.${name}`.replace(".DEFAULT", "")}
                </Flex>
              </TableCell>
              <TableCell>{alias?.name}</TableCell>
              <TableCell>{alias?.value ?? value}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
