import {
  Box,
  ClientOnly,
  ContentLoader,
  Flex,
  Heading,
  Separator,
  Stack,
  Text,
} from "@vygruppen/spor-react";

import { AnimationTokens } from "./AnimationTokens";
import { BrandSwitcher } from "./BrandSwitcher";
import { BreakpointTokens } from "./BreakpointTokens";
import { ColorTokens } from "./color-tokens/ColorTokens";
import { LightmodeSwitch } from "./LightmodeSwitch";
import { OutlineTokens } from "./OutlineTokens";
import { RoundingTokens } from "./RoundingTokens";
import { ShadowTokens } from "./ShadowTokens";
import { SpacingTokens } from "./SpacingTokens";
import { TypographyTokens } from "./TypographyTokens";
import { ZIndexTokens } from "./ZIndexTokens";

export default function DesignTokensPage() {
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

      <Flex gap="6" alignItems="end">
        <BrandSwitcher />
        <LightmodeSwitch />
      </Flex>

      <Separator marginBottom={8} marginTop={4} />
      <ClientOnly>
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
      </ClientOnly>
    </Box>
  );
}
