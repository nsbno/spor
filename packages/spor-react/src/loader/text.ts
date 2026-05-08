import { createTexts, useTranslation } from "@/i18n";

export const useGetLoadingText = () => {
  const { t } = useTranslation();
  return t(loadingText.loading);
};

const loadingText = createTexts({
  loading: {
    en: "Loading",
    nb: "Laster",
    nn: "Lastar",
    sv: "Laddar",
  },
});
