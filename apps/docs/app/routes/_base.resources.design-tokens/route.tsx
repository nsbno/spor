import {
  Box,
  Brand,
  Divider,
  Heading,
  HStack,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorMode,
} from "@vygruppen/spor-react";
import { AnimationTokens } from "~/routes/_base.resources.design-tokens/AnimationTokens";
import { BreakpointTokens } from "./BreakpointTokens";
import { ColorTokens } from "./color-tokens/ColorTokens";
import { OutlineTokens } from "./OutlineTokens";
import { RoundingTokens } from "./RoundingTokens";
import { ShadowTokens } from "./ShadowTokens";
import { SpacingTokens } from "./SpacingTokens";
import { TypographyTokens } from "./TypographyTokens";
import { ZIndexTokens } from "./ZIndexTokens";
import { useFetcher } from "@remix-run/react";
import { useMatchesData } from "~/utils/useMatchesData";

export default function DesignTokensPage() {
  const { toggleColorMode } = useColorMode();
  const fetcher = useFetcher();
  const data = useMatchesData("root");
  const brand = data?.brand ?? Brand.VyDigital;

  return (
    <Box>
      <Heading as="h1" variant="xl-display" marginBottom={2}>
        Design tokens
      </Heading>
      <Stack spacing={3}>
        <Text variant="sm">
          Design tokens are all the values needed to construct and maintain a
          design system. These values can represent everything defined by the
          design: a color as an RGB value, opacity as a number, a simple
          animation as Bezier coordinates. We use tokens instead of hard-coded
          values to ensure flexibility and consistency across all product
          experiences.
        </Text>
        <Text variant="sm">
          Design tokens are directly integrated into our component library. They
          cover the various options for weights, color themes, component states,
          and more.
        </Text>
      </Stack>
      <HStack gap={5} mt={5}>
        <Stack>
          <Heading as="h2" variant="md" fontWeight="bold">
            Theme
          </Heading>
          <fetcher.Form method="post" action="/api/brand">
            <Tabs
              variant={"accent"}
              size="md"
              isFitted
              defaultValue={brand}
              onChange={(index: number) => {
                const selectedTab = [
                  Brand.VyDigital,
                  Brand.CargoNet,
                  Brand.VyUtvikling,
                ][index];
                const formData = new FormData();
                formData.set("brand", selectedTab);
                fetcher.submit(formData, {
                  method: "post",
                  action: "/",
                });
              }}
            >
              <TabList>
                <Tab>{Brand.VyDigital}</Tab>
                <Tab>{Brand.CargoNet}</Tab>
                <Tab>{Brand.VyUtvikling}</Tab>
              </TabList>
            </Tabs>
          </fetcher.Form>
        </Stack>
        <Stack>
          <Heading as="h2" variant="md" fontWeight="bold">
            Color mode
          </Heading>
          <Tabs
            variant={"accent"}
            size="md"
            isFitted
            isLazy
            onChange={() => toggleColorMode()}
          >
            <TabList>
              <Tab>Light</Tab>
              <Tab>Dark</Tab>
            </TabList>
          </Tabs>
        </Stack>
      </HStack>

      <Divider marginBottom={8} marginTop={4} />
      <Stack spacing={9}>
        <ColorTokens />
        <TypographyTokens />
        <SpacingTokens />
        <RoundingTokens />
        <ShadowTokens />
        <OutlineTokens />
        <BreakpointTokens />
        <AnimationTokens />
        <ZIndexTokens />
      </Stack>
    </Box>
  );
}
