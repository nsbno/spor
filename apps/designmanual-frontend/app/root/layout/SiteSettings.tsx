import { SettingsX1Outline24Icon } from "@vygruppen/spor-icon-react";
import {
  CardSelect,
  CardSelectContent,
  CardSelectTrigger,
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
        icon={<SettingsX1Outline24Icon />}
        variant="ghost"
        withChevron={false}
        fontWeight="bold"
        minWidth="auto"
        title="Site settings"
      >
        <Text display={{ base: "none", lg: "block" }}>Appearance</Text>
      </CardSelectTrigger>
      <CardSelectContent>
        <Stack gap="4">
          <Text variant="sm">Change the appearance of the site</Text>
          <Switch
            id="site-settings-dark-mode"
            size="sm"
            onChange={() => toggleColorMode()}
            defaultChecked={colorMode === "dark"}
            label="Dark mode"
          />
          <BrandSwitcher />
        </Stack>
      </CardSelectContent>
    </CardSelect>
  );
};
