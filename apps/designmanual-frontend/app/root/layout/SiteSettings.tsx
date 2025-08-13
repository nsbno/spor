import { SettingsX1Fill24Icon } from "@vygruppen/spor-icon-react";
import {
  CardSelect,
  CardSelectContent,
  CardSelectTrigger,
  Heading,
  Stack,
  Switch,
  Text,
  useColorMode,
} from "@vygruppen/spor-react";

import { BrandSwitcher } from "~/features/brand-switcher/BrandSwitcher";

export const SiteSettings = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <CardSelect>
      <CardSelectTrigger
        icon={<SettingsX1Fill24Icon />}
        variant="ghost"
        withChevron={false}
        fontWeight={"bold"}
        className="light"
        minWidth="auto"
        title="Site settings"
      >
        <Text display={{ base: "none", lg: "block" }}>Settings</Text>
      </CardSelectTrigger>
      <CardSelectContent>
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
      </CardSelectContent>
    </CardSelect>
  );
};
