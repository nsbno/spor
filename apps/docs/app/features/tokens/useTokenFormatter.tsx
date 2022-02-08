import { useCallback } from "react";
import { useUserPreferences } from "../user-preferences/UserPreferencesContext";

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
  const { userPreferences } = useUserPreferences();
  return useCallback(
    (template: string) => {
      switch (userPreferences.tokensFormat) {
        case "javascript":
          const parts = template
            .split(".")
            .map((part) => (part.includes("-") ? `["${part}"]` : part))
            .join(".")
            .replace(/\.\[/g, "[");
          return `tokens.${parts}.value`;
        case "css":
          return `--${template.replace(/\./g, "-")}`;
        case "scss":
          return `$${template.replace(/\./g, "-")}`;
        case "less":
          return `@${template.replace(/\./g, "-")}`;
      }
    },
    [userPreferences.tokensFormat]
  );
}
