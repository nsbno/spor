import { render } from "@testing-library/react";
import React from "react";
import { axe } from "vitest-axe";
import { BaseAlert } from "./BaseAlert";

describe("<BaseAlert />", () => {
  it("is accessible as variant='success'", async () => {
    const { container } = render(
      <BaseAlert variant="success">Test text</BaseAlert>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("is accessible as variant='info'", async () => {
    const { container } = render(
      <BaseAlert variant="info">Test text</BaseAlert>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("is accessible as variant='warning'", async () => {
    const { container } = render(
      <BaseAlert variant="warning">Test text</BaseAlert>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("is accessible as variant='error'", async () => {
    const { container } = render(
      <BaseAlert variant="error">Test text</BaseAlert>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("is accessible as variant='alt-transport'", async () => {
    const { container } = render(
      <BaseAlert variant="alt-transport">Test text</BaseAlert>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
