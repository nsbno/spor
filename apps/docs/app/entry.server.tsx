import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import {
  createReadableStreamFromReadable,
  type EntryContext,
} from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { createEmotionCache } from "./root/setup/chakra-setup/createEmotionCache";
import { ServerStyleContext } from "./root/setup/chakra-setup/styleContext";
import { PassThrough } from "stream";
import { isbot } from "isbot";

// export default function handleRequest(
//   request: Request,
//   responseStatusCode: number,
//   responseHeaders: Headers,
//   remixContext: EntryContext,
// ) {
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   const html = renderToString(
//     <ServerStyleContext.Provider value={null}>
//       <CacheProvider value={cache}>
//         <RemixServer context={remixContext} url={request.url} />
//       </CacheProvider>
//     </ServerStyleContext.Provider>,
//   );

//   const chunks = extractCriticalToChunks(html);

//   const markup = renderToString(
//     <ServerStyleContext.Provider value={chunks.styles}>
//       <CacheProvider value={cache}>
//         <RemixServer context={remixContext} url={request.url} />
//       </CacheProvider>
//     </ServerStyleContext.Provider>,
//   );

//   const cacheControl = "public, max-age=1800"; // 30 minute cache

//   responseHeaders.set("Content-Type", "text/html");
//   responseHeaders.set("Cache-Control", cacheControl);

//   return new Response(`<!DOCTYPE html>${markup}`, {
//     status: responseStatusCode,
//     headers: responseHeaders,
//   });
// }

const streamTimeout = 15000;

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) =>
  isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );

export default handleRequest;

const handleBrowserRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) =>
  new Promise((resolve, reject) => {
    let didError = false;

    const cache = createEmotionCache();

    const { pipe, abort } = renderToPipeableStream(
      <ServerStyleContext.Provider value={[]}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      </ServerStyleContext.Provider>,
      {
        onShellReady: () => {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          const emotionServer = createEmotionServer(cache);

          const bodyWithStyles = emotionServer.renderStylesToNodeStream();
          body.pipe(bodyWithStyles);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError: (error: unknown) => {
          reject(error);
        },
        onError: (error: unknown) => {
          didError = true;

          console.error(error);
          const wrappedError = error instanceof Error ? error : { error };

          if ((error as any)?.status == 405) {
            console.warn("Method not allowed", wrappedError);
            return;
          }
          console.error("Unknown server side error", wrappedError);
        },
      },
    );
    // Automatically timeout the React renderer after 16 seconds, which ensures
    // React has enough time to flush down the rejected boundary contents
    setTimeout(abort, streamTimeout + 1000);
  });

const handleBotRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) =>
  new Promise((resolve, reject) => {
    let didError = false;
    const cache = createEmotionCache();

    const { pipe, abort } = renderToPipeableStream(
      <ServerStyleContext.Provider value={[]}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      </ServerStyleContext.Provider>,
      {
        onAllReady: () => {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          const emotionServer = createEmotionServer(cache);

          const bodyWithStyles = emotionServer.renderStylesToNodeStream();
          body.pipe(bodyWithStyles);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(bodyWithStyles as unknown as BodyInit, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError: (error: unknown) => {
          reject(error);
        },
        onError: (error: unknown) => {
          didError = true;

          console.error(error);
          const wrappedError = error instanceof Error ? error : { error };

          if ((error as any)?.status == 405) {
            console.warn("Method not allowed", wrappedError);
            return;
          }
          console.error("Unknown server side error", wrappedError);
        },
      },
    );
    // Automatically timeout the React renderer after 16 seconds, which ensures
    // React has enough time to flush down the rejected boundary contents
    setTimeout(abort, streamTimeout + 1000);
  });
