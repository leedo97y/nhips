/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // cors 에러 해결
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_SOCIAL_NEWS_URL}/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_ECONOMY_NEWS_URL}/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_POLITICS_NEWS_URL}/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_WORLD_NEWS_URL}/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_IT_NEWS_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
