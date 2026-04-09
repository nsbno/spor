import { type PortableTextBlock } from "@portabletext/types";
import { Box, Flex, Stack } from "@vygruppen/spor-react";

import { PortableText } from "../PortableText";

export type TextBlockProps = {
  textBlock: { _type: "textBlock"; content: PortableTextBlock[] };
};

export const TextBlock = ({ textBlock }: TextBlockProps) => {
  return (
    <Stack data-testid="text-blocks" as="section">
      <Flex gap={[7, 3, null, 4]} flexDirection={["column", "row"]}>
        <Box flex="1" marginTop={4} marginBottom={4}>
          <PortableText value={textBlock.content} />
        </Box>
      </Flex>
    </Stack>
  );
};
