import { SporProvider } from "@vygruppen/spor-react";
import { AppProps } from "next/app";

export default function SporDocsApp({ Component, pageProps }: AppProps) {
  return (
    <SporProvider>
      <Component {...pageProps} />
    </SporProvider>
  );
}
