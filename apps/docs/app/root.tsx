import { withEmotionCache } from "@emotion/react";
import {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
  data,
} from "@remix-run/node";
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { Brand, Language, SporProvider } from "@vygruppen/spor-react";
import { ReactNode, useContext, useEffect, useRef } from "react";
import { PageNotFound } from "./root/PageNotFound";
import { RootLayout } from "./root/layout/RootLayout";
import { SkipToContent } from "./root/layout/SkipToContent";
import {
  ClientStyleContext,
  ServerStyleContext,
} from "./root/setup/chakra-setup/styleContext";
import { RootErrorBoundary } from "./root/setup/error-boundary/RootErrorBoundary";
import "./styles/style-overrides.css";
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const initialSanityData = await getInitialSanityData();
  const brand = await getBrandFromCookie(request.headers.get("cookie") ?? "");

  const isMac = /Mac|iPod|iPhone|iPad/.test(
    request.headers.get("user-agent") ?? "",
  );

  return {
    initialSanityData,
    cookies: request.headers.get("cookie") ?? "",
    brand,
    isMac,
  };
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
  brand?: Brand;
};

const Document = withEmotionCache(
  ({ children, brand, title }: DocumentProps, emotionCache) => {
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
        // eslint-disable-next-line
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
      // We need to exclude the clientStyleData and emotionCache from the dependency array, due to infinite re-renders
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en-gb">
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
        </head>
        <body>
          <SporProvider
            language={Language.English}
            brand={brand}
            value={defaultSystem}
          >
            <SkipToContent />
            {children}
          </SporProvider>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  },
);

function useConst<T>(value: T): T {
  const ref = useRef(value);
  return ref.current;
}

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
