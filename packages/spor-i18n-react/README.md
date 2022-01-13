# i18n Tools (React)

Here, you'll find tools for handling internationalization of your apps, and for all components in the `spor-react` component library.

## Installation

```bash
$ npm install @vygruppen/spor-i18n-react
```

## Usage

```tsx
import {
  Language,
  LanguageProvider,
  useTranslation,
  Translations,
} from "@vygruppen/spor-i18n-react";
```

The first thing you need to do, is to wrap your application in a `LanguageProvider`. If you're using the `SporProvider` from `@vygruppen/spor-react`, this is already done for you.

The `LanguageProvider` requires you to specify a `language` prop with a value from the `Language` enum.

```tsx
import { Language, LanguageProvider } from "@vygruppen/spor-i18n-react";

const Root = () => (
  <LanguageProvider language={Language.English}>
    <App />
  </LanguageProvider>
);
```

> ### Supported languages
>
> Currently, we support Norwegian (bokmål), Swedish and English. If you need other languages, please contact the Spor team.

It's up to you to specify and handle any "current language" state, either by getting it from an API, or saving it in local storage, for instance.

Once you've done this, you can now translate strings easily. Let's move to an example component.

```tsx
const ExampleComponent = () => {
  return <Box>I need to be translated</Box>;
};
```

In order to translate this, we need to first write up the texts and translations. Let's create an object:

```tsx
import { Translations } from "@vygruppen/spor-i18n-react";
const ExampleComponent = () => {
  return <Box>I need to be translated</Box>;
};
const texts: Translations = {
  iAmTranslated: {
    nb: "Jeg er oversatt",
    en: "I am translated",
    sv: "Jag är översatt",
  },
};
```

Now, we call the `useTranslation` hook, and destructure out the translation function `t`. This is the one you pass your texts to.

This is the final result:

```tsx
import { useTranslation, Translations } from "@vygruppen/spor-i18n-react";
const ExampleComponent = () => {
  const { t } = useTranslation();
  return <Box>{t(texts.iAmTranslated)}</Box>;
};
const texts: Translations = {
  iAmTranslated: {
    nb: "Jeg er oversatt",
    en: "I am translated",
    sv: "Jag är översatt",
  },
};
```

Note that you can nest these `texts` objects as deep as you like. The values of each language can also be a function, if you need to interpolate some values:

```tsx
const texts: Translations = {
  greeting: {
    nb: (name) => `Hei ${name}!`,
    en: (name) => `Hello ${name}!`,
    sv: (name) => `Hej ${name}!`,
  },
};
```

For further documentation, please refer to the documentation of the library supporting our implementation, [`@leile/lobo-t`](https://github.com/leile/lobo-t).

## Development

Please refer to the root readme for development notes.
