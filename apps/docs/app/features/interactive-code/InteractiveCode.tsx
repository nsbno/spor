import { Box, BoxProps, Stack } from "@vygruppen/spor-react";
import { LiveEditor } from "./LiveEditor";
import { LiveError } from "./LiveError";
import { LivePreview } from "./LivePreview";
import { LiveProvider } from "./LiveProvider";

type InteractiveCodeProps = {
  code: string;
  layout: "simple" | "preview-only" | "code-only" | "advanced";
} & BoxProps;
export const InteractiveCode = ({
  code,
  layout = "simple",
  ...rest
}: InteractiveCodeProps) => {
  return (
    <Box {...rest}>
      <LiveProvider code={code}>
        <Stack spacing={2}>
          {layout === "simple" && (
            <>
              <LivePreview />
              <LiveEditor />
              <LiveError />
            </>
          )}
          {layout === "preview-only" && <LivePreview />}
        </Stack>
      </LiveProvider>
    </Box>
  );
};
