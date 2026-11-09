import { describe, expect, it } from "vitest";

import { fontFaces } from "../src/theme/font-faces";

describe("fontFaces", () => {
  it("uses the bundled font assets without remote font requests", () => {
    expect(fontFaces).toContain("VySansVariable-Regular.woff2");
    expect(fontFaces).toContain("VySans-MediumItalic.woff2");
    expect(fontFaces).not.toMatch(/https?:\/\//);
    expect(fontFaces).not.toContain("Vy Display");
    expect(fontFaces.match(/@font-face/g)).toHaveLength(2);
  });

  it("declares only the weights supported by each font", () => {
    expect(fontFaces).toMatch(/font-style: normal;\s+font-weight: 300 700;/);
    expect(fontFaces).toMatch(/font-style: italic;\s+font-weight: 500;/);
  });
});
