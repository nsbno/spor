import { CacheProvider } from "@emotion/react";
import { useState } from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { createEmotionCache } from "./features/chakra-setup/createEmotionCache";
import { ClientStyleContext } from "./features/chakra-setup/styleContext";

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

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
