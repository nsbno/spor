import { Box, BoxProps, Stack } from "@vygruppen/spor-react";
import { LiveEditor } from "./LiveEditor";
import { LiveError } from "./LiveError";
import { LivePreview } from "./LivePreview";
import { LiveProvider } from "./LiveProvider";

type InteractiveCodeProps = {
  children: string;
} & BoxProps;
export const InteractiveCode = ({
  children,
  ...rest
}: InteractiveCodeProps) => {
  return (
    <Box {...rest}>
      <LiveProvider code={children.trim()}>
        <Stack spacing={2}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </Stack>
      </LiveProvider>
    </Box>
  );
};
