/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "chasegptaiimagegen3cec5c.blob.core.windows.net",
      "links.papareact.com",
    ],
  },
};
