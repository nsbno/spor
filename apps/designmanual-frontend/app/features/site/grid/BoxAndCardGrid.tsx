import { Grid, GridItem } from "@vygruppen/spor-react";

import type { ImageSize } from "~/features/portable-text/components/ResponsiveImage";

type Props = {
  gridItems: JSX.Element[];
  cardSize?: "sm" | "lg";
  spacingSize?: "sm" | "lg";
};

type GridContainerProps = {
  children: React.ReactNode;
  spacingSize?: "sm" | "lg";
};

const GridContainer = ({ children, spacingSize }: GridContainerProps) => (
  <Grid
    templateColumns={["repeat(6, 1fr)", null, null, "repeat(12, 1fr)"]}
    gap={spacingSize === "lg" ? 5 : [2, 3, null, 4]}
  >
    {children}
  </Grid>
);

export function BoxAndCardGrid({
  gridItems,
  cardSize = "lg",
  spacingSize = "sm",
}: Props) {
  if (gridItems.length === 1) {
    return (
      <GridContainer>
        <GridItem
          colStart={cardSize === "sm" ? 1 : [1, 2, null, 3]}
          colSpan={
            cardSize === "sm"
              ? { base: 3, sm: 2, lg: 3 }
              : { base: 6, sm: 4, lg: 8 }
          }
        >
          {gridItems[0]}
        </GridItem>
      </GridContainer>
    );
  }

  if (gridItems.length === 2 || gridItems.length === 4) {
    return (
      <GridContainer spacingSize={spacingSize}>
        {gridItems.map((gridItem) => (
          <GridItem
            key={gridItem.key}
            colSpan={
              cardSize === "sm"
                ? { base: 3, sm: 2, lg: 3 }
                : { base: 6, sm: 3, lg: 6 }
            }
          >
            {gridItem}
          </GridItem>
        ))}
      </GridContainer>
    );
  }

  return (
    <GridContainer spacingSize={spacingSize}>
      {gridItems.map((gridItem) => (
        <GridItem
          key={gridItem.key}
          colSpan={
            cardSize === "sm"
              ? { base: 3, sm: 2, lg: 3 }
              : { base: 6, sm: 3, lg: 4 }
          }
        >
          {gridItem}
        </GridItem>
      ))}
    </GridContainer>
  );
}

export function getGridImageSize(amountOfGridItems: number) {
  let imageSize: ImageSize;

  if (amountOfGridItems > 1) {
    imageSize =
      amountOfGridItems === 2 || amountOfGridItems === 4 ? "md" : "sm";
  } else {
    imageSize = "lg";
  }
  return imageSize;
}
