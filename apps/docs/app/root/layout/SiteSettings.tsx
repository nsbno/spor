import { SettingsX1Fill24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  CardSelect,
  Flex,
  Heading,
  Stack,
  Switch,
  Text,
  useColorMode,
  FormControl,
  FormLabel,
} from "@vygruppen/spor-react";
import { BrandSwitcher } from "~/features/brand-switcher/BrandSwitcher";

type SiteSettingsProps = {
  showLabel: boolean;
};
export const SiteSettings = ({ showLabel }: SiteSettingsProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const labelProps = showLabel
    ? { label: "Settings" }
    : { "aria-label": "Settings" };

  return (
    <CardSelect
      variant="ghost"
      size="md"
      icon={<SettingsX1Fill24Icon />}
      withChevron={false}
      fontWeight="bold"
      {...labelProps}
      position={"relative"}
      className="dark"
    >
      <Flex
        gap={4}
        flexDirection="column"
        maxWidth="30ch"
        width={["100%", "30ch"]}
      >
        <Box>
          <Heading as="h2" variant="md">
            Site settings
          </Heading>
          <Text variant="sm">
            Change the appearance of the site to suit your preferences
          </Text>
        </Box>
        <Stack gap={3}>
          <BrandSwitcher />
          <FormControl display="flex" alignItems="center" gap={3}>
            <FormLabel margin="0" htmlFor="site-settings-dark-mode">
              Dark mode
            </FormLabel>
            <Switch
              id="site-settings-dark-mode"
              size="sm"
              onChange={() => toggleColorMode()}
              defaultChecked={colorMode === "dark"}
            />
          </FormControl>
        </Stack>
      </Flex>
    </CardSelect>
  );
};
