import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { SporProvider } from "@vygruppen/spor-react";
import { renderToString } from "react-dom/server";

import { createEmotionCache } from "./emotion-cache";

export function createEmotion() {
  const cache = createEmotionCache();
  const server = createEmotionServer(cache);

  function injectStyles(html: string) {
    const { styles } = server.extractCriticalToChunks(html);

    let stylesHTML = "";

    for (const { key, ids, css } of styles) {
      const emotionKey = `${key} ${ids.join(" ")}`;
      const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
      stylesHTML = `${stylesHTML}${newStyleTag}`;
    }

    // add the emotion style tags after the insertion point meta tag
    const markup = html.replace(
      /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
      `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
    );

    return markup;
  }

  function _renderToString(element: React.ReactNode) {
    return renderToString(
      <CacheProvider value={cache}>
        <SporProvider>{element}</SporProvider>
      </CacheProvider>
    );
  }

  return {
    server,
    cache,
    injectStyles,
    renderToString: _renderToString,
  };
}
