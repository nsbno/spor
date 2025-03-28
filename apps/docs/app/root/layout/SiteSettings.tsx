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
      marginRight={[0, 0, 0, 4]}
    >
      <Flex
        gap={4}
        flexDirection="column"
        width={["96vw", null, null, "26ch"]}
        maxWidth={["96vw", null, null, "26ch"]}
        position={["fixed", null, null, "static"]}
        top={9}
        right={0}
        backgroundColor={["white", null, null, "transparent"]}
        borderColor={"border"}
        borderWidth={[1, null, null, 0]}
        borderRadius={"md"}
        padding={[4, null, null, null]}
        boxShadow={["md", null, null, "none"]}
        marginRight={2}
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
          <Switch
            id="site-settings-dark-mode"
            size="sm"
            onChange={() => toggleColorMode()}
            defaultChecked={colorMode === "light"}
          />
        </Stack>
      </Flex>
    </CardSelect>
  );
};
