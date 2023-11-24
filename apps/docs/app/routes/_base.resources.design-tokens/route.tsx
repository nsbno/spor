import { Box, Divider, Heading, Stack, Text } from "@vygruppen/spor-react";
import { AnimationTokens } from "~/routes/_base.resources.design-tokens/AnimationTokens";
import { BreakpointTokens } from "./BreakpointTokens";
import { ColorTokens } from "./ColorTokens";
import { OutlineTokens } from "./OutlineTokens";
import { RoundingTokens } from "./RoundingTokens";
import { ShadowTokens } from "./ShadowTokens";
import { SpacingTokens } from "./SpacingTokens";
import { TypographyTokens } from "./TypographyTokens";
import { ZIndexTokens } from "./ZIndexTokens";

export default function DesignTokensPage() {
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
      <Divider marginY={8} />
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
