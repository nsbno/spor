import { PassThrough } from "node:stream";

import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { createReadableStreamFromReadable } from "@react-router/node";
import { type EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

import { createEmotionCache } from "./root/setup/chakra-setup/createEmotionCache";
import { ServerStyleContext } from "./root/setup/chakra-setup/styleContext";

const streamTimeout = 15_000;

function isMethodNotAllowedError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    (error as { status?: unknown }).status == 405
  );
}

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext,
) =>
  isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        reactRouterContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        reactRouterContext,
      );

export default handleRequest;

const handleBrowserRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext,
) =>
  new Promise((resolve, reject) => {
    let didError = false;

    const cache = createEmotionCache();

    const { pipe, abort } = renderToPipeableStream(
      <ServerStyleContext.Provider value={[]}>
        <CacheProvider value={cache}>
          <ServerRouter context={reactRouterContext} url={request.url} />
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

          if (isMethodNotAllowedError(error)) {
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
  reactRouterContext: EntryContext,
) =>
  new Promise((resolve, reject) => {
    let didError = false;
    const cache = createEmotionCache();

    const { pipe, abort } = renderToPipeableStream(
      <ServerStyleContext.Provider value={[]}>
        <CacheProvider value={cache}>
          <ServerRouter context={reactRouterContext} url={request.url} />
        </CacheProvider>
      </ServerStyleContext.Provider>,
      {
        onAllReady: () => {
          const body = new PassThrough();
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

          if (isMethodNotAllowedError(error)) {
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
