import Document, { Head, Html, Main, NextScript } from "next/document";
import { FontPreloading } from "../features/font-loading/FontPreloading";

export default class CustomDocument extends Document {
  render() {
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
}
