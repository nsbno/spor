import { describe, expect, test } from "vitest";

import { createComponentName } from "../bin/createComponentName.ts";

describe("createComponentName", () => {
  test.each([
    [{ name: "vy", size: "30" }, "Vy30Icon"],
    [{ name: "cafe", modifier: "fill", size: "18" }, "CafeFill18Icon"],
    [{ name: "ærnes-båt", size: "18" }, "ÆrnesBåt18Icon"],
    [
      {
        name: "backward",
        modifier: "15 (media controller)-fill",
        size: "18",
      },
      "Backward15MediaControllerFill18Icon",
    ],
    [
      { name: "contract", modifier: "2-outline", size: "24" },
      "Contract2Outline24Icon",
    ],
  ])("matches the existing output for %o", (metadata, expected) => {
    expect(createComponentName(metadata)).toBe(expected);
  });
});
