/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // cors 에러 해결
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_NEWS_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
