import { render } from "@testing-library/react";
import React from "react";
import { axe } from "vitest-axe";
import { BaseToast } from "./BaseToast";

describe("<BaseToast />", () => {
  it("is accessible in variant success", async () => {
    const { container } = render(
      <BaseToast variant="success">Test text</BaseToast>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("is accessible in variant info", async () => {
    const { container } = render(
      <BaseToast variant="info">Test text</BaseToast>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("is accessible in variant error", async () => {
    const { container } = render(
      <BaseToast variant="error">Test text</BaseToast>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
