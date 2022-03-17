import { Box, BoxProps, Stack } from "@vygruppen/spor-react";
import { useUserPreferences } from "../user-preferences/UserPreferencesContext";
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
  const { userPreferences } = useUserPreferences();
  return (
    <Box {...rest}>
      <LiveProvider code={children?.trim()}>
        <Stack spacing={2}>
          {layout === "simple" && (
            <>
              <LivePreview />
              {userPreferences.userType === "developer" && <LiveEditor />}
              <LiveError />
            </>
          )}
          {layout === "preview-only" && <LivePreview />}
        </Stack>
      </LiveProvider>
    </Box>
  );
};
