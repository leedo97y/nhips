import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const DEFAULT_SEO = {
  title: "Nhips",
  description: "간식처럼 간편하게 뉴스를 즐길 수 있게 만드는 웹 서비스 입니다.",
  canonical: "https://nhips.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://nhips.vercel.app/",
    title: "Nhips",
    site_name: "Nhips",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "Nhips",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "Nhips",
    },
    {
      name: "msapplication-tooltip",
      content: "Nhips",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
