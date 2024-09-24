import tokens from "@vygruppen/spor-design-tokens";
import {
  BoxProps,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { SharedTokenLayout } from "../SharedTokenLayout";
import { useTokenAlias } from "./utils";
import { ColorGrid } from "./ColorGrid";
import { ColorGridDefault } from "./ColorGridDefault";

export function ColorTokens(props: BoxProps) {
  const elements = {
    bg: [
      useColorModeValue("bg.default.light", "bg.default.dark"),
      useColorModeValue("bg.secondary.light", "bg.secondary.dark"),
      useColorModeValue("text.tertiary.light", "text.tertiary.dark"),
    ],
    text: [
      useColorModeValue("text.default.light", "text.default.dark"),
      useColorModeValue("text.secondary.light", "text.secondary.dark"),
      useColorModeValue("text.tertiary.light", "text.tertiary.dark"),
      useColorModeValue("text.inverted.light", "text.inverted.dark"),
      useColorModeValue("text.highlight.light", "text.highlight.dark"),
      useColorModeValue("text.disabled.light", "text.disabled.dark"),
    ],
    icon: [
      useColorModeValue("icon.default.light", "icon.default.dark"),
      useColorModeValue("icon.secondary.light", "icon.secondary.dark"),
      useColorModeValue("icon.inverted.light", "icon.inverted.dark"),
      useColorModeValue("icon.highlight.light", "icon.highlight.dark"),
      useColorModeValue("icon.disabled.light", "icon.disabled.dark"),
    ],
    outline: [
      useColorModeValue("outline.default.light", "outline.default.dark"),
      useColorModeValue("outline.focus.light", "outline.focus.dark"),
      useColorModeValue("outline.error.light", "outline.error.dark"),
      useColorModeValue("outline.inverted.light", "outline.inverted.dark"),
      useColorModeValue("outline.disabled.light", "outline.disabled.dark"),
    ],
    surface: [
      useColorModeValue("surface.default.light", "surface.default.dark"),
      useColorModeValue("surface.secondary.light", "surface.secondary.dark"),
      useColorModeValue("surface.tertiary.light", "surface.tertiary.dark"),
      useColorModeValue("surface.disabled.light", "surface.disabled.dark"),
    ],
  };

  const styles = {
    base: [
      useColorModeValue(
        "base.outline.default.light",
        "base.outline.default.dark",
      ),
      useColorModeValue("base.outline.hover.light", "base.outline.hover.dark"),
      useColorModeValue(
        "base.surface.active.light",
        "base.surface.active.dark",
      ),
      useColorModeValue("base.text.light", "base.text.dark"),
      useColorModeValue("base.icon.light", "base.icon.dark"),
    ],
    brand: [
      useColorModeValue(
        "brand.surface.default.light",
        "brand.surface.default.dark",
      ),
      useColorModeValue(
        "brand.surface.hover.light",
        "brand.surface.hover.dark",
      ),
      useColorModeValue(
        "brand.surface.active.light",
        "brand.surface.active.dark",
      ),
      useColorModeValue("brand.text.light", "brand.text.dark"),
      useColorModeValue("brand.icon.light", "brand.icon.dark"),
    ],
    accent: [
      useColorModeValue(
        "accent.surface.default.light",
        "accent.surface.default.dark",
      ),
      useColorModeValue(
        "accent.surface.hover.light",
        "accent.surface.hover.dark",
      ),
      useColorModeValue(
        "accent.surface.active.light",
        "accent.surface.active.dark",
      ),
      useColorModeValue("accent.text.light", "accent.text.dark"),
      useColorModeValue("accent.icon.light", "accent.icon.dark"),
      useColorModeValue("accent.bg.light", "accent.bg.dark"),
    ],
    floating: [
      useColorModeValue(
        "floating.surface.default.light",
        "floating.surface.default.dark",
      ),
      useColorModeValue(
        "floating.surface.hover.light",
        "floating.surface.hover.dark",
      ),
      useColorModeValue(
        "floating.surface.active.light",
        "floating.surface.active.dark",
      ),
      useColorModeValue(
        "floating.outline.default.light",
        "floating.outline.default.dark",
      ),
      useColorModeValue(
        "floating.outline.hover.light",
        "floating.outline.hover.dark",
      ),
      useColorModeValue("floating.text.light", "floating.text.dark"),
      useColorModeValue("floating.icon.light", "floating.icon.dark"),
    ],
  };

  const bgColors = elements.bg.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  const textColors = elements.text.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  const iconColors = elements.icon.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  const outlineColors = elements.outline.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  const baseColors = styles.base.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  const brandColors = styles.brand.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  const accentColors = styles.accent.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  const floatingColors = styles.floating.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));

  type Palette = {
    [key: string]: string[];
  };

  const mergedPalette = Object.values(tokens.color.palette as Palette)
    .map((scale) => Object.values(scale))
    .flat()
    .filter((color) => color.length > 1);

  return (
    <SharedTokenLayout
      {...props}
      title="Colors"
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
      <Stack gap={5}>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Background
          </LinkableHeading>
          <ColorGrid colors={bgColors} />
        </Flex>

        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Text
          </LinkableHeading>
          <ColorGrid colors={textColors} />
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Icon
          </LinkableHeading>
          <ColorGrid colors={iconColors} />
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Outline
          </LinkableHeading>
          <ColorGrid colors={outlineColors} />
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Base
          </LinkableHeading>
          <ColorGrid colors={baseColors} />
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Brand
          </LinkableHeading>
          <ColorGrid colors={brandColors} />
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Accent
          </LinkableHeading>
          <ColorGrid colors={accentColors} />
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md" fontWeight="bold">
            Floating
          </LinkableHeading>
          <ColorGrid colors={floatingColors} />
        </Flex>

        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="md">
            Complete palette
          </LinkableHeading>
          <ColorGridDefault colors={mergedPalette} />
        </Flex>
      </Stack>
    </SharedTokenLayout>
  );
}
