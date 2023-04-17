import { ColorModeScript } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import { json, LinksFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  V2_MetaFunction,
} from "@remix-run/react";
import { ReactNode, useContext, useEffect } from "react";
import { RootLayout } from "./root/layout/RootLayout";
import { SkipToContent } from "./root/layout/SkipToContent";
import { PageNotFound } from "./root/PageNotFound";
import {
  ClientStyleContext,
  ServerStyleContext,
} from "./root/setup/chakra-setup/styleContext";
import { RootErrorBoundary } from "./root/setup/error-boundary/RootErrorBoundary";
import { FontPreloading } from "./root/setup/font-loading/FontPreloading";
import { RootProviders } from "./root/setup/RootProviders";
import {
  getInitialSanityData,
  InitialSanityData,
} from "./utils/initialSanityData.server";
import { urlBuilder } from "./utils/sanity/utils";

export const meta: V2_MetaFunction = ({ data }: { data: LoaderData }) => {
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
export const loader = async () => {
  const initialSanityData = await getInitialSanityData();

  return json({
    initialSanityData,
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
    <Document title="Error!">
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
          <ColorModeScript />
          <RootProviders>
            <SkipToContent />
            {children}
          </RootProviders>
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
      <RootLayout>
        <Outlet />
      </RootLayout>
    </Document>
  );
}
