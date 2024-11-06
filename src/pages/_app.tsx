import React from "react";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const DEFAULT_SEO = {
  title: "Nhips | 간편한 뉴스",
  description: "간식처럼 간편하게 뉴스를 즐길 수 있게 만드는 웹 서비스 입니다.",
  canonical: "https://nhips.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://nhips.vercel.app/",
    title: "Nhips | 간편한 뉴스",
    site_name: "Nhips | 간편한 뉴스",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "Nhips | 간편한 뉴스",
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
      content: "Nhips | 간편한 뉴스",
    },
    {
      name: "msapplication-tooltip",
      content: "Nhips | 간편한 뉴스",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
