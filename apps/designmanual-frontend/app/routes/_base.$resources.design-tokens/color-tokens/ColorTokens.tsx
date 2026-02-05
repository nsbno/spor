import { BoxProps, Stack, Text } from "@vygruppen/spor-react";

import { LinkableHeading } from "~/features/portable-text/LinkableHeading";

import { SharedTokenLayout } from "../SharedTokenLayout";
import { ColorTable } from "./ColorTable";
import { PaletteTable } from "./PaletteTable";

export function ColorTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Color tokens"
      description={
        <Text>
          Our main colors are the ones we use the most. These are used for,
          among other things, background colors, in core functionality,
          navigation, and buttons – to create a framework for our services. By
          using mostly these colors, we create a unity and recognizability
          across our digital platforms.
        </Text>
      }
    >
      <Stack gap="6">
        <ColorTable colorKey="bg" name="Background" />
        <ColorTable colorKey="text" name="Text" />
        <ColorTable colorKey="icon" name="Icon" />
        <ColorTable colorKey="outline" name="Outline" />
        <ColorTable colorKey="surface" name="Surface" />

        <LinkableHeading as="h2" variant="xl-display" marginBottom={2}>
          Styles
        </LinkableHeading>
        <ColorTable colorKey="core" name="Core" />
        <ColorTable colorKey="brand" name="Brand" />
        <ColorTable colorKey="accent" name="Accent" />
        <ColorTable colorKey="floating" name="Floating" />
        <ColorTable colorKey="ghost" name="Ghost" />
        <ColorTable colorKey="alert" name="Alert" />
        <ColorTable colorKey="badge" name="Badge" />

        <LinkableHeading as="h2" variant="xl-display" marginBottom={2}>
          Pallette
        </LinkableHeading>

        <PaletteTable colorKey="grey" />
        <PaletteTable colorKey="green" />
        <PaletteTable colorKey="blue" />
        <PaletteTable colorKey="yellow" />
        <PaletteTable colorKey="orange" />
        <PaletteTable colorKey="red" />
        <PaletteTable colorKey="white" />
        <PaletteTable colorKey="black" />
      </Stack>
    </SharedTokenLayout>
  );
}
