import { withEmotionCache } from "@emotion/react";
import { Heading, Language, SporProvider, Text } from "@vygruppen/spor-react";
import { ReactNode, useContext, useEffect } from "react";
import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import {
  ClientStyleContext,
  ServerStyleContext,
} from "./features/chakra-setup/styleContext";
import { RootErrorBoundary } from "./features/error-boundary/RootErrorBoundary";
import { FontPreloading } from "./features/font-loading/FontPreloading";
import { BaseLayout } from "./features/layouts/base-layout/BaseLayout";
import { UserPreferencesProvider } from "./features/user-preferences/UserPreferencesContext";

export const meta: MetaFunction = () => {
  return { title: "Spor - Vy Design System" };
};

/**
 * The error boundary shown if no other error boundary catches the error.
 */
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <RootErrorBoundary error={error} />
    </Document>
  );
}

/**
 * Catches HTTP errors
 */
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 404:
      message = (
        <Text>
          Ups! Det ser ut som du prøvde å besøke en side som ikke finnes.
        </Text>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} - ${caught.statusText}`}>
      <Heading as="h1">
        {caught.status}: {caught.statusText}
      </Heading>
      {message}
    </Document>
  );
}

type DocumentProps = {
  children: ReactNode;
  title?: string;
};

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <FontPreloading />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <SporProvider language={Language.English}>
            <UserPreferencesProvider>
              <BaseLayout>{children}</BaseLayout>
            </UserPreferencesProvider>
          </SporProvider>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
