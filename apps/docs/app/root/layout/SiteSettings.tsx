import { SettingsX1Fill24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  CardSelect,
  createListCollection,
  Flex,
  Heading,
  Select,
  SelectItem,
  Stack,
  Switch,
  Text,
  useColorMode,
} from "@vygruppen/spor-react";
import { BrandSwitcher } from "~/features/brand-switcher/BrandSwitcher";

type SiteSettingsProps = {
  showLabel: boolean;
};
export const SiteSettings = ({ showLabel }: SiteSettingsProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <CardSelect
      variant="ghost"
      size="md"
      label={showLabel ? "Settings" : ""}
      icon={<SettingsX1Fill24Icon />}
      withChevron={false}
      fontWeight="bold"
      position="relative"
      className="dark"
      marginRight={[0, 0, 0, 4]}
    >
      <Stack gap="4">
        <Heading as="h2" variant="md">
          Site settings
        </Heading>
        <Text variant="sm">
          Change the appearance of the site to suit your preferences
        </Text>
        <BrandSwitcher />
        <Switch
          id="site-settings-dark-mode"
          size="sm"
          onChange={() => toggleColorMode()}
          defaultChecked={colorMode === "dark"}
          label="Dark mode"
        />
      </Stack>
    </CardSelect>
  );
};
