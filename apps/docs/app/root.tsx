import { withEmotionCache } from "@emotion/react";
import { Box, Center, Heading, Text } from "@vygruppen/spor-react";
import { ReactNode, useContext, useEffect } from "react";
import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "remix";
import {
  ClientStyleContext,
  ServerStyleContext,
} from "./features/chakra-setup/styleContext";
import { RootErrorBoundary } from "./features/error-boundary/RootErrorBoundary";
import { FontPreloading } from "./features/font-loading/FontPreloading";
import { BaseLayout } from "./features/layouts/base-layout/BaseLayout";
import { RootProviders } from "./features/root-providers/RootProviders";
import {
  UserPreferences,
  UserPreferencesProvider,
} from "./features/user-preferences/UserPreferencesContext";
import { getUserPreferenceSession as getUserPreferencesSession } from "./utils/userPreferences.server";

export const meta: MetaFunction = () => {
  return { title: "Spor - Vy Design System" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
  ];
};

type LoaderData = {
  userPreferences?: UserPreferences;
};
export const loader: LoaderFunction = async ({ request }) => {
  const session = await getUserPreferencesSession(request);
  const data: LoaderData = {
    userPreferences: session.getUserPreferences(),
  };
  return data;
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
      <Center minHeight="100vh">
        <Box textAlign="center">
          <Heading as="h1">
            {caught.status}: {caught.statusText}
          </Heading>
          {message}
        </Box>
      </Center>
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
      <html lang="nb-no">
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
          <RootProviders>{children}</RootProviders>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    );
  }
);

export default function App() {
  const { userPreferences } = useLoaderData<LoaderData>();
  return (
    <Document>
      <UserPreferencesProvider userPreferencesFromCookie={userPreferences}>
        <BaseLayout>
          <Outlet />
        </BaseLayout>
      </UserPreferencesProvider>
    </Document>
  );
}
