import { act, render } from "@testing-library/react";
import React from "react";
import { axe } from "vitest-axe";
import { Accordion } from "./Accordion";
import { ExpandableItem } from "./Expandable";

describe("<Accordion />", () => {
  it("is accessible", async () => {
    const { container, getByRole } = render(
      <Accordion>
        <ExpandableItem title="Title">Content</ExpandableItem>
      </Accordion>,
    );
    await act(async () => {
      expect(await axe(container)).toHaveNoViolations();
      getByRole("button").click();
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
