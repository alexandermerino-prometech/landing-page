import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'prometech.com.pe' }],
        destination: 'https://www.prometech.com.pe/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
