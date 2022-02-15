import * as icons from "@vygruppen/spor-icon-react";
import iconsMetadata from "@vygruppen/spor-icon-react/dist/metadata.json";

type IconKey = keyof typeof icons;
type OriginalIconMetadataImportType = Record<
  IconKey,
  Omit<IconMetadata, "importName">
>;
export type IconsByCategory = {
  [key: string]: IconMetadata[];
};
export type IconMetadata = {
  category: string;
  importName: IconKey;
  modifier: string;
  name: string;
  size: string;
  fileName: string;
};

export const iconsByCategory = Object.entries(
  iconsMetadata as unknown as OriginalIconMetadataImportType
).reduce((prev, [importName, metadata]) => {
  const category = metadata.category || "misc";
  if (!prev[category]) {
    prev[category] = [];
  }
  prev[category].push({
    importName: importName as IconKey,
    ...metadata,
  });
  return prev;
}, {} as IconsByCategory);

/**
 * Returns the icon component for a given import name, or a noop if not found.
 */
export const getIconByImportName = (icon: IconKey) => {
  const match = icons[icon];
  if (match) {
    return match;
  }
  console.warn(`Could not find icon with name ${icon}`);
  return () => null;
};
