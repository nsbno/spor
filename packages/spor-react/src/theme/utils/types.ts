export type State =
  | "default"
  | "hover"
  | "active"
  | "focus"
  | "selected"
  | "invalid"
  | "disabled"
  | "error"
  | "focus";

export type InputState = "base" | "floating" | "default";

// Helper type to extract subset of union types
export type Subset<T, U extends T> = T extends U ? T : never;
