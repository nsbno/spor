import { Box, BoxProps, Stack } from "@vygruppen/spor-react";
import { LiveEditor } from "./LiveEditor";
import { LiveError } from "./LiveError";
import { LivePreview } from "./LivePreview";
import { LiveProvider } from "./LiveProvider";

type InteractiveCodeProps = {
  children: string;
  layout: "simple" | "preview-only" | "code-only" | "advanced";
} & BoxProps;
export const InteractiveCode = ({
  children,
  layout,
  ...rest
}: InteractiveCodeProps) => {
  return (
    <Box {...rest}>
      <LiveProvider code={children?.trim()}>
        <Stack spacing={2}>
          {layout === "simple" && (
            <>
              <LivePreview />
              <LiveEditor />
            </>
          )}
          {layout === "preview-only" && <LivePreview />}
          {layout === "code-only" && <LiveEditor />}
          <LiveError />
        </Stack>
      </LiveProvider>
    </Box>
  );
};
