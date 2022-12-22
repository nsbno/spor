import { act, render } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { axe } from "vitest-axe";
import { ClosableAlert } from ".";

describe("<ClosableAlert />", () => {
  it("closes when you click the close button", async () => {
    const { getByRole, queryByRole } = render(
      <ClosableAlert variant="info">Test text</ClosableAlert>
    );
    act(() => {
      getByRole("button").click();
    });
    expect(queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls the onClose prop when closed", () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <ClosableAlert variant="info" onClose={handleClick}>
        Test text
      </ClosableAlert>
    );
    act(() => {
      getByRole("button").click();
    });
    expect(handleClick).toHaveBeenCalled();
  });

  it("is accessible", async () => {
    const { container } = render(
      <ClosableAlert variant="info">Test text</ClosableAlert>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
