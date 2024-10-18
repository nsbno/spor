import React, { createContext, useContext } from "react";

export enum Language {
  NorwegianBokmal = "nb",
  NorwegianNynorsk = "nn",
  Swedish = "sv",
  English = "en",
}

export type TranslationObject = {
  [key in Language]: string | React.ReactElement;
};
type TranslationFunction = (
  ...args: Array<string | number>
) => TranslationObject;

type Translation = TranslationObject | TranslationFunction;
export type Translations = {
  [key: string]: Translation | Translations;
};

const LanguageContext = createContext<Language | undefined>(undefined);
type LanguageProviderProps = {
  language: Language;
  children: React.ReactElement;
};

/**
 * A language provider component.
 *
 * This component should wrap your entire application. It will provide the language to all components that use it.
 *
 * This is done by the SporProvider component, so most likely, you won't need to use it directly, unless you want to use a specific language for a specific part of your application.
 *
 * ```tsx
 * import { LanguageProvider, Language } from "@vygruppen/spor-react";
 *
 * const App = () => {
 *   return (
 *     <LanguageProvider language={Language.NorwegianBokmal}>
 *       <Routes />
 *     </LanguageProvider>
 *   );
 * }
 * ```
 *
 */
export function LanguageProvider({
  language,
  children,
}: LanguageProviderProps) {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Gets the language from the language context.
 *
 * @internal
 */
function useLanguage() {
  const language = useContext(LanguageContext);
  if (!language) {
    throw new Error("Please wrap your application in a LanguageProvider");
  }
  return language;
}

/**
 * A hook that returns translation utilities. Typically used to translate text.
 *
 * ```tsx
 * const Example = () => {
 *   const { t } = useTranslation();
 *   return <p>{t(texts.greeting)}</p>;
 * }
 * const texts = {
 *   greeting: {
 *     nb: "Hei",
 *     nn: "Hei",
 *     sv: "Hej",
 *     en: "Hello",
 *   }
 * }
 * ```
 *
 * You can also use it to fetch the current language:
 *
 * ```tsx
 * const Example = () => {
 *   const { language } = useTranslation();
 *   return <p>{language}</p>;
 * };
 * ```
 */
export function useTranslation() {
  const language = useLanguage();
  const t = (text: TranslationObject) => {
    return text[language] as string;
  };
  return { t, language } as const;
}

/** Utility function that creates type safe text objects with useTranslation
 *
 * ```tsx
 * const texts = createTexts({
 *  example: {
 *   nb: "Eksempel",
 *   nn: "Døme",
 *   sv: "Exempel",
 *   en: "Example",
 *  },
 *  another: {
 *    example: {
 *      nb: <strong>Eksempel</strong>,
 *      nn: <strong>Døme</strong>,
 *      sv: <strong>Exempel</strong>,
 *      en: <strong>Example</strong>,
 *    }
 *  }
 * })
 * ```
 */
export function createTexts<T extends Translations>(texts: T) {
  return texts;
}
