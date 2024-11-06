import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <body className="font-normal font-Pretendard break-keep selection:bg-PRIMARY_LIGHT selection:dark:text-BLACK text-BLACK dark:bg-BLACK dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
