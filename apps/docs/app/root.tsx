import { cookieStorageManagerSSR, useConst } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import { LinksFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { Language, SporProvider } from "@vygruppen/spor-react";
import { ReactNode, useContext, useEffect } from "react";
import { PortableTextProvider } from "./features/portable-text/PortableText";
import { PageNotFound } from "./root/PageNotFound";
import { RootLayout } from "./root/layout/RootLayout";
import { SkipToContent } from "./root/layout/SkipToContent";
import {
  ClientStyleContext,
  ServerStyleContext,
} from "./root/setup/chakra-setup/styleContext";
import { RootErrorBoundary } from "./root/setup/error-boundary/RootErrorBoundary";
import { FontPreloading } from "./root/setup/font-loading/FontPreloading";
import {
  InitialSanityData,
  getInitialSanityData,
} from "./utils/initialSanityData.server";
import { urlBuilder } from "./utils/sanity/utils";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.initialSanityData) {
    return [];
  }
  const { title, description, keywords, socialImage } =
    data.initialSanityData.siteSettings;

  const meta = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (socialImage) {
    meta.push({
      name: "og:image",
      content: urlBuilder.image(socialImage).width(1200).url(),
    });
    meta.push({
      name: "og:image:width",
      content: "1200",
    });
    meta.push({
      name: "og:image:height",
      content: "600",
    });
    meta.push({ name: "twitter:card", content: "summary_large_image" });
    meta.push({
      name: "twitter:image",
      content: urlBuilder.image(socialImage).width(1200).url(),
    });
  }

  return meta;
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
  initialSanityData: InitialSanityData;
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const initialSanityData = await getInitialSanityData();

  return json({
    initialSanityData,
    cookies: request.headers.get("cookie") ?? "",
  });
};

/**
 * The error boundary shown if no other error boundary catches the error.
 */
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <Document title="Fant ikke siden!">
        <RootLayout>
          <PageNotFound />
        </RootLayout>
      </Document>
    );
  }
  return (
    <Document title="Feil oppstod">
      <RootErrorBoundary error={error} />
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

    const { cookies } = useLoaderData<typeof loader>();

    const colorModeManager = useConst(cookieStorageManagerSSR(cookies));

    return (
      <html lang="en-gb">
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
          <SporProvider
            language={Language.English}
            colorModeManager={colorModeManager}
          >
            <PortableTextProvider>
              <SkipToContent />
              {children}
            </PortableTextProvider>
          </SporProvider>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    );
  },
);

export default function App() {
  return (
    <Document>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </Document>
  );
}
