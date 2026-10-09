import { useCallback } from "react";
import { set, unset, useFormValue } from "sanity";
import type { StringInputProps } from "sanity";
import { Card, Flex, Text, Box, Stack } from "@sanity/ui";

const LAYOUT_VARIANTS = [
  {
    imageCount: 2,
    title: "Equal size",
    value: "equally-sized",
    previewSrc: "/static/layout-variant-2-equal.png",
  },
  {
    imageCount: 2,
    title: "Left heavy",
    value: "left-heavy",
    previewSrc: "/static/layout-variant-2-left-heavy.png",
  },
  {
    imageCount: 2,
    title: "Right heavy",
    value: "right-heavy",
    previewSrc: "/static/layout-variant-2-right-heavy.png",
  },
  {
    imageCount: 3,
    title: "Left heavy",
    value: "left-heavy",
    previewSrc: "/static/layout-variant-3-left-heavy.png",
  },
  {
    imageCount: 3,
    title: "Right heavy",
    value: "right-heavy",
    previewSrc: "/static/layout-variant-3-right-heavy.png",
  },
  {
    imageCount: 4,
    title: "Equal size",
    value: "equal-size",
    previewSrc: "/static/layout-variant-4-equal.png",
  },
] as const;

export function ImageBlockLayoutInput(props: StringInputProps) {
  const { value, onChange, readOnly, path } = props;
  const imagesPath = [...path.slice(0, -1), "images"];
  const images = useFormValue(imagesPath) as unknown[] | undefined;
  const imageCount = images?.length ?? 0;

  const handleSelect = useCallback(
    (newValue: string) => {
      onChange(newValue ? set(newValue) : unset());
    },
    [onChange],
  );

  const filteredVariants = LAYOUT_VARIANTS.filter(
    (variant) => variant.imageCount === imageCount,
  );

  return (
    <Flex gap={3}>
      {filteredVariants.map((variant) => {
        const isSelected = value === variant.value;

        return (
          <Card
            key={variant.imageCount.toString() + variant.value}
            radius={2}
            shadow={isSelected ? 2 : 1}
            tone={isSelected ? "primary" : "default"}
            style={{
              cursor: readOnly ? "default" : "pointer",
              flex: 1,
              border: `2px solid ${isSelected ? "var(--card-focus-ring-color)" : "transparent"}`,
              transition: "all 0.15s ease",
            }}
            onClick={() => !readOnly && handleSelect(variant.value)}
          >
            <Stack>
              <Box
                padding={3}
                style={{
                  minHeight: "7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={variant.previewSrc}
                  alt={`${variant.title} preview`}
                  style={{
                    maxHeight: "7rem",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Text
                size={1}
                weight="semibold"
                style={{
                  padding: "0.5rem",
                  textAlign: "center",
                }}
              >
                {variant.title}
              </Text>
            </Stack>
          </Card>
        );
      })}
    </Flex>
  );
}
