export type Variant =
  | "local-train"
  | "region-train"
  | "region-express-train"
  | "long-distance-train"
  | "airport-express-train"
  | "vy-bus"
  | "local-bus"
  | "ferry"
  | "subway"
  | "tram"
  | "alt-transport"
  | "walk";

export type Size = "sm" | "md" | "lg";

export type TagType = "info" | "travel";

export type TagProps = {
  variant: Variant;
  size: Size;
  title: string;
  description?: string;
};
