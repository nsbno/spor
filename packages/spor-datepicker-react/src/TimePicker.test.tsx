import { Time } from "@internationalized/date";
import { render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { axe } from "vitest-axe";
import { TimePicker } from "./TimePicker";

describe("<TimePicker />", () => {
  it("is accessible", async () => {
    const { container } = render(<TimePicker />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("jumps backwards as expected", () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker value={new Time(13, 3)} />
    );
    const timeEl = getByRole("group");
    const backwardsButton = getByLabelText("Bakover 5 minutter");
    expect(timeEl.textContent).toBe("13:03");
    act(() => {
      backwardsButton.click();
    });
    expect(timeEl.textContent).toBe("13:00");
    act(() => {
      backwardsButton.click();
    });
    expect(timeEl.textContent).toBe("12:55");
  });
  it("jumps forwards as expected", () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker value={new Time(13, 53)} />
    );
    const timeEl = getByRole("group");
    const forwardsButton = getByLabelText("Fremover 5 minutter");
    expect(timeEl.textContent).toBe("13:53");
    act(() => {
      forwardsButton.click();
    });
    expect(timeEl.textContent).toBe("13:55");
    act(() => {
      forwardsButton.click();
    });
    expect(timeEl.textContent).toBe("14:00");
  });
  it("jumps backwards as expected when stepGranularity is set", () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker value={new Time(13, 3)} stepGranularity={15} />
    );
    const timeEl = getByRole("group");
    const backwardsButton = getByLabelText("Bakover 15 minutter");
    expect(timeEl.textContent).toBe("13:03");
    act(() => {
      backwardsButton.click();
    });
    expect(timeEl.textContent).toBe("13:00");
    act(() => {
      backwardsButton.click();
    });
    expect(timeEl.textContent).toBe("12:45");
  });
  it("jumps forwards as expected when stepGranularity is set", () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker value={new Time(13, 49)} stepGranularity={15} />
    );
    const timeEl = getByRole("group");
    const forwardsButton = getByLabelText("Fremover 15 minutter");
    expect(timeEl.textContent).toBe("13:49");
    act(() => {
      forwardsButton.click();
    });
    expect(timeEl.textContent).toBe("14:00");
    act(() => {
      forwardsButton.click();
    });
    expect(timeEl.textContent).toBe("14:15");
  });
});
