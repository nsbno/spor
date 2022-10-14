import "@testing-library/jest-dom";
import { expect, vi } from "vitest";
import "vitest-axe/extend-expect";
import * as matchers from "vitest-axe/matchers";

expect.extend(matchers);
window.scrollTo = vi.fn() as any;
