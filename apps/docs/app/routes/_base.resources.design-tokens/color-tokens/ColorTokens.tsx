import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { SharedTokenLayout } from "../SharedTokenLayout";
import { generateColorArray, Palette } from "./utils";
import { ColorGrid } from "./ColorGrid";
import { vyDigitalColors } from "../../../../../../packages/spor-react/src/theme/semantic-tokens/colors";

export function ColorTokens(props: BoxProps) {
  const elements = {
    bg: {
      title: "Background",
      values: ["bg.default", "bg.secondary", "bg.tertiary"],
    },
    text: {
      title: "Text",
      values: [
        "text",
        "text.secondary",
        "text.tertiary",
        "text.inverted",
        "text.highlight",
        "text.disabled",
      ],
    },
    icon: {
      title: "Icon",
      values: [
        "icon",
        "icon.secondary",
        "icon.inverted",
        "icon.highlight",
        "icon.disabled",
      ],
    },
    outline: {
      title: "Outline",
      values: [
        "outline",
        "outline.focus",
        "outline.error",
        "outline.inverted",
        "outline.disabled",
      ],
    },
    surface: {
      title: "Surface",
      values: [
        "surface",
        "surface.secondary",
        "surface.tertiary",
        "surface.disabled",
        "surface.color.neutral",
        "surface.color.grey",
        "surface.color.green",
        "surface.color.blue",
        "surface.color.cream",
        "surface.color.yellow",
        "surface.color.orange",
        "surface.color.red",
      ],
    },
  };

  const styles = {
    core: {
      title: "Core",
      values: [
        "core.outline",
        "core.outline.hover",
        "core.surface.active",
        "core.text",
        "core.icon",
      ],
    },
    brand: {
      title: "Brand",
      values: [
        "brand.surface",
        "brand.surface.hover",
        "brand.surface.active",
        "brand.text",
        "brand.icon",
      ],
    },
    accent: {
      title: "Accent",
      values: [
        "accent.surface",
        "accent.surface.hover",
        "accent.surface.active",
        "accent.text",
        "accent.icon",
        "accent.bg",
      ],
    },
    floating: {
      title: "Floating",
      values: [
        "floating.surface",
        "floating.surface.hover",
        "floating.surface.active",
        "floating.outline",
        "floating.outline.hover",
        "floating.text",
        "floating.icon",
      ],
    },
    ghost: {
      title: "Ghost",
      values: [
        "ghost.surface.hover",
        "ghost.surface.active",
        "ghost.text",
        "ghost.icon",
      ],
    },
    detail: {
      title: "Detail",
      values: [
        "detail.color.neutral",
        "detail.color.grey",
        "detail.color.green",
        "detail.color.blue",
        "detail.color.cream",
        "detail.color.yellow",
        "detail.color.orange",
        "detail.color.red",
      ],
    },
  };

  const alertStyles = {
    important: {
      title: "Important",
      values: [
        "alert.important.surface",
        "alert.important.surface.hover",
        "alert.important.surface.active",
        "alert.important.surface.outline",
        "alert.important.outline.hover",
      ],
    },
    alt: {
      title: "Alt",
      values: [
        "alert.alt.surface",
        "alert.alt.surface.hover",
        "alert.alt.surface.active",
        "alert.alt.surface.outline",
        "alert.alt.outline.hover",
      ],
    },
    success: {
      title: "Success",
      values: [
        "alert.success.surface",
        "alert.success.surface.hover",
        "alert.success.surface.active",
        "alert.success.surface.outline",
        "alert.success.outline.hover",
      ],
    },
    error: {
      title: "Error",
      values: [
        "alert.error.surface",
        "alert.error.surface.hover",
        "alert.error.surface.active",
        "alert.error.surface.outline",
        "alert.error.outline.hover",
      ],
    },
    info: {
      title: "Info",
      values: [
        "alert.info.surface",
        "alert.info.surface.hover",
        "alert.info.surface.active",
        "alert.info.surface.outline",
        "alert.info.outline.hover",
      ],
    },
    service: {
      title: "Service",
      values: [
        "alert.service.surface",
        "alert.service.surface.hover",
        "alert.service.surface.active",
        "alert.service.surface.outline",
        "alert.service.outline.hover",
      ],
    },
  };

  const allColors = Object.values(tokens.color.palette as unknown as Palette)
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
      title="Elements"
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

        <LinkableHeading as="h2" variant="xl-display" mt={3}>
          Alerts
        </LinkableHeading>
        {Object.entries(alertStyles).map(([key, element]) => (
          <Flex flexDirection="column" gap={2} key={key}>
            <LinkableHeading as="h3" variant="md" fontWeight="bold">
              {element.title}
            </LinkableHeading>
            <ColorGrid colors={generateColorArray(element.values)} />
          </Flex>
        ))}

        <Flex flexDirection="column" gap={3} mt={3}>
          <LinkableHeading as="h2" variant="xl-display">
            Complete palette
          </LinkableHeading>
          <ColorGrid
            isVertical={false}
            colors={generateColorArray(mergedPalette)}
          />
        </Flex>
        <Flex flexDirection="column" gap={3} mt={3}>
          <LinkableHeading as="h2" variant="xl-display">
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
