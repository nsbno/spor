import { render } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { axe } from "vitest-axe";
import { JumpButton, PlayPauseButton, SkipButton } from ".";

describe("<PlayPauseButton />", () => {
  it("works like a button", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <PlayPauseButton size="sm" isPlaying={true} onClick={handleClick} />,
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("is accessible", async () => {
    const { container } = render(
      <PlayPauseButton size="sm" isPlaying={true} onClick={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("<SkipButtonButton />", () => {
  it("works like a button", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <SkipButton size="sm" direction="forward" onClick={handleClick} />,
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("is accessible", async () => {
    const { container } = render(
      <SkipButton size="sm" direction="forward" onClick={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("<JumpButtonButton />", () => {
  it("works like a button", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <JumpButton size="sm" direction="forward" onClick={handleClick} />,
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("is accessible", async () => {
    const { container } = render(
      <JumpButton size="sm" direction="forward" onClick={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
