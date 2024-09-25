import tokens from "@vygruppen/spor-design-tokens";
import {
  BoxProps,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { SharedTokenLayout } from "../SharedTokenLayout";
import { generateColorArray, Palette } from "./utils";
import { ColorGrid } from "./ColorGrid";

export function ColorTokens(props: BoxProps) {
  const elements = {
    bg: {
      title: "Background",
      values: [
        useColorModeValue("bg.default.light", "bg.default.dark"),
        useColorModeValue("bg.secondary.light", "bg.secondary.dark"),
        useColorModeValue("bg.tertiary.light", "bg.tertiary.dark"),
      ],
    },
    text: {
      title: "Text",
      values: [
        useColorModeValue("text.default.light", "text.default.dark"),
        useColorModeValue("text.secondary.light", "text.secondary.dark"),
        useColorModeValue("text.tertiary.light", "text.tertiary.dark"),
        useColorModeValue("text.inverted.light", "text.inverted.dark"),
        useColorModeValue("text.highlight.light", "text.highlight.dark"),
        useColorModeValue("text.disabled.light", "text.disabled.dark"),
      ],
    },
    icon: {
      title: "Icon",
      values: [
        useColorModeValue("icon.default.light", "icon.default.dark"),
        useColorModeValue("icon.secondary.light", "icon.secondary.dark"),
        useColorModeValue("icon.inverted.light", "icon.inverted.dark"),
        useColorModeValue("icon.highlight.light", "icon.highlight.dark"),
        useColorModeValue("icon.disabled.light", "icon.disabled.dark"),
      ],
    },
    outline: {
      title: "Outline",
      values: [
        useColorModeValue("outline.default.light", "outline.default.dark"),
        useColorModeValue("outline.focus.light", "outline.focus.dark"),
        useColorModeValue("outline.error.light", "outline.error.dark"),
        useColorModeValue("outline.inverted.light", "outline.inverted.dark"),
        useColorModeValue("outline.disabled.light", "outline.disabled.dark"),
      ],
    },
    surface: {
      title: "Surface",
      values: [
        useColorModeValue("surface.default.light", "surface.default.dark"),
        useColorModeValue("surface.secondary.light", "surface.secondary.dark"),
        useColorModeValue("surface.tertiary.light", "surface.tertiary.dark"),
        useColorModeValue("surface.disabled.light", "surface.disabled.dark"),
      ],
    },
  };

  const styles = {
    base: {
      title: "Base",
      values: [
        useColorModeValue(
          "base.outline.default.light",
          "base.outline.default.dark",
        ),
        useColorModeValue(
          "base.outline.hover.light",
          "base.outline.hover.dark",
        ),
        useColorModeValue(
          "base.surface.active.light",
          "base.surface.active.dark",
        ),
        useColorModeValue("base.text.light", "base.text.dark"),
        useColorModeValue("base.icon.light", "base.icon.dark"),
      ],
    },
    brand: {
      title: "Brand",
      values: [
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
    },
    accent: {
      title: "Accent",
      values: [
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
    },
    floating: {
      title: "Floating",
      values: [
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
    },
    ghost: {
      title: "Ghost",
      values: [
        useColorModeValue(
          "ghost.surface.hover.light",
          "ghost.surface.hover.dark",
        ),
        useColorModeValue(
          "ghost.surface.active.light",
          "ghost.surface.active.dark",
        ),
        useColorModeValue("ghost.text.light", "ghost.text.dark"),
        useColorModeValue("ghost.icon.light", "ghost.icon.dark"),
      ],
    },
  };

  const allColors = Object.values(tokens.color.palette as Palette)
    .map((scale) => Object.values(scale))
    .flat()
    .filter((color) => color.length > 1);

  const alphaColors = allColors.filter(
    (color) =>
      color.toLowerCase().includes("rgba(255, 255, 255") ||
      color.toLowerCase().includes("rgba(0, 0, 0"),
  );

  const mergedPalette = allColors.filter(
    (color) =>
      !color.toLowerCase().includes("rgba(255, 255, 255") &&
      !color.toLowerCase().includes("rgba(0, 0, 0"),
  );

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
        {Object.entries(elements).map(([key, element]) => (
          <Flex flexDirection="column" gap={2} key={key}>
            <LinkableHeading as="h3" variant="md" fontWeight="bold">
              {element.title}
            </LinkableHeading>
            <ColorGrid colors={generateColorArray(element.values)} />
          </Flex>
        ))}
        <LinkableHeading as="h2" variant="xl-display" mt={3}>
          Styles
        </LinkableHeading>
        {Object.entries(styles).map(([key, element]) => (
          <Flex flexDirection="column" gap={2} key={key}>
            <LinkableHeading as="h3" variant="md" fontWeight="bold">
              {element.title}
            </LinkableHeading>
            <ColorGrid colors={generateColorArray(element.values)} />
          </Flex>
        ))}

        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="xl-display">
            Complete palette
          </LinkableHeading>
          <ColorGrid
            isVertical={false}
            colors={generateColorArray(mergedPalette)}
          />
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <LinkableHeading as="h3" variant="xl-display">
            Alpha colors
          </LinkableHeading>
          <ColorGrid
            isVertical={false}
            colors={generateColorArray(alphaColors)}
          />
        </Flex>
      </Stack>
    </SharedTokenLayout>
  );
}
