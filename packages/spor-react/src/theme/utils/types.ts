export type State =
  | "default"
  | "hover"
  | "active"
  | "focus"
  | "selected"
  | "invalid"
  | "disabled";

export type Subset<T, U extends T> = T extends U ? T : never;