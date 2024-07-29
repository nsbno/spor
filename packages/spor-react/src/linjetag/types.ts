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

export type TagProps = VariantProps & {
  size: Size;
  title: string;
  description?: string;
};

type DefaultVariantProps = {
  variant: Variant;
};
export type CustomVariantProps = {
  variant: "custom";
  /** When variant="custom", the foreground color of the tag */
  foregroundColor: string;
  /** When variant="custom", the background color of the tag */
  backgroundColor: string;
  /** When variant="custom", this is the icon you want to display.
   * It should be one of the other variants
   */
  customIconVariant: Variant;
};
type VariantProps = DefaultVariantProps | CustomVariantProps;
