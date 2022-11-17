import { useCallback } from "react";

/** Returns a formatter for tokens, which will format any design token to the user's preferred format.
 *
 * The format should be separated by dots, and can include dashes.
 *
 * ```tsx
 * const formatter = useTokenFormatter();
 * return <h1>{formatter("font.style.xs.font-size.mobile")}</h1>;
 * ```
 */
export function useTokenFormatter() {
  return useCallback((template: string) => {
    const parts = template
      .split(".")
      .map((part) => (part.includes("-") ? `["${part}"]` : part))
      .join(".")
      .replace(/\.\[/g, "[");
    return `tokens.${parts}`;
  }, []);
}
