/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["chasegptaiimagegen3cec5c.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
