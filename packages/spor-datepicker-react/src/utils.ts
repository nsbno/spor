import { useTranslation } from "@vygruppen/spor-i18n-react";

/**
 * Returns the currently selected language as a BCF47 language tag.
 * This is useful for passing into the react-aria hooks
 */
export const useCurrentLocale = () => {
  const { language } = useTranslation();
  switch (language) {
    case "nb":
      return "nb-NO";
    case "sv":
      return "sv-SE";
    case "en":
      return "en-UK";
    default:
      return "nb-NO";
  }
};
