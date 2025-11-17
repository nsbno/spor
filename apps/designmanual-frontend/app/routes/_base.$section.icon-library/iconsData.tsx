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

export const iconsByCategory = (() => {
  const result: IconsByCategory = {};
  const entries = Object.entries(
    iconsMetadata as unknown as OriginalIconMetadataImportType,
  );
  for (const [importName, metadata] of entries) {
    const category = metadata.category || "misc";
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push({
      importName: importName as IconKey,
      ...metadata,
    });
  }
  return result;
})();

/**
 * Returns the icon component for a given import name, or a noop if not found.
 */
const NoopIcon = () => null;

export const getIconByImportName = (icon: IconKey) => {
  const match = icons[icon];
  if (match) {
    return match;
  }
  console.warn(`Could not find icon with name ${icon}`);
  return NoopIcon;
};
