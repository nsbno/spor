import { Box, BoxProps, Flex, Text, useColorMode } from "@vygruppen/spor-react";
import { SharedTokenLayout } from "../SharedTokenLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableColumnHeader,
  TableRow,
} from "@vygruppen/spor-react";

import tokensJSON from "@vygruppen/spor-design-tokens/dist/tokens.json";
import { useBrand } from "~/utils/brand";

const useColors = () => {
  const brand = useBrand();
  switch (String(brand)) {
    case "VyDigital":
      return tokensJSON.color.vyDigital;
    case "CargoNet":
      return tokensJSON.color.cargonet;
    default:
      return tokensJSON.color.vyDigital;
  }
};

export function ColorTokens(props: BoxProps) {
  console.log("ColorTokens", tokensJSON);

  return (
    <Table size="md">
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Country</TableColumnHeader>
          <TableColumnHeader>Capital</TableColumnHeader>
          <TableColumnHeader>Currency</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Norway</TableCell>
          <TableCell>Oslo</TableCell>
          <TableCell>Norwegian krone</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Canada</TableCell>
          <TableCell>Ottawa</TableCell>
          <TableCell>Canadian Dollar</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Japan</TableCell>
          <TableCell>Tokyo</TableCell>
          <TableCell>Yen</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  return (
    <SharedTokenLayout
      {...props}
      title="Elements"
      description={
        <Text>
          Our main colors are the ones we use the most. These are used for,
          among other things, background colors, in core functionality,
          navigation, and buttons – to create a framework for our services. By
          using mostly these colors, we create a unity and recognizability
          across our digital platforms.
        </Text>
      }
    >
      <ColorTable colorKey="bg" name="Background" />
      <ColorTable colorKey="text" name="Text" />
      <ColorTable colorKey="icon" name="Icon" />
      <ColorTable colorKey="outline" name="Outline" />
      <ColorTable colorKey="surface" name="Surface" />

      <h2>Sttyles</h2>

      <ColorTable colorKey="core" name="Core" />
      <ColorTable colorKey="brand" name="Brand" />
      <ColorTable colorKey="accent" name="Accent" />
      <ColorTable colorKey="floating" name="Floating" />
      <ColorTable colorKey="ghost" name="Ghost" />
    </SharedTokenLayout>
  );
}

interface ColorTableProps {
  colorKey: keyof typeof tokensJSON.color.vyDigital;
  name: string;
}

interface FlattenedColor {
  name: string;
  value: string;
}

const flattenColors = (
  obj: Record<string, any>,
  colorMode: any,
  path: string[] = [],
): FlattenedColor[] => {
  return Object.entries(obj).reduce<FlattenedColor[]>((acc, [key, value]) => {
    if (typeof value === "object" && value !== null) {
      return [...acc, ...flattenColors(value, colorMode, [...path, key])];
    }
    if (key === `_${colorMode}`) {
      return [
        ...acc,
        {
          name: `${""}${path.join(".")}`,
          value: value.replace("colors.", ""),
        },
      ];
    }
    return acc;
  }, []);
};

const ColorTable: React.FC<ColorTableProps> = ({ name, colorKey }) => {
  const { colorMode } = useColorMode();

  const colors = useColors();

  const color = colors[colorKey];

  const aliases = tokensJSON.color.alias;

  console.log(aliases);

  const colorList = flattenColors(color, colorMode);

  return (
    <Box p={4}>
      <Text as="h2" fontSize="xl" fontWeight="bold" mb={2}>
        {name}
      </Text>
      <Table size="md">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>{name}</TableColumnHeader>
            <TableColumnHeader>Alias</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {colorList.map(({ name, value }) => {
            const alias = aliases[value as keyof typeof aliases]
              ?.replace("colors.", "")
              .split(".")
              .join(" ");

            const unCamelCasedValue = value
              .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
              .replace(/\b\w/g, (char) => char.toUpperCase())
              .replace(/\B\w/g, (char) => char.toLowerCase());

            return (
              <TableRow key={name}>
                <TableCell>
                  <Flex gap="2">
                    <Box
                      bg={value}
                      width={6}
                      height={6}
                      border="1px solid black"
                    ></Box>
                    {name}
                  </Flex>
                </TableCell>
                <TableCell>{alias ? unCamelCasedValue : null}</TableCell>
                <TableCell>{alias ?? unCamelCasedValue}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ColorTable;
