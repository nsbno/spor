import { useClipboard } from "@chakra-ui/react";
import {
  Box,
  CopyOutline18Icon,
  DownloadOutline18Icon,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  SuccessOutline18Icon,
  Text,
} from "@vygruppen/spor-react";
import { useMemo } from "react";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";
import { toTitleCase } from "~/utils/stringUtils";
import {
  getIconByImportName,
  IconMetadata,
  IconsByCategory,
  iconsByCategory,
} from "./iconsData";
import { NotFound } from "./NotFound";
import { useSearchFilter } from "./SearchFilterContext";

/**
 * Shows the current search results
 */
export const SearchResults = () => {
  const filteredCategories = useSearchResults();
  if (hasNoHits(filteredCategories)) {
    return <NoHits />;
  }
  return (
    <Stack spacing={9} mt={4}>
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

const useSearchResults = () => {
  const { searchFilter } = useSearchFilter();
  const filteredCategories = useMemo(
    () =>
      Object.entries(iconsByCategory).reduce((prev, [category, icons]) => {
        prev[category] = icons.filter(
          (icon) =>
            icon.size === searchFilter.size &&
            (!searchFilter.variant || searchFilter.variant === icon.modifier) &&
            icon.name
              .toLowerCase()
              .includes(searchFilter.searchString.toLowerCase())
        );
        return prev;
      }, {} as IconsByCategory),
    [searchFilter]
  );
  return filteredCategories;
};

const hasNoHits = (filteredCategories: IconsByCategory) =>
  Object.values(filteredCategories).flatMap((icons) => icons).length === 0;

const NoHits = () => {
  return (
    <Box>
      <Heading as="h2" textStyle="sm" fontWeight="bold" mb={7}>
        Ingen matchende ikoner funnet
      </Heading>
      <NotFound mx="auto" />
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
      <LinkableHeading as="h2" textStyle="sm">
        {title}
      </LinkableHeading>
      <SimpleGrid columns={[2, 3, 5, 6]} spacing={3}>
        {icons.map((icon) => (
          <IconBox key={icon.importName} icon={icon} />
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
  const { searchFilter } = useSearchFilter();
  const showVariantLabel = searchFilter.variant === "" && icon.modifier;
  return (
    <Flex
      border="1px solid"
      borderColor="alias.darkGrey"
      borderRadius="sm"
      flexDirection="column"
      alignItems="center"
      pt={1}
      px={1}
      pb={1}
    >
      <Text textStyle="xs" mb={1}>
        {toTitleCase(icon.name)}
        {showVariantLabel && ` (${toTitleCase(icon.modifier)})`}
      </Text>
      <IconComponent />
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
        />
        <IconButton
          variant="ghost"
          icon={hasCopied ? <SuccessOutline18Icon /> : <CopyOutline18Icon />}
          size="sm"
          aria-label="Kopier navn"
          title="Kopier navn"
          onClick={onCopy}
        />
      </Flex>
    </Flex>
  );
}
