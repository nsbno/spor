import { type PortableTextBlock } from "@portabletext/types";
import { Box, Flex, Grid, GridItem, Stack } from "@vygruppen/spor-react";

import { BlockHeading } from "~/features/portable-text/components/BlockHeading";

import { PortableText } from "../PortableText";

type TextBlocksProps = {
  heading?: string;
  subheading?: string;
  headingIcon?: string;
  items: { _type: "textBlock"; content: PortableTextBlock[] }[];
};

export const TextBlocks = ({
  heading,
  subheading,
  headingIcon,
  items,
}: TextBlocksProps) => {
  const blockCount = items.length;
  if (blockCount === 0) {
    return null;
  } else if (blockCount === 1) {
    return (
      <Grid
        templateColumns={["repeat(6, 1fr)", null, null, "repeat(12, 1fr)"]}
        data-testid="text-blocks"
        marginTop={8}
      >
        {heading && (
          <BlockHeading
            heading={heading}
            subheading={subheading}
            icon={headingIcon}
          />
        )}
        <GridItem colStart={[1, 2, null, 3]} colSpan={[6, 4, null, 8]}>
          <PortableText value={items[0].content} />
        </GridItem>
      </Grid>
    );
  } else {
    return (
      <Stack data-testid="text-blocks">
        {heading && <BlockHeading heading={heading} subheading={subheading} />}
        <Flex gap={[7, 3, null, 4]} flexDirection={["column", "row"]}>
          {items.map(
            (item: {
              _type: "textBlock";
              content: PortableTextBlock[];
              _key?: string;
            }) => (
              <Box flex="1" key={item._key}>
                <PortableText value={item.content} />
              </Box>
            ),
          )}
        </Flex>
      </Stack>
    );
  }
};
