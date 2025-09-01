import { useMatches } from "react-router";

import { ArticleHeader } from "../components/ArticleHeader";

type ArticleHeaderSerializerProps = {
  value: {
    subheading: string;
    illustration: any;
    leadShortcuts?: { items: ShortcutType[] };
  };
};

export type ShortcutType = {
  _key: string;
  linkText: string;
  anchor: string;
  title: string;
  icon: string;
  href: string;
};

export function ArticleHeaderSerializer({
  value,
}: ArticleHeaderSerializerProps) {
  const matches = useMatches();
  let mergedLoaderData = {
    title: "",
    isFallbackLanguage: false,
  };

  for (const match of matches) {
    mergedLoaderData = {
      ...mergedLoaderData,
      ...(match.data as object),
    };
  }

  return (
    <ArticleHeader
      title={mergedLoaderData.title}
      subtitle={value.subheading}
      illustration={value.illustration}
      isFallbackLanguage={mergedLoaderData.isFallbackLanguage}
    />
  );
}
