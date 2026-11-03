import { Stack } from "@vygruppen/spor-react";
import { StrictMode, useSyncExternalStore } from "react";
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

const storageKey = "playgroundData";
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  globalThis.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    globalThis.removeEventListener("storage", listener);
  };
};

const getSnapshot = () => localStorage.getItem(storageKey) ?? defaultCode;

// localStorage doesn't exist on the server. React uses this snapshot for the
// server render and the first client render, then switches to getSnapshot.
const getServerSnapshot = () => defaultCode;

const saveCode = (code: string) => {
  localStorage.setItem(storageKey, code);
  for (const listener of listeners) listener();
};

export default function PlaygroundPage() {
  const playgroundData = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <StrictMode>
      <LiveProvider code={playgroundData}>
        <Stack gap={2} id="content">
          <LiveEditor
            borderRadius="none"
            minHeight="200px"
            onChange={saveCode}
          />
          <LiveError />
          <LivePreview />
        </Stack>
      </LiveProvider>
    </StrictMode>
  );
}
