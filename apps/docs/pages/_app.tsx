import { Language, SporProvider } from "@vygruppen/spor-react";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { BaseLayout } from "../features/layouts/base-layout/BaseLayout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function SporDocsApp({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getDefaultLayout;
  return (
    <SporProvider language={Language.English}>
      {getLayout(<Component {...pageProps} />)}
    </SporProvider>
  );
}

const getDefaultLayout = (page: any) => <BaseLayout>{page}</BaseLayout>;
