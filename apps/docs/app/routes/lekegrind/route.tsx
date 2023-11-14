import { Stack } from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { LivePreview } from "react-live";
import { LiveEditor } from "~/features/portable-text/interactive-code/LiveEditor";
import { LiveError } from "~/features/portable-text/interactive-code/LiveError";
import { LiveProvider } from "~/features/portable-text/interactive-code/LiveProvider";

const defaultCode = `<Stack textAlign="center">
  <Heading>Velkommen til lekegrinden</Heading>
  <Text>Her kan du teste ut hele Spor live i nettleseren.</Text>
  <Text>Alle komponentene er tilgjengelige, så du trenger ikke importere noe.</Text>
</Stack>`;

export default function PlaygroundPage() {
  const [playgroundData, setPlaygroundData] = useState(() => "");
  useEffect(() => {
    const storedData = localStorage.getItem("playgroundData");
    setPlaygroundData(defaultCode);
  }, []);

  const handleChange = (newCode: string) => {
    setPlaygroundData(newCode);
    localStorage.setItem("playgroundData", newCode);
  };
  return (
    <LiveProvider code={playgroundData}>
      <Stack spacing={2} id="content">
        <LiveEditor
          borderRadius="none"
          minHeight="200px"
          onChange={handleChange}
        />
        <LiveError />
        <LivePreview />
      </Stack>
    </LiveProvider>
  );
}
