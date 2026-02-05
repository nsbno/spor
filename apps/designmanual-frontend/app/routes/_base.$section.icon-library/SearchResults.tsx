import { useClipboard } from "@chakra-ui/react";
import {
  CopyOutline18Icon,
  DownloadOutline18Icon,
  SuccessOutline18Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  StaticCard,
  Text,
  useColorModeValue,
} from "@vygruppen/spor-react";
import { memo, useMemo } from "react";

import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { toTitleCase } from "~/utils/stringUtils";

import { NotFoundIllustration } from "../../features/illustrations/NotFoundIllustration";
import {
  getIconByImportName,
  IconMetadata,
  IconsByCategory,
  iconsByCategory,
} from "./iconsData";
import { SearchFilter, useSearchFilter } from "./SearchFilterContext";

/**
 * Shows the current search results
 */
export const SearchResults = () => {
  const filteredCategories = useSearchResults();
  if (hasNoHits(filteredCategories)) {
    return <NoHits />;
  }
  return (
    <Stack gap={9} marginTop={4}>
      {Object.entries(filteredCategories).map(([category, icons]) => (
        <Category
          key={category}
          title={getCategoryDisplayName(category)}
          icons={icons}
        />
      ))}
    </Stack>
  );
};

const findMatches = (searchFilter: SearchFilter) => {
  const result: IconsByCategory = {};
  for (const [category, icons] of Object.entries(iconsByCategory)) {
    result[category] = icons.filter(
      (icon) =>
        matchesSize(searchFilter.size, icon) &&
        matchesVariant(searchFilter.variant, icon) &&
        matchesSearchString(searchFilter.searchString, icon),
    );
  }
  return result;
};

const matchesSize = (size: string, icon: IconMetadata) => size === icon.size;

const matchesVariant = (variant: string, icon: IconMetadata) => {
  if (!["fill", "outline"].includes(icon.modifier)) {
    return true;
  }
  if (!variant) {
    return true;
  }
  return variant === icon.modifier;
};

const matchesSearchString = (searchString: string, icon: IconMetadata) =>
  icon.name.toLowerCase().includes(searchString.toLowerCase());

const useSearchResults = () => {
  const { searchFilter } = useSearchFilter();
  return useMemo(() => findMatches(searchFilter), [searchFilter]);
};

const hasNoHits = (filteredCategories: IconsByCategory) =>
  Object.values(filteredCategories).flat().length === 0;

const NoHits = () => {
  return (
    <Box>
      <NotFoundIllustration marginX="auto" />
      <Heading
        as="h2"
        variant="sm"
        fontWeight="bold"
        marginTop={7}
        textAlign="center"
      >
        No matching icons found. Perhaps try a different search term?
      </Heading>
    </Box>
  );
};

const getCategoryDisplayName = (category: string) => {
  switch (category) {
    case "communication": {
      return "Communication";
    }
    case "feedback": {
      return "Feedback";
    }
    case "layout": {
      return "Layout";
    }
    case "media-controller": {
      return "Media Controller";
    }
    case "map": {
      return "Map";
    }
    case "misc": {
      return "Miscellaneous";
    }
    case "navigation": {
      return "Navigation";
    }
    case "onboard-service": {
      return "Onboard service";
    }
    case "payment": {
      return "Payment";
    }
    case "social-media": {
      return "Social media";
    }
    case "transportation": {
      return "Transportation";
    }
    case "travel": {
      return "Travel";
    }
    case "cargonet": {
      return "CargoNet";
    }
    default: {
      return "Other";
    }
  }
};

type CategoryProps = {
  title: string;
  icons: IconMetadata[];
};
function Category({ title, icons }: CategoryProps) {
  if (icons.length === 0) {
    return null;
  }

  return (
    <Stack gap={2}>
      <LinkableHeading as="h2" variant="sm">
        {title}
      </LinkableHeading>
      <SimpleGrid columns={[2, 3, 5, 6]} gap={3}>
        {icons.map((icon) => (
          <MemoedIconBox key={icon.importName} icon={icon} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

const iconComponentMap = Object.fromEntries(
  Object.entries(iconsByCategory)
    .flatMap(([, icons]) => icons)
    .map((icon) => [icon.importName, getIconByImportName(icon.importName)]),
);

type IconBoxProps = {
  icon: IconMetadata;
};

function IconBox({ icon }: IconBoxProps) {
  const { copy, copied } = useClipboard({ value: icon.importName });
  const IconComponent = iconComponentMap[icon.importName];
  const colorPalette = useColorModeValue("grey", "white");
  return (
    <StaticCard
      display="flex"
      colorPalette={colorPalette}
      borderRadius="sm"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingTop={1}
      paddingX={1}
      paddingBottom={1}
    >
      <Text variant="xs" textAlign="center">
        {toTitleCase(icon.name)}
      </Text>
      <IconComponent marginTop={1} marginX="auto" aria-label={icon.name} />
      <Flex justifyContent="flex-end" width="100%">
        <IconButton
          as="a"
          download={icon.fileName}
          href={`/resources/icon-library/${icon.category}/${icon.fileName}`}
          variant="ghost"
          icon={<DownloadOutline18Icon />}
          size="sm"
          aria-label="Download SVG"
          title="Download SVG"
          borderRadius="sm"
        />
        <IconButton
          variant="ghost"
          icon={copied ? <SuccessOutline18Icon /> : <CopyOutline18Icon />}
          size="sm"
          aria-label="Copy name"
          title="Copy name"
          onClick={copy}
          borderRadius="sm"
        />
      </Flex>
    </StaticCard>
  );
}

const MemoedIconBox = memo(IconBox);
