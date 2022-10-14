import { render } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { axe } from "vitest-axe";
import { Button } from ".";

describe("<Button />", () => {
  it("works like a button", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button variant="primary" onClick={handleClick}>
        Click me
      </Button>
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("is accessible", async () => {
    const { container } = render(<Button variant="primary">Click me</Button>);
    expect(await axe(container)).toHaveNoViolations();

  });
});
