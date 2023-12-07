import { render } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { ClosableToast } from "./ClosableToast";

describe("<ClosableToast />", () => {
  it("renders a button", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <ClosableToast variant="success" onClose={handleClick}>
        Test text
      </ClosableToast>,
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
  });
});
