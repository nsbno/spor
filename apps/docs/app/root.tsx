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
import {
  getInitialSanityData,
  InitialSanityData,
} from "./utils/initialSanityData.server";
import { urlBuilder } from "./utils/sanity/utils";
import { getUserPreferencesSession } from "./utils/userPreferences.server";

export const meta: MetaFunction = ({ data }: { data: LoaderData }) => {
  const { title, description, keywords, socialImage } =
    data.initialSanityData.siteSettings;

  const imageMetaTags = socialImage
    ? {
        "og:image": urlBuilder.image(socialImage).width(1200).url(),
        "og:image:width": "1200",
        "og:image:height": "600",
      }
    : {};
  return {
    title,
    description,
    keywords: keywords.join(", "),
    "og:title": title,
    "og:description": description,
    ...imageMetaTags,
    "twitter:card": "summary",
  };
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

export type LoaderData = {
  userPreferences?: UserPreferences;
  initialSanityData: InitialSanityData;
};
export const loader: LoaderFunction = async ({ request }) => {
  const [session, initialSanityData] = await Promise.all([
    getUserPreferencesSession(request),
    getInitialSanityData(),
  ]);

  console.log(initialSanityData);

  return {
    userPreferences: session.getUserPreferences(),
    initialSanityData,
  };
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
