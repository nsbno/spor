import { render } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { ActionToast } from "./ActionToast";

describe("<ActionToast />", () => {
  it("renders a button", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <ActionToast
        variant="success"
        onClick={handleClick}
        buttonText="Click me"
      >
        Test text
      </ActionToast>
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
    expect(getByRole("button")).toHaveTextContent("Click me");
  });
});
