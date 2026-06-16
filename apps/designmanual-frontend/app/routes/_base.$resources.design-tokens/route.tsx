import {
  Box,
  ClientOnly,
  Flex,
  Heading,
  Separator,
  Stack,
  Text,
} from "@vygruppen/spor-react";

import { useHeaderOffset } from "~/root/layout/HeaderOffsetContext";

import { RightSidebar } from "../_base/right-sidebar/RightSidebar";
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
  const headerOffset = useHeaderOffset();

  const fallback = (
    <Flex gap="6" flexDirection="column" display="none">
      <Heading as="h2">Color tokens</Heading>
      <Heading as="h2">Styles</Heading>
      <Heading as="h2">Pallette</Heading>
      <Heading as="h2">Rounding</Heading>
      <Heading as="h2">Typography</Heading>
      <Heading as="h2">Spacing</Heading>
      <Heading as="h2">Rounding</Heading>
      <Heading as="h2">Shadows</Heading>
      <Heading as="h2">Outlines</Heading>
      <Heading as="h2">Breakpoints</Heading>
      <Heading as="h2">Animation</Heading>
      <Heading as="h2">Z-index</Heading>
    </Flex>
  );
  return (
    <Flex gap={5} justifyContent="space-between">
      <Box flex={1} minWidth={0}>
        <Box paddingBottom="8">
          <Heading as="h1" variant="xl-display" marginBottom={2}>
            Design tokens
          </Heading>
          <Stack padding={3}>
            <Text variant="sm">
              Design tokens are all the values needed to construct and maintain
              a design system. These values can represent everything defined by
              the design: a color as an RGB value, opacity as a number, a simple
              animation as Bezier coordinates. We use tokens instead of
              hard-coded values to ensure flexibility and consistency across all
              product experiences.
            </Text>
            <Text variant="sm">
              Design tokens are directly integrated into our component library.
              They cover the various options for weights, color themes,
              component states, and more.
            </Text>
          </Stack>

          <Flex gap="6" alignItems="end">
            <BrandSwitcher />
            <LightmodeSwitch />
          </Flex>

          <Separator marginBottom={8} marginTop={4} />
          <ClientOnly fallback={fallback}>
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

        <Box
          width="20%"
          display="none"
          position="fixed"
          overflow="auto"
          right={0}
          paddingLeft={1}
          paddingTop={3}
          top={`${headerOffset}px`}
          transition="all .3s linear"
          height={`calc(100vh - ${headerOffset}px)`}
          css={{
            [`@media screen and (min-width: 1110px)`]: {
              display: "block",
            },
          }}
        >
          <RightSidebar />
        </Box>
      </Box>
      <Box
        width="20%"
        display="none"
        css={{
          [`@media screen and (min-width: 1110px)`]: {
            display: "block",
          },
        }}
      />
    </Flex>
  );
}
