import { cookieStorageManagerSSR, useConst } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
  json,
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
import { ReactNode, useContext, useEffect } from "react";
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
  getBrandFromCookie,
  setBrandInCookie,
} from "./utils/brand-cookie.server";
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
  const brand = await getBrandFromCookie(request.headers.get("cookie") ?? "");

  return json({
    initialSanityData,
    cookies: request.headers.get("cookie") ?? "",
    brand,
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
  brand?: Brand;
  colorModeManager?: ReturnType<typeof cookieStorageManagerSSR>;
};

const Document = withEmotionCache(
  (
    { children, brand, title, colorModeManager }: DocumentProps,
    emotionCache,
  ) => {
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
            brand={brand}
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

export default function App() {
  const loaderData = useLoaderData<typeof loader>();

  const colorModeManager = useConst(
    cookieStorageManagerSSR(loaderData?.cookies),
  );
  return (
    <Document
      colorModeManager={colorModeManager}
      brand={loaderData.brand as Brand}
    >
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
    return json({ error: "Brand is required" }, { status: 400 });
  }

  return json(
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
