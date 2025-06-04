import {
  Box,
  InfoTag,
  LineIcon,
  Stack,
  TravelTag,
} from "@vygruppen/spor-react";
import { StrictMode, useEffect, useState } from "react";
import { LivePreview } from "react-live";

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

export default function PlaygroundPage() {
  const [playgroundData, setPlaygroundData] = useState(() => "");
  useEffect(() => {
    const storedData = localStorage.getItem("playgroundData");
    setPlaygroundData(storedData ?? defaultCode);
  }, []);

  const handleChange = (newCode: string) => {
    setPlaygroundData(newCode);
    localStorage.setItem("playgroundData", newCode);
  };

  return (
    <StrictMode>
      <Box margin={"50px"} width={"150px"}>
        <LineIcon variant="subway" label="Custom Ferry Icon" />
        <InfoTag variant="tram" title="3" size="sm" />
        <TravelTag
          variant="vy-bus"
          title="alt-transport"
          description="34"
          size="sm"
        />
      </Box>
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
