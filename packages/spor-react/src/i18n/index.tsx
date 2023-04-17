import { initLobot } from "@leile/lobo-t";

export enum Language {
  NorwegianBokmal = "nb",
  NorwegianNynorsk = "nn",
  Swedish = "sv",
  English = "en",
}

export const { LanguageProvider, useTranslation } = initLobot<typeof Language>(
  Language.NorwegianBokmal
);

type LanguageObject = {
  [key in Language]: string;
};
type LanguageFunction = (...args: (string | number)[]) => LanguageObject;

export type Translations = {
  [key: string]: LanguageObject | LanguageFunction;
};

/** Utility function that creates type safe text objects with useTranslation
 *
 * ```tsx
 * const texts = createTexts({
 *  example: {
 *   nb: "Eksempel",
 *   nn: "Døme",
 *   sv: "Exempel",
 *   en: "Example",
 *  }
 * })
 * ```
 */
export function createTexts<T extends Translations>(texts: T) {
  return texts;
}
