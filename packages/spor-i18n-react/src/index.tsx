import { initLobot } from "@leile/lobo-t";

export enum Language {
  NorwegianBokmal = "nb",
  Swedish = "sv",
  English = "en",
}
export const { LanguageProvider, useTranslation } = initLobot<typeof Language>(
  Language.NorwegianBokmal
);
