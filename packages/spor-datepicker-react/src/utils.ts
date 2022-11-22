import { useTranslation } from "@vygruppen/spor-i18n-react";

/**
 * Returns the currently selected language as a BCF47 language tag.
 * This is useful for passing into the react-aria hooks
 */
export const useCurrentLocale = () => {
  const { language } = useTranslation();
  switch (language) {
    case "nb":
      return "no";
    case "nn":
      return "no";
    case "sv":
      return "sv";
    case "en":
      return "en";
    default:
      return "no";
  }
};
