import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import {
  createReadableStreamFromReadable,
  type EntryContext,
} from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "stream";

import { createEmotionCache } from "./root/setup/chakra-setup/createEmotionCache";
import { ServerStyleContext } from "./root/setup/chakra-setup/styleContext";

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
