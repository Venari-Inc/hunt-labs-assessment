/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2jgxrbnm3mr8f.cloudfront.net',
        port: '',
      },
    ],
  },
};

export default nextConfig;
