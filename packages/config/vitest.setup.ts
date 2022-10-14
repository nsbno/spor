import "@testing-library/jest-dom";
import { expect, vi } from "vitest";
import "vitest-axe/extend-expect";
import * as matchers from "vitest-axe/matchers";
import "vitest-canvas-mock";

expect.extend(matchers);
window.scrollTo = vi.fn() as any;
