import { useClipboard } from "@chakra-ui/react";
import {
  CopyOutline18Icon,
  DownloadOutline18Icon,
  SuccessOutline18Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Card,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { memo, useMemo } from "react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { toTitleCase } from "~/utils/stringUtils";
import { NotFoundIllustration } from "../../features/illustrations/NotFoundIllustration";
import { SearchFilter, useSearchFilter } from "./SearchFilterContext";
import {
  IconMetadata,
  IconsByCategory,
  getIconByImportName,
  iconsByCategory,
} from "./iconsData";

/**
 * Shows the current search results
 */
export const SearchResults = () => {
  const filteredCategories = useSearchResults();
  if (hasNoHits(filteredCategories)) {
    return <NoHits />;
  }
  return (
    <Stack spacing={9} marginTop={4}>
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
  return Object.entries(iconsByCategory).reduce((prev, [category, icons]) => {
    prev[category] = icons.filter(
      (icon) =>
        matchesSize(searchFilter.size, icon) &&
        matchesVariant(searchFilter.variant, icon) &&
        matchesSearchString(searchFilter.searchString, icon)
    );
    return prev;
  }, {} as IconsByCategory);
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
  Object.values(filteredCategories).flatMap((icons) => icons).length === 0;

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
        Ingen matchende ikoner funnet
      </Heading>
    </Box>
  );
};

const getCategoryDisplayName = (category: string) => {
  switch (category) {
    case "communication":
      return "Kommunikasjon";
    case "feedback":
      return "Tilbakemelding";
    case "layout":
      return "Layout";
    case "map":
      return "Kart";
    case "misc":
      return "Diverse";
    case "navigation":
      return "Navigasjon";
    case "onboard-service":
      return "Tjenester om bord";
    case "payment":
      return "Betaling";
    case "social-media":
      return "Sosiale medier";
    case "transportation":
      return "Transport";
    case "travel":
      return "Reise";
    default:
      return "Diverse";
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
    <Stack spacing={2}>
      <LinkableHeading as="h2" variant="sm">
        {title}
      </LinkableHeading>
      <SimpleGrid columns={[2, 3, 5, 6]} spacing={3}>
        {icons.map((icon) => (
          <MemoedIconBox key={icon.importName} icon={icon} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

type IconBoxProps = {
  icon: IconMetadata;
};
function IconBox({ icon }: IconBoxProps) {
  const { onCopy, hasCopied } = useClipboard(icon.importName);
  const IconComponent = getIconByImportName(icon.importName);
  return (
    <Card
      display="flex"
      colorScheme="grey"
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
      <IconComponent marginTop={1} aria-label={icon.name} />
      <Flex justifyContent="flex-end" width="100%">
        <IconButton
          as="a"
          href={`/ressurser/ikoner/${icon.category}/${icon.fileName}`}
          download
          variant="ghost"
          icon={<DownloadOutline18Icon />}
          size="sm"
          aria-label="Last ned SVG"
          title="Last ned SVG"
          borderRadius="sm"
        />
        <IconButton
          variant="ghost"
          icon={hasCopied ? <SuccessOutline18Icon /> : <CopyOutline18Icon />}
          size="sm"
          aria-label="Kopier navn"
          title="Kopier navn"
          onClick={onCopy}
          borderRadius="sm"
        />
      </Flex>
    </Card>
  );
}

const MemoedIconBox = memo(IconBox);
