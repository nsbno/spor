import { Head, Html, Main, NextScript } from "next/document";
import { FontPreloading } from "../features/font-loading/FontPreloading";

export default function Document() {
  return (
    <Html lang="nb-NO">
      <Head>
        <FontPreloading />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
