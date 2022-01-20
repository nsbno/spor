import { Language, SporProvider } from "@vygruppen/spor-react";
import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { FontPreloading } from "./features/font-loading/FontPreloading";
import { BaseLayout } from "./features/layouts/base-layout/BaseLayout";

export const meta: MetaFunction = () => {
  return { title: "Spor - The design system of Vy" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <FontPreloading />
      </head>
      <body>
        <SporProvider language={Language.English}>
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        </SporProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
