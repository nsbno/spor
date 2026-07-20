import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  SporProvider,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from "@vygruppen/spor-react";
import { createRef } from "react";
import { describe, expect, test } from "vitest";

const SimpleTable = (props: React.ComponentProps<typeof Table>) => (
  <SporProvider>
    <Table data-testid="table" {...props}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Name</TableColumnHeader>
          <TableColumnHeader>Age</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>30</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </SporProvider>
);

const SortableTable = (props: React.ComponentProps<typeof Table>) => (
  <SporProvider>
    <Table data-testid="table" sortable {...props}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Name</TableColumnHeader>
          <TableColumnHeader>Age</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody data-testid="tbody">
        <TableRow data-testid="row-alice">
          <TableCell>Alice</TableCell>
          <TableCell>30</TableCell>
        </TableRow>
        <TableRow data-testid="row-charlie">
          <TableCell>Charlie</TableCell>
          <TableCell>20</TableCell>
        </TableRow>
        <TableRow data-testid="row-bob">
          <TableCell>Bob</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </SporProvider>
);

describe("Table rendering", () => {
  test("renders a table element", () => {
    render(<SimpleTable />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    render(<SimpleTable />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  test("forwards extra props to the table element", () => {
    render(<SimpleTable data-custom="yes" />);
    expect(screen.getByTestId("table")).toHaveAttribute("data-custom", "yes");
  });

  test("forwards className to the table element", () => {
    render(<SimpleTable className="my-table" />);
    expect(screen.getByTestId("table")).toHaveClass("my-table");
  });

  test("forwards ref to the table element", () => {
    const ref = createRef<HTMLTableElement>();
    render(
      <SporProvider>
        <Table ref={ref}>
          <TableBody>
            <TableRow>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </SporProvider>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("TABLE");
  });
});

describe("Table props", () => {
  test.each(["ghost", "core"] as const)(
    "renders without error with variant=%s",
    (variant) => {
      render(<SimpleTable variant={variant} />);
      expect(screen.getByRole("table")).toBeInTheDocument();
    },
  );

  test.each(["grey", "green", "white"] as const)(
    "renders without error with colorPalette=%s",
    (colorPalette) => {
      render(<SimpleTable colorPalette={colorPalette} />);
      expect(screen.getByRole("table")).toBeInTheDocument();
    },
  );
});

describe("Table sorting", () => {
  test("does not show sort buttons when sortable is false", () => {
    render(<SimpleTable />);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  test("shows sort buttons for each column header when sortable is true", () => {
    render(<SortableTable />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  test("clicking a sort button sorts the column ascending on first click", async () => {
    const user = userEvent.setup();
    render(<SortableTable />);

    const [nameButton] = screen.getAllByRole("button");
    await user.click(nameButton);

    const tbody = screen.getByTestId("tbody");
    const rows = within(tbody).getAllByRole("row");
    expect(within(rows[0]).getByText("Alice")).toBeInTheDocument();
    expect(within(rows[1]).getByText("Bob")).toBeInTheDocument();
    expect(within(rows[2]).getByText("Charlie")).toBeInTheDocument();
  });

  test("clicking a sort button twice sorts the column descending", async () => {
    const user = userEvent.setup();
    render(<SortableTable />);

    const [nameButton] = screen.getAllByRole("button");
    await user.click(nameButton);
    await user.click(nameButton);

    const tbody = screen.getByTestId("tbody");
    const rows = within(tbody).getAllByRole("row");
    expect(within(rows[0]).getByText("Charlie")).toBeInTheDocument();
    expect(within(rows[1]).getByText("Bob")).toBeInTheDocument();
    expect(within(rows[2]).getByText("Alice")).toBeInTheDocument();
  });

  test("clicking a sort button three times resets the sort order", async () => {
    const user = userEvent.setup();
    render(<SortableTable />);

    const [nameButton] = screen.getAllByRole("button");
    await user.click(nameButton);
    await user.click(nameButton);
    await user.click(nameButton);

    const tbody = screen.getByTestId("tbody");
    const rows = within(tbody).getAllByRole("row");
    expect(within(rows[0]).getByText("Alice")).toBeInTheDocument();
    expect(within(rows[1]).getByText("Charlie")).toBeInTheDocument();
    expect(within(rows[2]).getByText("Bob")).toBeInTheDocument();
  });

  test("data-nosort disables sorting on a specific column", () => {
    render(
      <SporProvider>
        <Table sortable>
          <TableHeader>
            <TableRow>
              <TableColumnHeader>Sortable</TableColumnHeader>
              <TableColumnHeader data-nosort>Not sortable</TableColumnHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>A</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </SporProvider>,
    );
    // Only one button should be rendered (the sortable column)
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  test("sorting by a different column resets sort on the previous column", async () => {
    const user = userEvent.setup();
    render(<SortableTable />);

    const [nameButton, ageButton] = screen.getAllByRole("button");
    await user.click(nameButton);
    await user.click(ageButton);

    const tbody = screen.getByTestId("tbody");
    const rows = within(tbody).getAllByRole("row");
    // Age column: Charlie=20, Bob=25, Alice=30
    expect(within(rows[0]).getByText("Charlie")).toBeInTheDocument();
    expect(within(rows[1]).getByText("Bob")).toBeInTheDocument();
    expect(within(rows[2]).getByText("Alice")).toBeInTheDocument();
  });
});
