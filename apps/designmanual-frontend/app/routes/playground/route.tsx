import { Skeleton, Stack } from "@vygruppen/spor-react";
import { StrictMode, useState } from "react";
import { LivePreview } from "react-live";
import { useLoaderData } from "react-router";

import { LiveEditor } from "~/features/portable-text/interactive-code/LiveEditor";
import { LiveError } from "~/features/portable-text/interactive-code/LiveError";
import { LiveProvider } from "~/features/portable-text/interactive-code/LiveProvider";

const defaultCode = `<Stack textAlign="center">
  <Heading>Welcome to the playground</Heading>
  <Text>Here, you can test out Spor in your browser</Text>
  <Text>
    All components are exposed as global variables, 
    so you don't need to download anything.
  </Text>
</Stack>`;

// localStorage only exists in the browser, so read it in a clientLoader.
export const clientLoader = () =>
  localStorage.getItem("playgroundData") ?? defaultCode;

export const HydrateFallback = () => (
  <Stack gap={2} role="status" aria-label="Loading playground">
    <Skeleton height={13} />
    <Skeleton height={11} />
  </Stack>
);

export default function PlaygroundPage() {
  const [playgroundData, setPlaygroundData] = useState(
    useLoaderData<typeof clientLoader>(),
  );

  const handleChange = (newCode: string) => {
    setPlaygroundData(newCode);
    localStorage.setItem("playgroundData", newCode);
  };

  return (
    <StrictMode>
      <LiveProvider code={playgroundData}>
        <Stack gap={2} id="content">
          <LiveEditor
            borderRadius="none"
            minHeight="200px"
            onChange={handleChange}
          />
          <LiveError />
          <LivePreview />
        </Stack>
      </LiveProvider>
    </StrictMode>
  );
}
