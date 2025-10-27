import "./styles/style-overrides.css";

import { withEmotionCache } from "@emotion/react";
import { Brand, Language, SporProvider, themes } from "@vygruppen/spor-react";
import { type ReactNode, useContext, useEffect } from "react";
import {
  type ActionFunctionArgs,
  data,
  isRouteErrorResponse,
  Links,
  type LinksFunction,
  type LoaderFunctionArgs,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useRouteError,
} from "react-router";

import ReactHookFormDemo from "./ReactHookFormDemo";
import { RootLayout } from "./root/layout/RootLayout";
import { SkipToContent } from "./root/layout/SkipToContent";
import { PageNotFound } from "./root/PageNotFound";
import {
  ClientStyleContext,
  ServerStyleContext,
} from "./root/setup/chakra-setup/styleContext";
import { RootErrorBoundary } from "./root/setup/error-boundary/RootErrorBoundary";
import {
  getBrandFromCookie,
  setBrandInCookie,
} from "./utils/brand-cookie.server";
import { getInitialSanityData } from "./utils/initialSanityData.server";
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
    meta.push(
      {
        name: "og:image",
        content: urlBuilder.image(socialImage).width(1200).url(),
      },
      {
        name: "og:image:width",
        content: "1200",
      },
      {
        name: "og:image:height",
        content: "600",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: urlBuilder.image(socialImage).width(1200).url(),
      },
    );
  }

  return meta;
};

export const links: LinksFunction = () => {
  const fontNames = [
    "VyDisplay-Medium",
    "VySans-Regular",
    "VySans-Light",
    "VySans-Bold",
  ];

  const fonts = fontNames.map((fontName) => ({
    rel: "preconnect",
    href: `https://www.vy.no/styles/font/${fontName}.woff2`,
    as: "font",
    type: "font/woff2",
  }));

  return [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
    ...fonts,
  ];
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const initialSanityData = await getInitialSanityData();
  const brand = await getBrandFromCookie(request.headers.get("cookie") ?? "");

  const isMac = /Mac|iPod|iPhone|iPad/.test(
    request.headers.get("user-agent") ?? "",
  );

  const slug = params.slug || "";

  const domain = request.headers.get("host") ?? "";

  return {
    initialSanityData,
    cookies: request.headers.get("cookie") ?? "",
    brand,
    isMac,
    domain,
    slug,
    env: process.env.VITE_ENVIRONMENT || "dev",
  };
};

/**
 * The error boundary shown if no other error boundary catches the error
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
  brand?: Brand;
};

const Document = withEmotionCache(
  ({ children, brand, title }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);
    const loaderData = useLoaderData<typeof loader>();

    // Only executed on client.
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      for (const tag of tags) {
        // eslint-disable-next-line
        (emotionCache.sheet as any)._insertTag(tag);
      }
      // reset cache to reapply global styles
      clientStyleData.reset();
      // We need to exclude the clientStyleData and emotionCache from the dependency array, due to infinite re-renders
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const location = useLocation();
    const selectedLanguage = location.pathname.startsWith("/spor")
      ? "en-gb"
      : "nb";

    return (
      <html lang={selectedLanguage} style={{ scrollBehavior: "smooth" }}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
          <script
            // Prevent CSP nonce issues if applicable
            dangerouslySetInnerHTML={{
              __html: `window.__ENV__ = { VITE_ENVIRONMENT: "${loaderData.env || ""}" };`,
            }}
          />
        </head>
        <body style={{ overflowX: "hidden" }}>
          <SporProvider
            language={Language.NorwegianBokmal}
            theme={themes[brand ?? "VyDigital"]}
          >
            <SkipToContent />
            <ReactHookFormDemo />
            {children}
          </SporProvider>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  },
);

export default function App() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <Document brand={loaderData.brand as Brand}>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </Document>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const brandString = formData.get("brand") as string;
  const brand = parseStringToBrand(brandString);
  if (!brand) {
    return data({ error: "Brand is required" }, { status: 400 });
  }

  return data(
    { status: "ok" },
    { status: 200, headers: { "Set-Cookie": await setBrandInCookie(brand) } },
  );
};

function parseStringToBrand(input: string): Brand | undefined {
  if (Object.values(Brand).includes(input as Brand)) {
    return input as Brand;
  }
  return undefined;
}
