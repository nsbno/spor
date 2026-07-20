import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  Box,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from "@vygruppen/spor-react";

const meta = {
  title: "Components/Table",
  component: Table,
  args: {
    variant: "ghost",
    colorPalette: undefined,
    size: "md",
    sortable: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: [undefined, "core", "ghost", "floating"],
    },
    colorPalette: {
      control: "select",
      options: [undefined, "grey", "green", "white"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    sortable: { control: "boolean" },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleRows = [
  {
    destination: "Bergen",
    departure: "08:00",
    arrival: "14:30",
    price: "499 kr",
    status: "Complete",
  },
  {
    destination: "Trondheim",
    departure: "09:15",
    arrival: "16:45",
    price: "649 kr",
    status: "Cancelled",
  },
  {
    destination: "Stavanger",
    departure: "11:00",
    arrival: "13:20",
    price: "349 kr",
    status: "Complete",
  },
  {
    destination: "Bodø",
    departure: "13:30",
    arrival: "22:00",
    price: "799 kr",
    status: "Cancelled",
  },
  {
    destination: "Bodø",
    departure: "13:30",
    arrival: "22:00",
    price: "799 kr",
    status: "Pending",
  },
];

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Destination</TableColumnHeader>
          <TableColumnHeader>Departure</TableColumnHeader>
          <TableColumnHeader>Arrival</TableColumnHeader>
          <TableColumnHeader>Price</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleRows.map((row) => (
          <TableRow key={row.destination}>
            <TableCell>{row.destination}</TableCell>
            <TableCell>{row.departure}</TableCell>
            <TableCell>{row.arrival}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={8}>
      {(["core", "ghost", "floating"] as const).map((variant) => (
        <Box key={variant}>
          <Box fontWeight="bold" marginBottom={2}>
            {variant}
          </Box>
          <Table variant={variant}>
            <TableHeader>
              <TableRow>
                <TableColumnHeader>Destination</TableColumnHeader>
                <TableColumnHeader>Departure</TableColumnHeader>
                <TableColumnHeader>Price</TableColumnHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleRows.slice(0, 3).map((row) => (
                <TableRow key={row.destination}>
                  <TableCell>{row.destination}</TableCell>
                  <TableCell>{row.departure}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      ))}
    </Box>
  ),
};

const semantics = [
  undefined,
  "info",
  "success",
  "warning",
  "notice",
  "caution",
  "critical",
] as const;

export const Semantics: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Semantic</TableColumnHeader>
          <TableColumnHeader>Destination</TableColumnHeader>
          <TableColumnHeader>Departure</TableColumnHeader>
          <TableColumnHeader>Arrival</TableColumnHeader>
          <TableColumnHeader>Price</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {semantics.map((semantic, i) => {
          const row = sampleRows[i % sampleRows.length];
          return (
            <TableRow key={semantic ?? "none"} semantic={semantic}>
              <TableCell>{semantic ?? "none"}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>{row.departure}</TableCell>
              <TableCell>{row.arrival}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ),
};

export const ColorPalettes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={8}>
      {(["green", "grey", "white"] as const).map((colorPalette) => (
        <Box key={colorPalette}>
          <Box fontWeight="bold" marginBottom={2}>
            {colorPalette}
          </Box>
          <Table colorPalette={colorPalette}>
            <TableHeader>
              <TableRow>
                <TableColumnHeader>Destination</TableColumnHeader>
                <TableColumnHeader>Departure</TableColumnHeader>
                <TableColumnHeader>Price</TableColumnHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleRows.slice(0, 3).map((row) => (
                <TableRow key={row.destination}>
                  <TableCell>{row.destination}</TableCell>
                  <TableCell>{row.departure}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      ))}
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={8}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Box key={size}>
          <Box fontWeight="bold" marginBottom={2}>
            {size}
          </Box>
          <Table size={size}>
            <TableHeader>
              <TableRow>
                <TableColumnHeader>Destination</TableColumnHeader>
                <TableColumnHeader>Departure</TableColumnHeader>
                <TableColumnHeader>Price</TableColumnHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleRows.slice(0, 3).map((row) => (
                <TableRow key={row.destination}>
                  <TableCell>{row.destination}</TableCell>
                  <TableCell>{row.departure}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      ))}
    </Box>
  ),
};

const getSortValue = (status: string) => {
  if (status === "Complete") {
    return "0";
  }
  if (status === "Pending") {
    return "1";
  }
  if (status === "Cancelled") {
    return "2";
  }
  return "3";
};
export const Sortable: Story = {
  args: {
    sortable: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Destination</TableColumnHeader>
          <TableColumnHeader>Departure</TableColumnHeader>
          <TableColumnHeader>Arrival</TableColumnHeader>
          <TableColumnHeader>Price</TableColumnHeader>
          <TableColumnHeader>Status</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleRows.map((row) => (
          <TableRow key={row.destination}>
            <TableCell>{row.destination}</TableCell>
            <TableCell>{row.departure}</TableCell>
            <TableCell>{row.arrival}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell data-sort={getSortValue(row.status)}>
              <Badge>{row.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const SortableWithNonSortableColumn: Story = {
  args: {
    sortable: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Destination</TableColumnHeader>
          <TableColumnHeader>Departure</TableColumnHeader>
          <TableColumnHeader data-nosort>Arrival</TableColumnHeader>
          <TableColumnHeader>Price</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleRows.map((row) => (
          <TableRow key={row.destination}>
            <TableCell>{row.destination}</TableCell>
            <TableCell>{row.departure}</TableCell>
            <TableCell>{row.arrival}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithTooltip: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader tooltip="The destination of the travel">Destination</TableColumnHeader>
          <TableColumnHeader>Departure</TableColumnHeader>
          <TableColumnHeader>Arrival</TableColumnHeader>
          <TableColumnHeader>Price</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleRows.map((row) => (
          <TableRow key={row.destination}>
            <TableCell>{row.destination}</TableCell>
            <TableCell>{row.departure}</TableCell>
            <TableCell>{row.arrival}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};