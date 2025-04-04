import {
  Box,
  Brand,
  Heading,
  HStack,
  Separator,
  Stack,
  Tabs,
  TabsList,
  TabsTrigger,
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
import { BrandSwitcher } from "./BrandSwitcher";

export default function DesignTokensPage() {
  const { toggleColorMode } = useColorMode();
  const fetcher = useFetcher();
  const data = useMatchesData("root");
  const brand = data?.brand ?? Brand.VyDigital;

  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    const selectedTab = [Brand.VyDigital, Brand.CargoNet, Brand.VyUtvikling][
      event.currentTarget.getAttribute("data-index") as unknown as number
    ];
    const formData = new FormData();
    formData.set("brand", selectedTab);
    fetcher.submit(formData, {
      method: "post",
      action: "/",
    });
  };

  return (
    <Box paddingBottom="8">
      <Heading as="h1" variant="xl-display" marginBottom={2}>
        Design tokens
      </Heading>
      <Stack padding={3}>
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

      <BrandSwitcher />

      <Separator marginBottom={8} marginTop={4} />
      <Stack gap={9}>
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
