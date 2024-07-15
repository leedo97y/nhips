/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mimgnews.pstatic.net",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "imgnews.pstatic.net",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
        pathname: "/img/**",
      },
    ],
  },

  // cors 에러 해결
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_SOCIAL_NEWS_URL}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_ECONOMY_NEWS_URL}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_POLITICS_NEWS_URL}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_WORLD_NEWS_URL}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_IT_NEWS_URL}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_RANKING_NEWS_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
