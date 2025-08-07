import { CacheProvider } from "@emotion/react";
import { HydratedRouter } from "react-router/dom";
import { startTransition, StrictMode, useState } from "react";
import { hydrateRoot } from "react-dom/client";

import { createEmotionCache } from "./root/setup/chakra-setup/createEmotionCache";
import { ClientStyleContext } from "./root/setup/chakra-setup/styleContext";

type ClientCacheProviderProps = {
  children: React.ReactNode;
};

const ClientCacheProvider = ({ children }: ClientCacheProviderProps) => {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
};

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ClientCacheProvider>
          <HydratedRouter />
        </ClientCacheProvider>
      </StrictMode>,
    );
  });
};

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
