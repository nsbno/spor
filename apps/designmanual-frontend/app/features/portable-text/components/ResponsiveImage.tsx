import tokens from "@vygruppen/spor-design-tokens";
import { Box, Image, type ImageProps } from "@vygruppen/spor-react";

import { useImageUrlBuilder } from "~/features/cms/sanity/image";
import { type SanityImage } from "~/features/cms/sanity/query";

export type ImageSize = "sm" | "md" | "lg";

type Breakpoint = "sm" | "md" | "lg" | "xl";

type ImageRendererProps = {
  aspectRatio?: number;
  image: SanityImage;
  size: ImageSize;
  quality?: number;
  multiplier?: number;
  format?: "svg" | "webp";
} & ImageProps;

function imageWidth(
  size: ImageSize,
  breakpoint: Breakpoint,
  multiplier: number,
) {
  switch (breakpoint) {
    case "sm": {
      return 500 * multiplier;
    }
    case "md": {
      if (size === "sm") {
        return 375 * multiplier;
      }
      return size === "md" ? 500 * multiplier : 750 * multiplier;
    }
    case "lg": {
      if (size === "sm") {
        return 500 * multiplier;
      } else if (size === "md") {
        return 750 * multiplier;
      } else {
        return 1000 * multiplier;
      }
    }
    case "xl": {
      if (size === "sm") {
        return 750 * multiplier;
      } else if (size === "md") {
        return 1175 * multiplier;
      } else {
        return 1500 * multiplier;
      }
    }
  }
}

export const ResponsiveImage = ({
  image,
  size,
  aspectRatio,
  quality = 60,
  multiplier = 1,
  format,
  ...props
}: ImageRendererProps) => {
  const imageBuilder = useImageUrlBuilder(format);

  const imageSource = (breakpoint: Breakpoint, multiplier: number) => {
    try {
      const baseImage = imageBuilder
        .image(image)
        .auto("format")
        .width(imageWidth(size, breakpoint, multiplier))
        .quality(quality);

      return aspectRatio && breakpoint
        ? baseImage
            .height(
              Math.ceil(imageWidth(size, breakpoint, multiplier) / aspectRatio),
            )
            .fit("crop")
            .url()
        : baseImage.url();
    } catch {
      return "/fallback.jpg"; // Fallback image in case of an error
    }
  };

  const isIllustration = image.isIllustration ?? false;
  const altText = isIllustration ? "" : image.altText?.trim() || "";

  const objectPositionStyle = image.hotspot
    ? {
        objectPosition: `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`,
      }
    : {};

  return (
    <Box width="100%">
      <picture>
        <source
          media={`(min-width: ${tokens.size.breakpoint.xl})`}
          srcSet={`${imageSource("xl", multiplier)} 1x, ${imageSource("xl", 2 * multiplier)} 2x`}
        />

        <source
          media={`(min-width: ${tokens.size.breakpoint.lg})`}
          srcSet={`${imageSource("lg", multiplier)} 1x, ${imageSource("lg", 2 * multiplier)} 2x`}
        />

        <source
          media={`(min-width: ${tokens.size.breakpoint.md})`}
          srcSet={`${imageSource("md", multiplier)} 1x, ${imageSource("md", 2 * multiplier)} 2x`}
        />

        <source
          media={`(min-width: ${tokens.size.breakpoint.sm})`}
          srcSet={`${imageSource("sm", multiplier)} 1x, ${imageSource("sm", 2 * multiplier)} 2x`}
        />

        <Image
          src={imageSource("sm", multiplier)}
          srcSet={`${imageSource("sm", 2 * multiplier)} 2x`}
          alt={altText}
          style={{ ...props.style, ...objectPositionStyle }}
          {...props}
        />
      </picture>
    </Box>
  );
};
