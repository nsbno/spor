import { act, render, waitFor } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { axe } from "vitest-axe";
import { ExpandableAlert } from ".";

describe("<ExpandableAlert />", () => {
  it("works as an expandable", async () => {
    const { getByRole, getByText } = render(
      <ExpandableAlert variant="info" title="Title">
        Test text
      </ExpandableAlert>,
    );
    await waitFor(() => expect(getByText("Test text")).not.toBeVisible());
    act(() => {
      getByRole("button").click();
    });
    await waitFor(() => expect(getByText("Test text")).toBeVisible());
    act(() => {
      getByRole("button").click();
    });
    await waitFor(() => expect(getByText("Test text")).not.toBeVisible());
  });

  it("calls onToggle when toggled", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <ExpandableAlert variant="info" title="Title" onToggle={handleClick}>
        Test text
      </ExpandableAlert>,
    );

    act(() => {
      getByRole("button").click();
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).lastCalledWith(true);

    act(() => {
      getByRole("button").click();
    });
    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleClick).lastCalledWith(false);
  });

  it("lets you set the heading level", async () => {
    const { queryByRole, rerender } = render(
      <ExpandableAlert variant="info" title="Title" headingLevel="h2">
        Test text
      </ExpandableAlert>,
    );
    expect(queryByRole("heading", { level: 2 })).toBeInTheDocument();
    rerender(
      <ExpandableAlert variant="info" title="Title" headingLevel="h3">
        Test text
      </ExpandableAlert>,
    );
    expect(queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
    expect(queryByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("is accessible in all states", async () => {
    const { container, getByRole } = render(
      <ExpandableAlert variant="info" title="Title">
        Test text
      </ExpandableAlert>,
    );
    await act(async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
    act(() => {
      getByRole("button").click();
    });
    await act(async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
    act(() => {
      getByRole("button").click();
    });
    await act(async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
