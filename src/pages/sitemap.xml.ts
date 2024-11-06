import { GetServerSideProps } from "next";
import { format } from "date-fns";

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nhips.vercel.app";

  // 정적 페이지 URL 목록
  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/social`,
    `${baseUrl}/world`,
    `${baseUrl}/economy`,
    `${baseUrl}/politics`,
    `${baseUrl}/it-science`,
  ];

  // 동적 라우트의 pressname 값을 설정
  const pressnames = ["YH", "MBC", "SBS", "MBN", "KBS", "YTN", "CA", "HAN"];
  const dynamicPages = pressnames.map((pressname) => `${baseUrl}/ranking/${pressname}`);

  // 모든 페이지 URL 통합
  const allPages = [...staticPages, ...dynamicPages];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
